import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LayoutService {
  private showFooterSubject = new BehaviorSubject<boolean>(true);
  public showFooter$: Observable<boolean> =
    this.showFooterSubject.asObservable();

  setFooterVisibility(show: boolean): void {
    this.showFooterSubject.next(show);
  }

  hideFooter(): void {
    this.setFooterVisibility(false);
  }

  showFooter(): void {
    this.setFooterVisibility(true);
  }
}
