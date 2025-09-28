import { Injectable, signal } from '@angular/core';
import { initializeApp } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, onAuthStateChanged, User as FirebaseUser } from 'firebase/auth';
import { getFirestore, doc, setDoc, getDoc } from 'firebase/firestore';
import { environment } from '../../environments/environment';
import { User, AuthState } from '@models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private app = initializeApp(environment.firebase);
  private auth = getAuth(this.app);
  private db = getFirestore(this.app);
  
  authState = signal<AuthState>({
    user: null,
    isAuthenticated: false,
    loading: true
  });

  constructor() {
    this.initializeAuth();
  }

  private async initializeAuth() {
    // Check for stored auth data
    const storedAuth = this.getStoredAuth();
    if (storedAuth && this.isAuthValid(storedAuth)) {
      this.authState.set({
        user: storedAuth.user,
        isAuthenticated: true,
        loading: false
      });
    }

    onAuthStateChanged(this.auth, async (firebaseUser) => {
      if (firebaseUser) {
        const user = await this.getUserData(firebaseUser.uid);
        const authData = {
          user,
          timestamp: Date.now()
        };
        
        // Store auth data
        localStorage.setItem('arc_auth', JSON.stringify(authData));
        
        this.authState.set({
          user,
          isAuthenticated: true,
          loading: false
        });
      } else {
        localStorage.removeItem('arc_auth');
        this.authState.set({
          user: null,
          isAuthenticated: false,
          loading: false
        });
      }
    });
  }

  async login(email: string, password: string): Promise<User> {
    const userCredential = await signInWithEmailAndPassword(this.auth, email, password);
    return await this.getUserData(userCredential.user.uid);
  }

  async register(email: string, password: string, name: string, role: 'patient' | 'staff' | 'admin' | 'sys-admin'): Promise<User> {
    const userCredential = await createUserWithEmailAndPassword(this.auth, email, password);
    
    const user: User = {
      id: userCredential.user.uid,
      email,
      name,
      role,
      createdAt: new Date()
    };

    await setDoc(doc(this.db, 'users', user.id), user);
    return user;
  }

  async logout(): Promise<void> {
    localStorage.removeItem('arc_auth');
    await signOut(this.auth);
  }

  private getStoredAuth(): { user: User; timestamp: number } | null {
    try {
      const stored = localStorage.getItem('arc_auth');
      return stored ? JSON.parse(stored) : null;
    } catch {
      return null;
    }
  }

  private isAuthValid(authData: { user: User; timestamp: number }): boolean {
    const now = Date.now();
    const oneDay = 24 * 60 * 60 * 1000; // 24 hours in milliseconds
    return (now - authData.timestamp) < oneDay;
  }

  private async getUserData(uid: string): Promise<User> {
    const userDoc = await getDoc(doc(this.db, 'users', uid));
    if (userDoc.exists()) {
      return userDoc.data() as User;
    }
    throw new Error('User data not found');
  }
}