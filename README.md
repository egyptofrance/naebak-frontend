# 🏛️ Naebak Frontend - User Interface

[![Build Status](https://img.shields.io/badge/build-passing-brightgreen)](https://github.com/egyptofrance/naebak-frontend/actions)
[![Coverage](https://img.shields.io/badge/coverage-N/A-lightgrey)](https://github.com/egyptofrance/naebak-frontend)
[![Version](https://img.shields.io/badge/version-1.0.0-blue)](https://github.com/egyptofrance/naebak-frontend/releases)
[![License](https://img.shields.io/badge/license-MIT-yellow)](LICENSE)

## 📝 Description

The main frontend application for the Naebak platform, built with Next.js and React. This application provides a comprehensive user interface for citizens, candidates, and administrators to interact with the democratic participation platform. It communicates with all microservices through the central API gateway.

The frontend implements a modern, responsive design that works seamlessly across all devices and provides an intuitive user experience for political engagement and civic participation.

---

## ✨ Key Features

### **User Experience**
- **Responsive Design**: Optimized for mobile, tablet, and desktop devices
- **Accessibility**: WCAG 2.1 compliant with screen reader support
- **Progressive Web App**: Offline capabilities and app-like experience
- **Multi-language Support**: Arabic and English language support

### **Core Functionality**
- **User Authentication**: Secure login and registration system
- **Complaint Management**: Submit and track complaints with real-time updates
- **Rating System**: Rate candidates and political representatives
- **News and Updates**: Access latest political news and announcements
- **Messaging**: Secure communication between users and representatives

### **Administrative Features**
- **Dashboard Analytics**: Comprehensive statistics and reporting
- **Content Management**: Manage news, banners, and static content
- **User Management**: Administrative controls for user accounts
- **System Monitoring**: Real-time system health and performance metrics

---

## 🛠️ Technology Stack

| Technology | Version | Purpose |
|------------|---------|---------|
| **Next.js** | 14.0.0 | React framework with SSR/SSG capabilities |
| **React** | 18.2.0 | Core UI library for component-based architecture |
| **TypeScript** | 5.0.0 | Type safety and enhanced developer experience |
| **Tailwind CSS** | 3.3.0 | Utility-first CSS framework for styling |
| **Framer Motion** | 10.16.0 | Animation library for smooth interactions |
| **Axios** | 1.6.0 | HTTP client for API communication |
| **React Hook Form** | 7.47.0 | Form handling with validation |
| **Zod** | 3.22.0 | Schema validation for type-safe forms |
| **Radix UI** | Various | Accessible UI components and primitives |

---

## 🏗️ Project Structure

```
src/
├── app/                    # Next.js App Router pages and layouts
│   ├── (auth)/            # Authentication pages
│   ├── (dashboard)/       # Dashboard and admin pages
│   ├── (public)/          # Public pages (home, news, etc.)
│   └── layout.tsx         # Root layout component
├── components/            # Reusable UI components
│   ├── ui/               # Base UI components (buttons, inputs, etc.)
│   ├── forms/            # Form components and validation
│   ├── layout/           # Layout components (header, footer, nav)
│   └── features/         # Feature-specific components
├── hooks/                # Custom React hooks
│   ├── useAuth.ts        # Authentication state management
│   ├── useApi.ts         # API communication hooks
│   └── useLocalStorage.ts # Local storage utilities
├── types/                # TypeScript type definitions
│   ├── api.ts            # API response types
│   ├── user.ts           # User and authentication types
│   └── common.ts         # Common shared types
└── styles/               # Global styles and Tailwind configuration
    ├── globals.css       # Global CSS styles
    └── components.css    # Component-specific styles
```

---

## 🚀 Installation and Setup

### Prerequisites
- Node.js 18.0.0 or higher
- npm 8.0.0 or higher
- Git

### Development Setup

```bash
# Clone the repository
git clone https://github.com/egyptofrance/naebak-frontend.git
cd naebak-frontend

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env.local
# Edit .env.local with your configuration

# Start development server
npm run dev
```

### Environment Variables

Create a `.env.local` file with the following variables:

```env
# API Configuration
NEXT_PUBLIC_API_BASE_URL=http://localhost:8000
NEXT_PUBLIC_GATEWAY_URL=http://localhost:5000

# Authentication
NEXT_PUBLIC_JWT_SECRET=your-jwt-secret-key

# Feature Flags
NEXT_PUBLIC_ENABLE_ANALYTICS=true
NEXT_PUBLIC_ENABLE_PWA=true

# External Services
NEXT_PUBLIC_GOOGLE_ANALYTICS_ID=GA-XXXXXXXXX
```

### Build and Deployment

```bash
# Build for production
npm run build

# Start production server
npm start

# Type checking
npm run type-check

# Linting
npm run lint
```

---

## 🔧 Development Guidelines

### **Component Development**
- Use TypeScript for all components with proper type definitions
- Follow the compound component pattern for complex UI elements
- Implement proper error boundaries and loading states
- Use React Hook Form for all form implementations

### **State Management**
- Use React Context for global state (authentication, theme)
- Implement custom hooks for reusable stateful logic
- Use React Query for server state management and caching
- Keep component state local when possible

### **Styling Guidelines**
- Use Tailwind CSS utility classes for styling
- Create custom components for repeated patterns
- Implement responsive design with mobile-first approach
- Follow accessibility guidelines for all interactive elements

### **API Integration**
- Use custom hooks for API calls with proper error handling
- Implement request/response interceptors for authentication
- Use TypeScript interfaces for all API responses
- Handle loading and error states consistently

---

## 🧪 Testing Strategy

### **Unit Testing**
```bash
# Run unit tests
npm run test

# Run tests with coverage
npm run test:coverage

# Run tests in watch mode
npm run test:watch
```

### **E2E Testing**
```bash
# Run end-to-end tests
npm run test:e2e

# Run E2E tests in headless mode
npm run test:e2e:headless
```

### **Testing Guidelines**
- Write unit tests for all utility functions and custom hooks
- Implement integration tests for complex user flows
- Use React Testing Library for component testing
- Maintain minimum 80% code coverage

---

## 📊 Performance Optimization

### **Built-in Optimizations**
- **Next.js Image Optimization**: Automatic image optimization and lazy loading
- **Code Splitting**: Automatic route-based code splitting
- **Static Generation**: Pre-rendered pages for better performance
- **Bundle Analysis**: Built-in bundle analyzer for optimization insights

### **Performance Monitoring**
- **Core Web Vitals**: Monitoring of LCP, FID, and CLS metrics
- **Real User Monitoring**: Performance tracking in production
- **Lighthouse Integration**: Automated performance auditing
- **Bundle Size Tracking**: Monitoring of JavaScript bundle sizes

---

## 🔒 Security Features

### **Authentication & Authorization**
- JWT-based authentication with secure token storage
- Role-based access control for different user types
- Automatic token refresh and session management
- Secure logout with token invalidation

### **Data Protection**
- Input validation and sanitization for all forms
- XSS protection through proper data encoding
- CSRF protection for state-changing operations
- Secure HTTP headers and content security policy

---

## 🌐 Internationalization

### **Language Support**
- Arabic (primary language)
- English (secondary language)
- RTL (Right-to-Left) layout support
- Localized date and number formatting

### **Implementation**
```bash
# Add new translation keys
npm run i18n:extract

# Validate translations
npm run i18n:validate
```

---

## 📱 Progressive Web App

### **PWA Features**
- Offline functionality for core features
- App-like installation experience
- Push notifications for important updates
- Background sync for form submissions

### **Service Worker**
- Caching strategy for static assets
- API response caching for offline access
- Background updates for critical data
- Offline fallback pages

---

## 🤝 Contributing

Please refer to the [Contributing Guide](CONTRIBUTING.md) and [Unified Documentation Standards](../../naebak-almakhzan/DOCUMENTATION_STANDARDS.md) for detailed information on:

- Code style and formatting guidelines
- Pull request process and review criteria
- Issue reporting and feature request procedures
- Development workflow and branch management

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).

---

## 🔗 Related Services

- **[API Gateway](../naebak-gateway/)**: Central API routing and authentication
- **[Authentication Service](../naebak-auth-service/)**: User authentication and authorization
- **[Admin Frontend](../naebak-admin-frontend/)**: Administrative interface
- **[Documentation Hub](../naebak-almakhzan/)**: Comprehensive project documentation
