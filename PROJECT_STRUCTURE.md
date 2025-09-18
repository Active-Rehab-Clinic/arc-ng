# Active Rehab Clinic (ARC) - Web Application Structure

## Project Overview
A comprehensive web application for Active Rehab Clinic to manage patient appointments, services, staff, and provide information to potential clients.

## Core Requirements

### 1. User Types
- **Patients**: Book appointments, view services, contact clinic
- **Staff/Admin**: Manage appointments, patients, services, schedules
- **Visitors**: Browse services, get information, contact clinic

### 2. Essential Features
- Appointment booking system
- Service catalog
- Staff management
- Patient portal
- Contact and location information
- Responsive design for mobile/desktop

## Page Structure

### Public Pages (No Authentication Required)

#### 1. Home Page (`/`)
- Hero section with clinic overview
- Featured services
- Quick appointment booking CTA
- Testimonials/reviews
- Contact information

#### 2. Services Page (`/services`)
- Complete list of rehabilitation services
- Service categories (Physical Therapy, Occupational Therapy, etc.)
- Service details with descriptions and pricing
- Book appointment for specific service

#### 3. About Us Page (`/about`)
- Clinic history and mission
- Team/staff profiles
- Certifications and credentials
- Facility photos

#### 4. Contact Page (`/contact`)
- Contact form
- Clinic location with map
- Phone, email, address
- Operating hours
- Insurance information

#### 5. Book Appointment Page (`/book`)
- Service selection
- Date/time picker
- Patient information form
- Confirmation system

### Patient Portal (Authentication Required)

#### 6. Patient Login (`/login`)
- Login form
- Registration link
- Password reset

#### 7. Patient Registration (`/register`)
- Patient registration form
- Medical history
- Insurance details

#### 8. Patient Dashboard (`/patient/dashboard`)
- Upcoming appointments
- Medical history
- Treatment progress
- Messages from staff

#### 9. My Appointments (`/patient/appointments`)
- View all appointments (past/future)
- Reschedule/cancel appointments
- Appointment details

#### 10. My Profile (`/patient/profile`)
- Personal information
- Medical history
- Insurance details
- Emergency contacts

### Admin/Staff Portal (Authentication Required)

#### 11. Staff Login (`/staff/login`)
- Staff authentication
- Role-based access

#### 12. Admin Dashboard (`/admin/dashboard`)
- Daily appointments overview
- Patient statistics
- Revenue reports
- Quick actions

#### 13. Appointment Management (`/admin/appointments`)
- View all appointments
- Schedule new appointments
- Modify existing appointments
- Appointment calendar view

#### 14. Patient Management (`/admin/patients`)
- Patient list
- Patient profiles
- Medical records
- Treatment history

#### 15. Staff Management (`/admin/staff`)
- Staff profiles
- Schedule management
- Role assignments
- Performance tracking

#### 16. Services Management (`/admin/services`)
- Add/edit services
- Pricing management
- Service categories
- Availability settings

## Technical Requirements

### Frontend (Angular 18)
- **UI Framework**: Tailwind CSS (already configured)
- **Components**: Reusable components for forms, cards, modals
- **Routing**: Angular Router with guards
- **State Management**: Angular Services/RxJS
- **Forms**: Reactive Forms for complex forms
- **Authentication**: JWT token-based auth

### Backend Integration
- **API**: RESTful API endpoints
- **Authentication**: JWT tokens
- **Database**: Patient records, appointments, services
- **File Upload**: For patient documents/images

### Key Components Needed

#### Shared Components
- Header/Navigation
- Footer
- Loading spinner
- Modal dialogs
- Form components (input, select, datepicker)
- Appointment card
- Service card
- Staff card

#### Services
- Authentication service
- Appointment service
- Patient service
- Staff service
- Notification service

#### Guards
- Auth guard (patient/staff)
- Role guard (admin/staff permissions)

### Data Models

#### Patient
```typescript
interface Patient {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  dateOfBirth: Date;
  address: Address;
  medicalHistory: MedicalHistory[];
  insurance: Insurance;
  emergencyContact: EmergencyContact;
}
```

#### Appointment
```typescript
interface Appointment {
  id: string;
  patientId: string;
  serviceId: string;
  staffId: string;
  dateTime: Date;
  duration: number;
  status: 'scheduled' | 'completed' | 'cancelled' | 'no-show';
  notes: string;
}
```

#### Service
```typescript
interface Service {
  id: string;
  name: string;
  description: string;
  category: string;
  duration: number;
  price: number;
  isActive: boolean;
}
```

#### Staff
```typescript
interface Staff {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  role: 'admin' | 'therapist' | 'receptionist';
  specializations: string[];
  schedule: Schedule[];
}
```

## Development Phases

### Phase 1: Foundation
- Setup routing structure
- Create basic layout components
- Implement authentication system
- Create core services

### Phase 2: Public Pages
- Home page with hero section
- Services catalog
- About us page
- Contact page with form

### Phase 3: Appointment System
- Appointment booking flow
- Calendar integration
- Confirmation system
- Email notifications

### Phase 4: Patient Portal
- Patient registration/login
- Patient dashboard
- Appointment management
- Profile management

### Phase 5: Admin Portal
- Staff authentication
- Admin dashboard
- Patient management
- Appointment management
- Staff management

### Phase 6: Advanced Features
- Reporting and analytics
- Payment integration
- SMS notifications
- Mobile app considerations

## Design Considerations
- **Color Scheme**: Purple (primary) and Green (secondary) - already configured
- **Accessibility**: WCAG 2.1 compliance
- **Mobile-First**: Responsive design
- **Performance**: Lazy loading, optimized images
- **SEO**: Meta tags, structured data

## Security Requirements
- HTTPS only
- Input validation and sanitization
- Role-based access control
- Secure password policies
- Data encryption for sensitive information
- HIPAA compliance considerations