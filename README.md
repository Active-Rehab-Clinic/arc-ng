# ArcNg - Active Rehab Clinic Web Application

A modern Angular 20.3.1 web application for Active Rehab Clinic featuring comprehensive appointment management, patient portal, and staff administration with Firebase backend integration.

## 🚀 Features

### Public Interface

- **Home**: Hero section with clinic branding, quick booking, and internal links to services
- **Services**: Categorized service catalog with "Learn More" links to detailed pages
- **Service Detail Pages**: Individual pages for each specialty with SEO optimization:
  - Musculoskeletal Therapy (back pain, knee pain, joint problems)
  - Neurological Therapy (stroke recovery, Parkinson's treatment)
  - Sports Medicine (sports injuries, athletic performance)
  - Pediatric Therapy (child development, cerebral palsy)
  - Pain Management (chronic pain relief)
  - Home Visit Services (at-home physiotherapy in Delhi NCR)
- **About**: Detailed team profiles, certifications, and facility information
- **Contact**: Multi-step contact form with interactive map
- **Booking**: Wizard-style appointment booking with staff selection

### Patient Portal (`/patient/*`)

- **Dashboard**: Appointment timeline, treatment progress, health metrics
- **Appointments**: History with filters, reschedule/cancel functionality
- **Profile**: Personal info, medical history, insurance, emergency contacts
- **Authentication**: Secure login/register with medical intake

### Staff Portal (`/staff/*`)

- **Dashboard**: Daily schedule, patient alerts, performance metrics
- **Schedule**: Personal calendar, availability settings, time-off requests
- **Authentication**: Role-based access with multi-factor support

### Admin Portal (`/admin/*`)

- **Dashboard**: Appointment history and statistics
- **Appointments**: View all appointments with status tracking
- **Statistics**: Pending, confirmed, completed appointment counts
- **Focused Role**: Appointment management only

## 🛠️ Tech Stack

- **Framework**: Angular 20.3.1 with SSR
- **Styling**: Tailwind CSS + SCSS (mobile-first)
- **UI Components**: Flowbite with custom theming
- **Backend**: Firebase (Auth, Firestore, Functions)
- **State Management**: RxJS + Angular Services
- **Authentication**: Firebase Auth with role-based access
- **Build**: Angular CLI with standalone components

## 📦 Installation

```bash
# Clone the repository
git clone <repository-url>
cd arc-ng

# Install dependencies
npm install

# Start development server
npm start
```

## 🔧 Development

### Available Scripts

```bash
npm start              # Development server (http://localhost:4200)
npm run build          # Production build
npm run watch          # Build with watch mode
npm test               # Run unit tests
npm run serve:ssr:arc-ng  # Serve SSR build
```

### Code Standards

- **Components**: Use standalone components with separate `.ts`, `.html`, `.scss` files
- **Styling**: Tailwind utilities via `@apply` in SCSS files only
- **Routing**: Lazy loading with `loadComponent`
- **Commit Messages**: Follow conventional commit format

### Project Structure

```
src/app/
├── components/          # Shared UI components
│   ├── layout/         # Header, footer, navigation
│   ├── forms/          # Reusable form components
│   ├── cards/          # Service, appointment, staff cards
│   └── modals/         # Dialog and popup components
├── pages/              # Route components
│   ├── public/         # Home, services, about, contact
│   ├── auth/           # Login, register, password reset
│   ├── patient/        # Patient portal pages
│   ├── staff/          # Staff portal pages
│   └── admin/          # Admin portal pages
├── services/           # Business logic services
├── guards/             # Route protection (auth, role)
├── models/             # TypeScript interfaces
├── stores/             # State management
└── utils/              # Helper functions
```

## 🎨 Design System

- **Primary**: Teal variants (500: #14b8a6)
- **Secondary**: Green variants (500: #22c55e)
- **Role Colors**: Red (admin), Blue (staff), Green (patient)
- **Responsive**: Mobile-first with consistent breakpoints
- **Dark Mode**: Full dark mode with automatic detection
- **Accessibility**: WCAG 2.1 AA compliant
- **Typography**: Responsive scaling with semantic hierarchy

## 🔐 Authentication & Authorization

- **Patient Auth**: `/auth/login`, `/auth/register` with medical intake
- **Staff Auth**: `/auth/staff` with role-based dashboard
- **Admin Auth**: `/auth/admin` - appointment management only
- **Role Hierarchy**: Patient < Staff < Admin
- **Route Protection**: Guards for authentication and role verification
- **Session Management**: Firebase Auth with secure token handling

## 📱 Responsive Design

- **Mobile**: 320px - 767px
- **Tablet**: 768px - 1023px
- **Desktop**: 1024px+

## 🧪 Testing & Quality

```bash
npm test           # Unit tests with Karma/Jasmine
npm run e2e        # End-to-end testing (when configured)
npm run lint       # Code linting and formatting
```

### Quality Assurance

- Unit tests for components and services
- Integration tests for critical user flows
- Performance monitoring and optimization
- Security audits and HIPAA compliance checks

## 🚀 Deployment

```bash
npm run build              # Production build
npm run serve:ssr:arc-ng   # Serve SSR build locally
# Deploy dist/ folder to Firebase Hosting or preferred service
```

### Production Considerations

- Enable Firebase Security Rules
- Configure environment variables
- Set up SSL certificates
- Implement monitoring and analytics
- Configure backup and disaster recovery

## 📋 Development Guidelines

### Code Standards

- Component organization with separate `.ts`, `.html`, `.scss` files
- Tailwind CSS and SCSS guidelines
- Conventional commit format

### Development Workflow

1. Follow mobile-first responsive design
2. Use standalone components with lazy loading
3. Implement proper error handling and loading states
4. Ensure accessibility compliance (WCAG 2.1 AA)
5. Write unit tests for new components and services
6. Follow Firebase security rules and data validation

## 🤝 Contributing

1. Follow established code structure and component patterns
2. Use conventional commit messages
3. Ensure mobile-first responsive design and dark mode support
4. Implement proper error handling and loading states
5. Write unit tests for new functionality
6. Verify accessibility compliance before submitting
7. Test across different user roles and permissions

## 📊 Current Status

### ✅ Completed Features (Production Ready)

- **Angular 20.3.1** setup with SSR
- **Firebase Integration** (Auth + Firestore)
- **Public Website** - Home, Services, About, Contact, Book
- **Authentication System** - Login with 4-role support
- **Appointment Booking** - Complete booking flow
- **Role-based Dashboards** - Patient, Staff, Admin
- **Appointment Management** - Admin dashboard for appointment history
- **Theme System** - Dark/light mode with system detection
- **Responsive Design** - Mobile-first with Tailwind CSS

### 🔄 In Progress

- Dashboard content enhancement
- Profile management interfaces
- Advanced appointment features

### ⏳ Planned Features

- Email/SMS notifications
- Payment integration
- Advanced reporting
- Medical records system

## 📄 License

Private project for Active Rehab Clinic

## 📞 Support

For technical support or questions about the codebase:

- Contact the development team for assistance
