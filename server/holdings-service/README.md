# 📊 Holdings Service

A Node.js microservice for managing user stock holdings in the Stockify trading platform. This service handles adding, retrieving, and managing user's stock portfolio with Clerk authentication and comprehensive portfolio tracking capabilities.

## 🚀 Overview

The Holdings Service is part of a microservices architecture that enables users to:

- Add stocks to their portfolio holdings
- View their complete stock portfolio
- Remove holdings from their account
- Track holding details including quantity, price, and ownership
- Secure authentication using Clerk middleware

## 🏗️ Architecture

```
holdings-service/
├── controller/
│   └── Holdings.controller.js     # Business logic for holdings operations
├── model/
│   ├── Holdings.Model.js          # Holdings data schema
│   └── User.Model.js              # User reference schema
├── routes/
│   ├── Holdings.routes.js         # Holdings API routes with auth
│   └── index.js                   # Route configuration
├── index.js                       # Main server file with Clerk middleware
├── package.json                   # Dependencies and scripts
└── .env                          # Environment variables
```

## 🔧 Technologies

- **Runtime**: Node.js with ES6 modules
- **Framework**: Express.js
- **Database**: MongoDB with Mongoose ODM
- **Authentication**: Clerk Express middleware with `requireAuth()`
- **HTTP Client**: Axios for inter-service communication
- **Development**: Nodemon for hot reloading
- **Logging**: Morgan for HTTP request logging

## 📋 Prerequisites

- Node.js (v16 or higher)
- MongoDB instance
- Clerk account and API keys
- User Service running (for user validation)

## ⚙️ Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd backend/holdings-service
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Environment setup**
   Create a `.env` file:

   ```env
   MONGO_URL=mongodb://localhost:27017/stockify
   CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
   CLERK_SECRET_KEY=your_clerk_secret_key
   ```

4. **Start the service**
   ```bash
   npm run holdings
   ```

The service will start on `http://localhost:8003`

## 🔐 Authentication

All endpoints require Clerk authentication using Bearer tokens. Include the authorization header in your requests:

```bash
Authorization: Bearer <clerk_jwt_token>
```

## 📡 API Endpoints

### Base URL: `http://localhost:8003/api/holdings`

### 📈 Add New Holding

```http
POST /addholdings
```

**Headers:**

```
Authorization: Bearer <clerk_jwt_token>
Content-Type: application/json
```

**Request Body:**

```json
{
  "owner": "user_mongodb_object_id",
  "name": "RELIANCE",
  "qty": 10,
  "price": 2845.75
}
```

**Response:**

```
"New Holding"
```

### 📋 Get User Holdings

```http
GET /userholdings?userId=user_mongodb_object_id
```

**Headers:**

```
Authorization: Bearer <clerk_jwt_token>
```

**Query Parameters:**

- `userId`: MongoDB ObjectId of the user

**Response:**

```json
[
  {
    "_id": "64f123456789abcdef012345",
    "name": "RELIANCE",
    "qty": 10,
    "price": 2845.75,
    "owner": "64f987654321fedcba098765",
    "createdAt": "2025-01-01T10:30:00.000Z",
    "updatedAt": "2025-01-01T10:30:00.000Z"
  },
  {
    "_id": "64f123456789abcdef012346",
    "name": "TCS",
    "qty": 5,
    "price": 3890.5,
    "owner": "64f987654321fedcba098765",
    "createdAt": "2025-01-01T11:15:00.000Z",
    "updatedAt": "2025-01-01T11:15:00.000Z"
  }
]
```

### 🗑️ Remove User Holding

```http
DELETE /removeuserholding
```

**Headers:**

```
Authorization: Bearer <clerk_jwt_token>
Content-Type: application/json
```

**Request Body:**

```json
{
  "userId": "user_mongodb_object_id"
}
```

**Response:**

```json
{
  "message": "Holding removed successfully"
}
```

**Note:** Currently removes one holding for the user. Implementation may need enhancement for specific holding removal.

## 🏛️ Database Schema

### Holdings Model

```javascript
{
  _id: ObjectId,              // Unique holding identifier
  name: String,               // Stock/company name (e.g., "RELIANCE")
  qty: Number,                // Quantity of shares owned
  price: Number,              // Average purchase price per share
  owner: ObjectId,            // Reference to User model
  createdAt: Date,            // Auto-generated timestamp
  updatedAt: Date             // Auto-generated timestamp
}
```

### User Reference Model

```javascript
{
  clerk_id: String,           // Clerk user ID (required, unique)
  clerk_username: String,     // Username (required, unique)
  email: String,              // User email (required, unique)
  watchlist: [ObjectId]       // Array of watchlist references
}
```

## 🔄 Service Integration

### Clerk Authentication Integration

- All routes protected with `requireAuth()` middleware
- JWT token validation on every request
- Secure user session management
- Integration with Clerk user management system

### User Service Integration

- Validates user existence before holding operations
- Uses User model for authentication and authorization
- Maintains user-holding relationships

### Holdings Management Flow

1. **Authentication**: Verify Clerk JWT token
2. **User Validation**: Verify user exists in database
3. **Holding Operation**: Create, read, or delete holdings
4. **Data Persistence**: Save changes to MongoDB
5. **Response**: Return confirmation or holding data

## 🛡️ Security Features

- **Clerk Authentication**: JWT-based authentication on all endpoints
- **User Validation**: Verifies user existence before operations
- **Data Integrity**: Owner field ensures data consistency
- **Error Handling**: Comprehensive error responses with proper status codes
- **Input Validation**: Validates required fields

## 🔍 Error Handling

### Common Error Responses

**401 Unauthorized**

```json
{
  "error": "Unauthorized - Invalid or missing token"
}
```

**404 User Not Found**

```json
{
  "message": "User not found"
}
```

**500 Internal Server Error**

```json
{
  "message": "Server error",
  "error": "detailed_error_message"
}
```

## 🧪 Testing

### Manual Testing with cURL

**Add Holding:**

```bash
curl -X POST http://localhost:8003/api/holdings/addholdings \
  -H "Authorization: Bearer <clerk_jwt_token>" \
  -H "Content-Type: application/json" \
  -d '{
    "owner": "user_object_id",
    "name": "HDFCBANK",
    "qty": 20,
    "price": 1675.80
  }'
```

**Get Holdings:**

```bash
curl -X GET "http://localhost:8003/api/holdings/userholdings?userId=user_object_id" \
  -H "Authorization: Bearer <clerk_jwt_token>"
```

**Remove Holding:**

```bash
curl -X DELETE http://localhost:8003/api/holdings/removeuserholding \
  -H "Authorization: Bearer <clerk_jwt_token>" \
  -H "Content-Type: application/json" \
  -d '{
    "userId": "user_object_id"
  }'
```

## 📈 Performance Considerations

- **Database Indexing**: User and holding IDs are indexed
- **Query Optimization**: Efficient user-holding relationship queries
- **Authentication Caching**: Clerk middleware optimizes token validation
- **Error Handling**: Fast-fail for invalid requests
- **Memory Management**: Lightweight holding data structure

## 🔄 Development Workflow

1. **Start the service**: `npm run holdings`
2. **Configure Clerk**: Set up Clerk authentication keys
3. **Make changes**: Code changes trigger automatic restart
4. **Test endpoints**: Use Postman or cURL with Bearer tokens
5. **Check logs**: Monitor console for debugging info

## 🚀 Future Enhancements

- [ ] Implement specific holding removal by holding ID
- [ ] Add portfolio analytics (total value, gains/losses)
- [ ] Duplicate holding management with average price calculation
- [ ] Real-time portfolio updates via WebSocket
- [ ] Portfolio history with pagination
- [ ] Bulk holding operations
- [ ] Integration with real-time stock prices
- [ ] Portfolio performance metrics
- [ ] Input validation middleware
- [ ] Enhanced error handling across all endpoints
- [ ] Holding categories and tags
- [ ] Export portfolio data (CSV, PDF)

## 📊 Portfolio Features

### Supported Operations

- **Add Holdings**: Add new stock positions to portfolio
- **View Portfolio**: Complete portfolio overview
- **Remove Holdings**: Remove positions from portfolio

### Holding Information

- **Name**: Stock symbol or company name
- **Quantity**: Number of shares owned
- **Price**: Average purchase price per share
- **Ownership**: Linked to authenticated user
- **Timestamps**: Automatic tracking of creation/updates

## 🧪 Sample Holding Data

```json
{
  "name": "INFY",
  "qty": 15,
  "price": 1890.25,
  "owner": "64f987654321fedcba098765"
}
```

## 🔐 Clerk Integration

### Authentication Flow

1. User authenticates via Clerk
2. Clerk issues JWT token
3. Client includes token in request headers
4. `requireAuth()` middleware validates token
5. Request proceeds to controller logic

### Required Environment Variables

```env
CLERK_PUBLISHABLE_KEY=pk_test_...
CLERK_SECRET_KEY=sk_test_...
```

## 👥 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-holdings-enhancements`
3. Commit changes: `git commit -m 'Add portfolio analytics'`
4. Push to branch: `git push origin feature-holdings-enhancements`
5. Submit a pull request

## 📄 License

ISC License - see package.json for details

## 👨‍💻 Author

**Priyangshu** - Stockify Development Team

---

**Service Status**: ✅ Fully authenticated with Clerk middleware  
**Authentication**: ✅ All routes protected with `requireAuth()`  
**Port**: ✅ Service runs on port 8003  
**Database**: ✅ MongoDB integration with Mongoose ODM
