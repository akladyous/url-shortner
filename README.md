# URL Shortener - Full Stack Application

![URL Shortener](url-shortener.webp)

## Introduction

This is a **full-stack URL shortener application** built from the ground up, implementing all features from scratch. The project demonstrates a complete web application architecture with a robust backend API and a modern frontend interface.

The application allows users to:
- Create shortened URLs from long web addresses
- Track click analytics and statistics
- Manage user accounts with authentication
- View URL history and performance metrics

## Tech Stack

### Frontend Technologies

- **React 18.2.0** - Modern UI library for building interactive user interfaces
- **Redux Toolkit (@reduxjs/toolkit)** - State management for React applications
- **React Router DOM 6.4.5** - Client-side routing and navigation
- **Axios 1.2.1** - HTTP client for making API requests
- **Bootstrap 5.2.3** - CSS framework for responsive design
- **Font Awesome 6.2.1** - Icon library for UI elements
- **React Redux 8.0.5** - Official React bindings for Redux
- **ua-parser-js 1.0.32** - User agent parsing library
- **validate.js 0.13.1** - Form validation library
- **React Scripts 5.0.1** - Build tooling and development server
- **Testing Libraries**:
  - @testing-library/react 13.4.0
  - @testing-library/jest-dom 5.16.5
  - @testing-library/user-event 14.4.3

### Backend Technologies

- **Node.js** - JavaScript runtime environment
- **Express.js 4.18.2** - Web application framework
- **MongoDB with Mongoose 6.8.0** - NoSQL database and ODM
- **JSON Web Tokens (jsonwebtoken 8.5.1)** - Authentication and authorization
- **Bcrypt 5.1.0** - Password hashing and encryption
- **CORS 2.8.5** - Cross-Origin Resource Sharing middleware
- **Express Session 1.17.3** - Session management
- **Cookie Parser 1.4.6** - Cookie parsing middleware
- **Dotenv 16.0.3** - Environment variable management
- **Nanoid 4.0.0** - Unique ID generation for short URLs
- **Validator 13.7.0** - Input validation and sanitization
- **Device Detector JS 3.0.3** - Device and browser detection
- **APIip.net 1.2.4** - IP geolocation service
- **Axios 1.2.1** - HTTP client for external API calls
- **Validate.js 0.13.1** - Data validation library
- **Morgan 1.10.0** - HTTP request logger middleware
- **Babel** - JavaScript transpiler:
  - @babel/cli 7.19.3
  - @babel/core 7.20.5
  - @babel/node 7.20.5
  - @babel/preset-env 7.20.2
- **Nodemon 2.0.20** - Development server with auto-restart

## Project Structure

```
url-shortner-express.js-react/
├── backend/          # Express.js backend API
│   ├── config/      # Configuration files (CORS, DB, sessions)
│   ├── controllers/ # Request handlers
│   ├── middleware/  # Custom middleware (auth, error handling)
│   ├── models/      # MongoDB models
│   ├── routes/      # API routes
│   └── util/        # Utility functions
└── frontend/        # React frontend application
    ├── src/
    │   ├── app/     # API slices and thunks
    │   ├── auth/    # Authentication logic
    │   ├── features/# Redux slices
    │   ├── ui/      # React components
    │   └── users/   # User-related components
    └── public/      # Static assets
```

## Features

- **URL Shortening**: Convert long URLs into short, shareable links
- **User Authentication**: Secure signup, login, and logout functionality
- **Click Analytics**: Track clicks, referrers, and geographic data
- **Session Management**: Secure session handling with JWT tokens
- **CSRF Protection**: Cross-site request forgery protection
- **Device Detection**: Track device and browser information
- **IP Geolocation**: Geographic tracking of URL clicks
- **Responsive Design**: Mobile-friendly UI with Bootstrap

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- MongoDB (local or cloud instance)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd url-shortner-express.js-react
```

2. Install backend dependencies:
```bash
cd backend
npm install
```

3. Install frontend dependencies:
```bash
cd ../frontend
npm install
```

4. Configure environment variables:
   - Create `.env` files in both `backend/` and `frontend/` directories
   - Add necessary configuration (database URL, JWT secrets, etc.)

5. Start the backend server:
```bash
cd backend
npm run dev
```

6. Start the frontend development server:
```bash
cd frontend
npm start
```

## License

MIT License

## Author

Built from scratch as a full-stack learning project demonstrating modern web development practices.

