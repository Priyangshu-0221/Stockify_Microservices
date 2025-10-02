# 🌟 Stockify Frontend

[![Next.js](https://img.shields.io/badge/Next.js-15.5.4-black.svg)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.0.0-blue.svg)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/Tailwind-4.1.11-38bdf8.svg)](https://tailwindcss.com/)
[![Clerk](https://img.shields.io/badge/Clerk-Auth-purple.svg)](https://clerk.com/)
[![Material-UI](https://img.shields.io/badge/MUI-7.2.0-007fff.svg)](https://mui.com/)

> 🚀 **Stockify Frontend** is a modern, responsive trading platform built with Next.js 15, featuring real-time stock tracking, portfolio management, and seamless authentication with Clerk. Experience cutting-edge design with Tailwind CSS, smooth animations with GSAP, and interactive charts with Chart.js.

---

## 🧭 Table of Contents

- [✨ Features](#-features)
- [🏗️ Architecture](#️-architecture)
- [🖼️ Screenshots](#️-screenshots)
- [🔧 Tech Stack](#-tech-stack)
- [⚡ Quick Start](#-quick-start)
- [📋 Prerequisites](#-prerequisites)
- [⚙️ Installation](#️-installation)
- [🔐 Environment Variables](#-environment-variables)
- [🚀 Development](#-development)
- [📱 Pages & Features](#-pages--features)
- [🧩 Components](#-components)
- [🎨 Styling & Design](#-styling--design)
- [🔑 Authentication](#-authentication)
- [📊 Charts & Visualization](#-charts--visualization)
- [📱 Responsive Design](#-responsive-design)
- [🔄 API Integration](#-api-integration)
- [🧪 Testing](#-testing)
- [📈 Performance](#-performance)
- [☁️ Deployment](#️-deployment)
- [🚀 Future Enhancements](#-future-enhancements)
- [🤝 Contributing](#-contributing)

---

## ✨ Features

### 🎯 Core Features

- 🔐 **Secure Authentication** with Clerk (Sign In/Sign Up/User Management)
- 📊 **Real-time Stock Dashboard** with comprehensive market data
- ⭐ **Personal Watchlist** with stock tracking and price alerts
- 💼 **Portfolio Management** with holdings and performance analytics
- 📋 **Order Management** for buy/sell transactions
- 💰 **Funds Management** with deposit/withdrawal capabilities
- 📈 **Interactive Charts** with Chart.js and Recharts integration
- 🌙 **Dark Mode Support** with customizable themes
- 📱 **Fully Responsive** design for all devices
- ⚡ **Lightning Fast** with Next.js 15 and Turbopack

### 🎨 UI/UX Features

- 🌈 **Modern Gradient Design** with glassmorphism effects
- ✨ **Smooth Animations** powered by GSAP
- 🎯 **Intuitive Navigation** with breadcrumbs and search
- 🔔 **Toast Notifications** for user feedback
- 📊 **Data Visualization** with multiple chart types
- 🎪 **Micro-interactions** for enhanced user experience
- 🌍 **Accessibility** optimized for screen readers
- 🎭 **Custom Icons** with Remix Icons and Material-UI

### 🔧 Developer Features

- ⚡ **Hot Reload** with Turbopack for instant development
- 🛠️ **ESLint** configuration for code quality
- 🎨 **Tailwind CSS** for utility-first styling
- 📦 **Component-based Architecture** for reusability
- 🔄 **Automatic Code Splitting** with Next.js
- 📱 **Progressive Web App** ready
- 🌐 **SEO Optimized** with Next.js metadata

---

## 🏗️ Architecture

```
Frontend Architecture (Next.js 15 App Router)
├── app/                          # App Router (Next.js 15)
│   ├── layout.js                 # Root layout with Clerk Provider
│   ├── page.js                   # Homepage
│   ├── globals.css               # Global styles
│   ├── dashboard/                # Trading Dashboard
│   │   ├── layout.js             # Dashboard layout
│   │   ├── page.js               # Stocks overview
│   │   ├── watchlist/            # Watchlist management
│   │   ├── holdings/             # Portfolio holdings
│   │   ├── order/                # Order management
│   │   └── funds/                # Funds management
│   ├── about/                    # About page
│   ├── pricing/                  # Pricing page
│   ├── product/                  # Product page
│   └── support/                  # Support page
├── Components/                   # Reusable components
│   ├── Navbar.js                 # Navigation header
│   ├── Footer.js                 # Site footer
│   ├── Home/                     # Homepage components
│   ├── About/                    # About page components
│   ├── Pricing/                  # Pricing components
│   ├── Product/                  # Product components
│   └── Support/                  # Support components
├── public/                       # Static assets
│   └── media/                    # Images and videos
├── middleware.js                 # Clerk authentication middleware
├── next.config.mjs               # Next.js configuration
├── tailwind.config.js            # Tailwind CSS configuration
├── postcss.config.mjs            # PostCSS configuration
└── package.json                  # Dependencies and scripts
```

### 🔄 Data Flow

```
User Interaction → Components → API Calls → Backend Services → Database
                ↓                ↓
            State Updates → UI Re-render ← Real-time Updates
```

---

### 🏠 Homepage

Modern landing page with hero section, feature highlights, and call-to-action buttons.

### 📊 Dashboard

Comprehensive trading dashboard with real-time stock data, search functionality, and interactive tables.

### ⭐ Watchlist

Personal stock watchlist with radar charts and detailed price tracking.

### 💼 Portfolio

Holdings management with portfolio analytics and performance metrics.

---

## 🔧 Tech Stack

### Core Framework

- **Next.js 15.5.4** - React framework with App Router
- **React 19.0.0** - UI library with latest features
- **Node.js 18+** - JavaScript runtime

### Styling & Design

- **Tailwind CSS 4.1.11** - Utility-first CSS framework
- **Material-UI 7.2.0** - React component library
- **Emotion 11.14.0** - CSS-in-JS library
- **Remix Icons 4.6.0** - Icon library

### Authentication & State

- **Clerk 6.33.0** - Authentication and user management
- **Clerk Themes 2.4.22** - Pre-built authentication UI themes

### Data Visualization

- **Chart.js 4.5.0** - Canvas-based charts
- **React Chart.js 2 5.3.0** - React wrapper for Chart.js
- **Recharts 3.0.2** - Composable charting library

### Animations & Interactions

- **GSAP 3.13.0** - Professional animation library
- **@gsap/react 2.1.2** - React integration for GSAP

### HTTP & Notifications

- **Axios 1.10.0** - HTTP client for API requests
- **React Toastify 11.0.5** - Toast notifications

### Development Tools

- **ESLint 9** - Code linting and formatting
- **PostCSS 8.5.6** - CSS processing
- **Turbopack** - Fast bundler for development

---

## ⚡ Quick Start

```bash
# 1. Clone the repository
git clone <repository-url>
cd frontend

# 2. Install dependencies
npm install

# 3. Set up environment variables
cp .env.example .env.local
# Edit .env.local with your Clerk keys

# 4. Start development server
npm run dev

# 🎉 Open http://localhost:3000 in your browser
```

---

## 📋 Prerequisites

- 📦 **Node.js** (v18.0 or higher)
- 🏃 **npm** or **yarn** package manager
- 🔑 **Clerk Account** for authentication
- 🌐 **Backend Services** running (ports 8000-8004)
- 💾 **Modern Browser** with JavaScript enabled

---

## ⚙️ Installation

### 1. Repository Setup

```bash
# Clone the repository
git clone <repository-url>
cd Self-Project/Project-1/frontend
```

### 2. Install Dependencies

```bash
# Install all dependencies
npm install

# Or with Yarn
yarn install
```

### 3. Environment Configuration

Create a `.env.local` file in the root directory:

```bash
# Create environment file
touch .env.local
```

### 4. Configure Environment Variables

Add your environment variables to `.env.local`:

```env
# Clerk Authentication (Required)
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_your_clerk_publishable_key_here
CLERK_SECRET_KEY=sk_test_your_clerk_secret_key_here


# Backend API URLs (Optional - defaults to localhost)
NEXT_PUBLIC_USER_SERVICE_URL=http://localhost:8000
NEXT_PUBLIC_STOCK_SERVICE_URL=http://localhost:8001
NEXT_PUBLIC_WATCHLIST_SERVICE_URL=http://localhost:8002
NEXT_PUBLIC_HOLDINGS_SERVICE_URL=http://localhost:8003
NEXT_PUBLIC_ORDER_SERVICE_URL=http://localhost:8004

# App Configuration (Optional)
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

### 5. Start Development Server

```bash
# Start with Turbopack (Recommended - Faster)
npm run dev

# Or start with standard webpack
npm run dev:standard

# Open your browser
open http://localhost:3000
```

---

## 🔐 Environment Variables

### Required Variables

| Variable                            | Description                           | Example       |
| ----------------------------------- | ------------------------------------- | ------------- |
| `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY` | Clerk publishable key for client-side | `pk_test_...` |
| `CLERK_SECRET_KEY`                  | Clerk secret key for server-side      | `sk_test_...` |

### Optional Variables

| Variable                              | Description            | Default      |
| ------------------------------------- | ---------------------- | ------------ |
| `NEXT_PUBLIC_CLERK_SIGN_IN_URL`       | Sign in page URL       | `/sign-in`   |
| `NEXT_PUBLIC_CLERK_SIGN_UP_URL`       | Sign up page URL       | `/sign-up`   |
| `NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL` | Redirect after sign in | `/dashboard` |
| `NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL` | Redirect after sign up | `/dashboard` |

### Backend Service URLs

| Variable                            | Description                | Default                 |
| ----------------------------------- | -------------------------- | ----------------------- |
| `NEXT_PUBLIC_USER_SERVICE_URL`      | User service endpoint      | `http://localhost:8000` |
| `NEXT_PUBLIC_STOCK_SERVICE_URL`     | Stock service endpoint     | `http://localhost:8001` |
| `NEXT_PUBLIC_WATCHLIST_SERVICE_URL` | Watchlist service endpoint | `http://localhost:8002` |
| `NEXT_PUBLIC_HOLDINGS_SERVICE_URL`  | Holdings service endpoint  | `http://localhost:8003` |
| `NEXT_PUBLIC_ORDER_SERVICE_URL`     | Order service endpoint     | `http://localhost:8004` |

---

## 🚀 Development

### Available Scripts

```bash
# Development with Turbopack (Fastest)
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run ESLint
npm run lint

# Run ESLint with auto-fix
npm run lint:fix
```

### Development Workflow

1. **Start Backend Services** (ports 8000-8004)
2. **Start Frontend** with `npm run dev`
3. **Open Browser** at `http://localhost:3000`
4. **Make Changes** - Hot reload is enabled
5. **Test Authentication** with Clerk
6. **Test API Integration** with backend services

### File Structure Convention

```
├── app/                    # Next.js App Router pages
├── Components/             # Reusable UI components
│   ├── [Page]/            # Page-specific components
│   └── [ComponentName].js # PascalCase component files
├── public/                # Static assets
│   └── media/             # Images, videos, icons
├── styles/                # Global styles and themes
└── utils/                 # Utility functions and helpers
```

---

## 📱 Pages & Features

### 🏠 Homepage (`/`)

- **Hero Section** with animated background video
- **Feature Highlights** showcasing platform capabilities
- **Indian Stocks** section with market overview
- **Educational Content** for new traders
- **Privacy & Security** information

### 📊 Dashboard (`/dashboard`)

- **Stock Overview** with real-time data table
- **Search & Filter** functionality
- **Add to Watchlist** with one-click action
- **View Charts** for detailed stock analysis
- **Responsive Table** with mobile optimization

### ⭐ Watchlist (`/dashboard/watchlist`)

- **Personal Watchlist** with user's tracked stocks
- **Radar Chart** visualization of portfolio
- **Price Change** indicators with color coding
- **Real-time Updates** from stock service
- **Remove Items** functionality

### 💼 Holdings (`/dashboard/holdings`)

- **Portfolio Overview** with total value
- **Holdings Table** with quantity and current prices
- **Performance Metrics** with gain/loss calculations
- **Add/Remove Holdings** management

### 📋 Orders (`/dashboard/orders`)

- **Order History** with buy/sell transactions
- **Order Status** tracking
- **New Order** placement interface
- **Order Filtering** by type, date, status

### 💰 Funds (`/dashboard/funds`)

- **Account Balance** overview
- **Deposit/Withdraw** functionality
- **Transaction History** with detailed records
- **Payment Methods** management

### ℹ️ About (`/about`)

- **Company Mission** and vision
- **Team Information** with member profiles
- **Platform Features** detailed explanation
- **Contact Information** and office locations

### 💰 Pricing (`/pricing`)

- **Subscription Plans** with feature comparison
- **Pricing Calculator** for different usage levels
- **Free Trial** information
- **Enterprise Solutions** contact form

### 🛠️ Product (`/product`)

- **Feature Showcase** with interactive demos
- **Technical Specifications** and capabilities
- **Integration Options** for third-party services
- **API Documentation** links

### 🆘 Support (`/support`)

- **Help Center** with FAQs
- **Contact Form** for user inquiries
- **Live Chat** integration
- **Knowledge Base** with tutorials

---

## 🧩 Components

### 🧭 Navigation Components

#### Navbar (`Components/Navbar.js`)

- **Responsive Design** with mobile hamburger menu
- **Clerk Authentication** integration
- **Logo and Branding** with hover effects
- **Navigation Links** with active states
- **User Menu** dropdown with profile options

#### Footer (`Components/Footer.js`)

- **Site Links** organized by category
- **Social Media** icons and links
- **Copyright Information** and legal notices
- **Newsletter Signup** form

### 🏠 Homepage Components

#### Hero (`Components/Home/Hero.js`)

- **Video Background** with autoplay
- **Call-to-Action** buttons
- **Feature Headlines** with animations
- **Gradient Overlays** for better text readability

#### IndianStocks (`Components/Home/IndianStocks.js`)

- **Market Overview** with key indices
- **Top Performers** showcase
- **Market Status** indicator
- **Real-time Price** updates

#### Education (`Components/Home/Education.js`)

- **Learning Resources** for beginners
- **Tutorial Links** to external content
- **Trading Guides** and best practices
- **Risk Management** information

#### Privacy (`Components/Home/Privacy.js`)

- **Security Features** explanation
- **Data Protection** policies
- **Compliance Information** with regulations
- **Trust Indicators** and certifications

### 📊 Dashboard Components

#### DashNav (`app/dashboard/DashNav.js`)

- **Dashboard Navigation** with breadcrumbs
- **User Context** information
- **Quick Actions** for common tasks

#### Topbar (`app/dashboard/Topbar.js`)

- **Search Functionality** across all stocks
- **Notifications** bell with alerts
- **User Avatar** with dropdown menu
- **Market Status** indicator

#### Menu (`app/dashboard/Menu.js`)

- **Sidebar Navigation** for dashboard sections
- **Active Link** highlighting
- **Icon Integration** with descriptions
- **Collapsible** design for mobile

#### BuyActionWindow (`app/dashboard/BuyActionWindow.js`)

- **Order Placement** modal
- **Stock Selection** with search
- **Quantity Input** with validation
- **Price Calculation** with real-time updates

#### GeneralContext (`app/dashboard/GeneralContext.js`)

- **State Management** for dashboard data
- **User Authentication** context
- **API Data** caching and management

---

## 🎨 Styling & Design

### 🌈 Design System

- **Color Palette**: Blue and Indigo gradients with accent colors
- **Typography**: Geist Sans and Geist Mono fonts
- **Spacing**: Consistent 4px grid system
- **Border Radius**: Rounded corners with 8px, 12px, 16px variants
- **Shadows**: Layered shadow system for depth

### 🎯 Tailwind Configuration

```javascript
// tailwind.config.js (implied from usage)
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./Components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#eff6ff",
          500: "#3b82f6",
          600: "#2563eb",
          700: "#1d4ed8",
        },
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)"],
        mono: ["var(--font-geist-mono)"],
      },
    },
  },
};
```

### ✨ Custom Animations

```css
/* app/globals.css */
@keyframes shimmer {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(100%);
  }
}

.shimmer {
  animation: shimmer 2s infinite;
}

.hover-lift:hover {
  transform: translateY(-4px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
}
```

### 🌙 Dark Mode Support

- **Clerk Themes**: Dark theme integration
- **System Preference**: Automatic detection
- **Manual Toggle**: User preference storage
- **Consistent Colors**: Maintained across all components

---

## 🔑 Authentication

### 🔐 Clerk Integration

#### Setup & Configuration

```javascript
// app/layout.js
import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";

export default function RootLayout({ children }) {
  return (
    <ClerkProvider appearance={{ baseTheme: dark }}>
      <html lang="en">
        <body>
          <Navbar />
          {children}
          <Footer />
        </body>
      </html>
    </ClerkProvider>
  );
}
```

#### Middleware Protection

```javascript
// middleware.js
import { clerkMiddleware } from "@clerk/nextjs/server";

export default clerkMiddleware();

export const config = {
  matcher: [
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    "/(api|trpc)(.*)",
  ],
};
```

### 🔄 Authentication Flow

1. **User Access**: User visits protected route
2. **Middleware Check**: Clerk middleware validates session
3. **Redirect**: Unauthenticated users → Sign In page
4. **Token Storage**: JWT tokens stored in localStorage
5. **API Integration**: Tokens sent with backend requests
6. **User Context**: User data available across components

### 👤 User Management

- **Sign In/Sign Up**: Pre-built Clerk UI components
- **User Profile**: Managed through Clerk dashboard
- **Session Management**: Automatic token refresh
- **Multi-factor Auth**: Available through Clerk configuration

---

## 📊 Charts & Visualization

### 📈 Chart Libraries

#### Chart.js Integration

- **Canvas-based Rendering** for smooth performance
- **Real-time Updates** with data streaming
- **Responsive Design** adapts to container size
- **Custom Styling** to match app theme

#### Recharts Integration

```javascript
// Example: Radar Chart in Watchlist
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  ResponsiveContainer,
} from "recharts";

<ResponsiveContainer width="100%" height="100%">
  <RadarChart data={watchlistData}>
    <PolarGrid />
    <PolarAngleAxis dataKey="company" />
    <Radar
      name="WatchList"
      dataKey="prev_close"
      stroke="#3b82f6"
      fill="#60a5fa"
      fillOpacity={0.3}
    />
  </RadarChart>
</ResponsiveContainer>;
```

### 📊 Chart Types

- **Line Charts**: Price trends over time
- **Radar Charts**: Portfolio composition
- **Bar Charts**: Volume and performance comparisons
- **Candlestick Charts**: OHLC stock data
- **Pie Charts**: Asset allocation

### 🎨 Visual Features

- **Color-coded Data**: Green for gains, red for losses
- **Interactive Tooltips**: Detailed information on hover
- **Zoom & Pan**: Navigate through historical data
- **Real-time Updates**: Live data streaming
- **Export Options**: Save charts as images

---

## 📱 Responsive Design

### 🖥️ Breakpoint Strategy

| Breakpoint  | Screen Size    | Layout                            |
| ----------- | -------------- | --------------------------------- |
| **Mobile**  | < 768px        | Single column, hamburger menu     |
| **Tablet**  | 768px - 1024px | Two columns, condensed navigation |
| **Desktop** | > 1024px       | Full layout, expanded features    |
| **Large**   | > 1440px       | Wide layout, additional sidebars  |

### 📱 Mobile Optimizations

- **Touch-friendly** buttons and interactive elements
- **Swipe Gestures** for table navigation
- **Condensed Tables** with horizontal scroll
- **Collapsible Sections** to save screen space
- **Bottom Navigation** for primary actions

### 💻 Desktop Enhancements

- **Keyboard Shortcuts** for power users
- **Multi-column Layouts** for data density
- **Hover States** for interactive feedback
- **Context Menus** for advanced actions
- **Sidebar Navigation** with expanded options

### 🎯 Accessibility Features

- **ARIA Labels** for screen readers
- **Keyboard Navigation** support
- **High Contrast** color schemes
- **Focus Indicators** for navigation
- **Alt Text** for all images

---

## 🔄 API Integration

### 🌐 Backend Services

#### Stock Service Integration

```javascript
// Fetch all stocks
const response = await axios.get("http://localhost:8001/api/stock/allstocks");
setStocks(response.data);
```

#### Authenticated Requests

```javascript
// Add to watchlist with authentication
const token = localStorage.getItem("token");
const response = await axios.post(
  "http://localhost:8002/api/watchlist/addwatchlist",
  { id: stockId, userId: clerkUserId },
  {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  }
);
```

### 🔄 Data Management

- **Local Storage**: JWT tokens and user preferences
- **State Management**: React useState and useEffect
- **Error Handling**: Comprehensive try-catch blocks
- **Loading States**: User feedback during API calls
- **Data Caching**: Minimize redundant API requests

### ⚡ Performance Optimizations

- **Lazy Loading**: Components loaded on demand
- **Image Optimization**: Next.js automatic optimization
- **Code Splitting**: Automatic with Next.js
- **Prefetching**: Link prefetching for faster navigation
- **Memoization**: React.memo for expensive computations

---

## 🧪 Testing

### 🔍 Manual Testing

#### Authentication Testing

```bash
# Test authentication flow
1. Visit /dashboard without authentication → Should redirect to sign-in
2. Sign up with new account → Should redirect to dashboard
3. Sign out → Should clear localStorage and redirect
4. Sign in with existing account → Should restore session
```

#### API Integration Testing

```bash
# Test stock data loading
1. Visit /dashboard → Should load all stocks
2. Search for specific stock → Should filter results
3. Add to watchlist → Should show success toast
4. Visit /dashboard/watchlist → Should show added stocks
```

#### Responsive Testing

```bash
# Test responsive design
1. Test on mobile (< 768px) → Should show mobile layout
2. Test on tablet (768px - 1024px) → Should show condensed layout
3. Test on desktop (> 1024px) → Should show full layout
```

### 🛠️ Development Testing

#### Component Testing

- **Individual Components**: Test in isolation
- **Props Validation**: Ensure proper prop types
- **State Changes**: Verify state updates correctly
- **Event Handlers**: Test user interactions

#### Integration Testing

- **API Calls**: Mock responses for consistent testing
- **Authentication**: Test with/without valid tokens
- **Navigation**: Verify routing works correctly
- **Error Handling**: Test error scenarios

### 🚀 Production Testing

- **Performance**: Lighthouse scores and Core Web Vitals
- **SEO**: Meta tags and structured data
- **Accessibility**: WCAG compliance testing
- **Cross-browser**: Safari, Chrome, Firefox, Edge
- **Device Testing**: iOS, Android, desktop platforms

---

## 📈 Performance

### ⚡ Core Web Vitals

| Metric                       | Target  | Current Status |
| ---------------------------- | ------- | -------------- |
| **First Contentful Paint**   | < 1.5s  | ✅ Optimized   |
| **Largest Contentful Paint** | < 2.5s  | ✅ Optimized   |
| **Cumulative Layout Shift**  | < 0.1   | ✅ Optimized   |
| **First Input Delay**        | < 100ms | ✅ Optimized   |

### 🔧 Optimization Techniques

#### Next.js Optimizations

- **Automatic Code Splitting**: Per-page bundles
- **Image Optimization**: WebP conversion and lazy loading
- **Font Optimization**: Preloaded Google Fonts
- **Static Generation**: Pre-rendered pages where possible

#### Bundle Optimization

- **Tree Shaking**: Remove unused code
- **Minification**: Compressed production builds
- **Gzip Compression**: Server-side compression
- **CDN Integration**: Fast global content delivery

#### Runtime Optimizations

- **React Memoization**: Prevent unnecessary re-renders
- **Lazy Loading**: Load components on demand
- **Virtual Scrolling**: Handle large data sets efficiently
- **Debounced Search**: Reduce API calls during typing

### 📊 Performance Monitoring

- **Lighthouse Audits**: Regular performance scoring
- **Web Vitals**: Core metrics tracking
- **Bundle Analyzer**: Bundle size monitoring
- **Performance Profiler**: React DevTools profiling

---

## 🤝 Contributing

We welcome contributions from the community! Here's how you can help:

### 🛠️ Development Setup

1. **Fork the Repository**

   ```bash
   git clone https://github.com/[your-username]/stockify-frontend.git
   cd stockify-frontend
   ```

2. **Create Feature Branch**

   ```bash
   git checkout -b feature/amazing-feature
   ```

3. **Install Dependencies**

   ```bash
   npm install
   ```

4. **Start Development**
   ```bash
   npm run dev
   ```

### 📋 Contribution Guidelines

#### Code Standards

- **ESLint Rules**: Follow existing linting configuration
- **Component Structure**: Use functional components with hooks
- **Naming Convention**: PascalCase for components, camelCase for functions
- **File Organization**: Group related files in folders

#### Pull Request Process

1. **Test Your Changes**: Ensure all features work correctly
2. **Update Documentation**: Update README if adding new features
3. **Write Clear Commits**: Use descriptive commit messages
4. **Request Review**: Tag relevant maintainers for review

#### Bug Reports

- **Use GitHub Issues**: Report bugs with detailed reproduction steps
- **Include Screenshots**: Visual evidence helps diagnose issues
- **Provide Environment**: OS, browser, and version information
- **Expected vs Actual**: Clear description of what should happen

#### Feature Requests

- **Check Existing Issues**: Avoid duplicate requests
- **Provide Use Case**: Explain why the feature is needed
- **Suggest Implementation**: If you have ideas for how to build it
- **Consider Impact**: Think about how it affects existing users

---

## 📄 License

This project is licensed under the **ISC License** - see the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments

- **Next.js Team** for the amazing React framework
- **Clerk** for seamless authentication solutions
- **Tailwind CSS** for the utility-first styling approach
- **Material-UI** for the comprehensive component library
- **GSAP** for professional animation capabilities
- **Chart.js & Recharts** for powerful data visualization

---

## 🌟 Star the Project

If you find this project helpful, please consider giving it a ⭐ on GitHub! Your support helps us continue improving Stockify for the community.

---

**Built with ❤️ by [Priyangshu](https://github.com/Priyangshu-0221)**

