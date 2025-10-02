# 🧑‍💼 User Service

[![Node.js](https://img.shields.io/badge/Node.js-18.x-green.svg)](https://nodejs.org/)
[![Express.js](https://img.shields.io/badge/Express.js-5.1.0-blue.svg)](https://expressjs.com/)
[![Clerk](https://img.shields.io/badge/Clerk-Auth-purple.svg)](https://clerk.com/)
[![MongoDB](https://img.shields.io/badge/MongoDB-6.20.0-green.svg)](https://mongodb.com/)
[![License](https://img.shields.io/badge/License-ISC-yellow.svg)](https://opensource.org/licenses/ISC)

> 🚀 **Modern microservice for user management with Clerk authentication and MongoDB integration**

## 📋 Table of Contents

- [🌟 Features](#-features)
- [🏗️ Architecture](#️-architecture)
- [⚡ Quick Start](#-quick-start)
- [🔧 Installation](#-installation)
- [⚙️ Configuration](#️-configuration)
- [📡 API Endpoints](#-api-endpoints)
- [🔑 Authentication](#-authentication)
- [💾 Database Schema](#-database-schema)
- [🧪 Testing](#-testing)
- [🔄 Development](#-development)
- [📚 Documentation](#-documentation)
- [🤝 Contributing](#-contributing)

## 🌟 Features

✨ **Core Features**

- 🔐 **Secure Authentication** with Clerk integration
- 👤 **User Registration** with automatic duplicate checking
- 🗄️ **MongoDB Integration** for data persistence
- 🛡️ **Protected Routes** with `requireAuth()` middleware
- 📊 **Request Logging** with Morgan
- 🌍 **CORS Enabled** for cross-origin requests
- ⚡ **Fast Performance** with Express.js
- 🔄 **Auto-reload** development with Nodemon
- 🧹 **Database Maintenance** utilities for index management

## 🏗️ Architecture

```
user-service/
├── 📁 controller/          # Business logic controllers
│   └── User.controller.js  # User registration handler
├── 📁 model/              # Database models
│   └── User.Model.js      # User MongoDB schema
├── 📁 routes/             # API route definitions
│   ├── index.js           # Main router
│   └── User.route.js      # User-specific routes
├── 📄 index.js            # Application entry point
├── 📄 fix-db-indexes.js   # Database maintenance utility
├── 📄 package.json        # Dependencies & scripts
└── 📖 README.md           # Documentation
```

## ⚡ Quick Start

```bash
# Clone and navigate
git clone <repository-url>
cd backend/user-service

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env
# Edit .env with your configuration

# Start development server
npm run user
```

🎉 **Your service will be running at `http://localhost:8000`**

## 🔧 Installation

### Prerequisites

- 📦 **Node.js** (v18.x or higher)
- 🗄️ **MongoDB** (local or cloud instance)
- 🔑 **Clerk Account** for authentication

### Step-by-step Setup

1. **Install Dependencies**

   ```bash
   npm install
   ```

2. **Environment Configuration**

   ```bash
   # Create environment file
   touch .env
   ```

3. **Start Services**

   ```bash
   # Development mode with auto-reload
   npm run user

   # Production mode
   npm start
   ```

## ⚙️ Configuration

### Environment Variables

Create a `.env` file in the root directory:

```env
# 🔑 Clerk Authentication
CLERK_SECRET_KEY=sk_test_your_clerk_secret_key_here
CLERK_PUBLISHABLE_KEY=pk_test_your_clerk_publishable_key_here

# 🗄️ Database Configuration
MONGO_URL=mongodb://localhost:27017/stockify
# OR MongoDB Atlas:
# MONGO_URL=mongodb+srv://username:password@cluster.mongodb.net/stockify

# 🌐 Server Configuration
PORT=8000
NODE_ENV=development

# 📊 Logging Level
LOG_LEVEL=dev
```

### Required Environment Variables

| Variable           | Description                 | Required                     |
| ------------------ | --------------------------- | ---------------------------- |
| `CLERK_SECRET_KEY` | Clerk authentication secret | ✅ Yes                       |
| `MONGO_URL`        | MongoDB connection string   | ✅ Yes                       |
| `PORT`             | Server port number          | ❌ No (default: 8000)        |
| `NODE_ENV`         | Environment mode            | ❌ No (default: development) |

## 📡 API Endpoints

### Base URL: `http://localhost:8000/api/user`

| Method | Endpoint   | Description       | Auth Required |
| ------ | ---------- | ----------------- | ------------- |
| `POST` | `/adduser` | Register new user | 🔒 Yes        |

### 📝 Detailed Endpoints

#### � Register New User

```http
POST /api/user/adduser
Authorization: Bearer <clerk-session-token>
Content-Type: application/json
```

**Request Body:**

```json
{
  "clerkUserId": "user_abc123xyz",
  "userName": "johndoe",
  "userEmail": "john@example.com"
}
```

**Success Response (201 - New User):**

```json
{
  "success": true,
  "message": "User created successfully",
  "user": {
    "_id": "64f123456789abcdef012345",
    "clerk_username": "johndoe",
    "email": "john@example.com",
    "clerk_id": "user_abc123xyz",
    "watchlist": [],
    "createdAt": "2025-01-01T10:30:00.000Z",
    "updatedAt": "2025-01-01T10:30:00.000Z"
  }
}
```

**Success Response (200 - Existing User):**

```json
{
  "success": true,
  "message": "User already exists",
  "user": {
    "_id": "64f123456789abcdef012345",
    "clerk_username": "johndoe",
    "email": "john@example.com",
    "clerk_id": "user_abc123xyz",
    "watchlist": [],
    "createdAt": "2025-01-01T10:30:00.000Z",
    "updatedAt": "2025-01-01T10:30:00.000Z"
  }
}
```

**Error Responses:**

```json
// Missing required fields (400)
{
  "success": false,
  "error": "Missing required fields: clerkUserId and userEmail are required"
}

// Server error (500)
{
  "success": false,
  "error": "Database connection failed",
  "details": "Error stack trace (development only)"
}
```

## 🔑 Authentication

This service uses **Clerk** for authentication. All protected routes require a valid Clerk session token.

### Setting up Authentication

1. **Frontend Integration:**

   ```javascript
   // Include Clerk session token in requests
   const response = await fetch("/api/user/adduser", {
     method: "POST",
     headers: {
       Authorization: `Bearer ${await getToken()}`,
       "Content-Type": "application/json",
     },
     body: JSON.stringify({
       clerkUserId: user.id,
       userName: user.username,
       userEmail: user.primaryEmailAddress.emailAddress,
     }),
   });
   ```

2. **Middleware Protection:**
   ```javascript
   // Routes are protected with requireAuth middleware
   router.post("/adduser", requireAuth(), addUser);
   ```

## 💾 Database Schema

### User Model

```javascript
{
  _id: ObjectId,             // Unique MongoDB identifier
  clerk_username: String,    // Username from Clerk (required, unique)
  email: String,             // User email address (required, unique)
  clerk_id: String,          // Clerk user ID (required, unique)
  watchlist: [ObjectId],     // Array of watchlist references
  createdAt: Date,           // Auto-generated timestamp
  updatedAt: Date            // Auto-generated timestamp
}
```

## 🔧 Database Maintenance

### Index Management Utility

The service includes a database maintenance script (`fix-db-indexes.js`) for managing MongoDB indexes:

```bash
# Run the database maintenance utility
node fix-db-indexes.js
```

**What it does:**

- 🔍 Lists current database indexes
- 🗑️ Removes problematic indexes (username_1, clerk_username_1)
- 🧹 Cleans up users with null clerk_username values
- ✅ Ensures database integrity

**Use cases:**

- After schema changes
- Resolving unique constraint conflicts
- Database cleanup and optimization

## 🧪 Testing

### Manual Testing

1. **Health Check:**

   ```bash
   curl http://localhost:8000/
   ```

2. **User Registration (requires auth):**
   ```bash
   curl -X POST http://localhost:8000/api/user/adduser \
        -H "Authorization: Bearer <token>" \
        -H "Content-Type: application/json" \
        -d '{
          "clerkUserId": "user_abc123",
          "userName": "johndoe",
          "userEmail": "john@example.com"
        }'
   ```

### Testing Tools

- 🔧 **Postman** - API testing
- 🌐 **Insomnia** - REST client
- 🛠️ **Thunder Client** - VS Code extension

## 🔄 Development

### Available Scripts

```bash
# Start development server with auto-reload
npm run user

# Install new dependencies
npm install <package-name>

# Check for updates
npm outdated
```

### Development Workflow

1. **Code Changes** - Edit files and save
2. **Auto-reload** - Nodemon restarts server automatically
3. **Test Endpoints** - Use API client to test changes
4. **Debug** - Check console logs for errors

### Debugging

- 📊 **Morgan Logging** - HTTP request logs
- 🐛 **Console Logs** - Error tracking
- 🔍 **Network Tab** - Browser dev tools

## 📚 Documentation

### Dependencies

| Package          | Version | Purpose                 |
| ---------------- | ------- | ----------------------- |
| `express`        | ^5.1.0  | Web framework           |
| `@clerk/express` | ^1.7.34 | Authentication          |
| `mongoose`       | ^8.18.3 | MongoDB ODM             |
| `cors`           | ^2.8.5  | Cross-origin requests   |
| `morgan`         | ^1.10.1 | HTTP logging            |
| `dotenv`         | ^17.2.3 | Environment variables   |
| `nodemon`        | ^3.1.10 | Development auto-reload |

### Key Files

- **`index.js`** - Application entry point with Clerk middleware setup
- **`User.controller.js`** - Business logic for user registration and validation
- **`User.route.js`** - Route definitions with authentication middleware
- **`User.Model.js`** - MongoDB schema with watchlist integration
- **`fix-db-indexes.js`** - Database maintenance and cleanup utility

## 🤝 Contributing

1. **Fork** the repository
2. **Create** your feature branch (`git checkout -b feature/amazing-feature`)
3. **Commit** your changes (`git commit -m 'Add amazing feature'`)
4. **Push** to the branch (`git push origin feature/amazing-feature`)
5. **Open** a Pull Request

### Coding Standards

- 📝 Use ESLint for code formatting
- 🧪 Write tests for new features
- 📖 Update documentation
- 🔄 Follow semantic versioning

---

## Implementation Notes

### Current Features

- ✅ **User Registration**: Single endpoint for creating/checking users
- ✅ **Clerk Integration**: Full authentication with JWT tokens
- ✅ **Duplicate Prevention**: Automatic checking for existing users
- ✅ **Watchlist Support**: Built-in watchlist array for stock tracking
- ✅ **Database Maintenance**: Utility for index management
- ✅ **Error Handling**: Comprehensive error responses
- ✅ **Development Logging**: HTTP request logging with Morgan

### Architecture Benefits

- 🚀 **Microservice Design**: Independent user management service
- 🔒 **Security First**: All routes protected with Clerk authentication
- 📊 **MongoDB Integration**: Scalable NoSQL database with Mongoose ODM
- 🌐 **CORS Enabled**: Ready for frontend integration
- ⚡ **Performance**: Lightweight Express.js framework

### Service Status

- **Port**: ✅ Runs on port 8000
- **Authentication**: ✅ Clerk middleware with `requireAuth()`
- **Database**: ✅ MongoDB with unique constraints
- **Logging**: ✅ Morgan HTTP request logging
- **Environment**: ✅ dotenv configuration support

---
<div align="center">

**Built with ❤️ by [Priyangshu](https://github.com/Priyangshu-0221)**

⭐ **Star this repo if it helped you!**

</div>
