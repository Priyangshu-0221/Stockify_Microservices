# 📊 Watchlist Service

A Node.js microservice for managing user stock watchlists in the Stockify trading platform. This service handles adding, retrieving, and removing stocks from user watchlists with real-time stock data integration.

## 🚀 Overview

The Watchlist Service is part of a microservices architecture that enables users to:

- Add stocks to their personal watchlist with real-time data
- View their complete watchlist with current stock information
- Remove specific stocks from their watchlist
- Prevent duplicate entries in watchlist
- Track detailed stock metrics (open, high, low, volume, price changes)
- Secure authentication using Clerk middleware

## 🏗️ Architecture

```
watchlist-service/
├── controller/
│   └── WatchList.controller.js    # Business logic for watchlist operations
├── model/
│   ├── Watchlist.Model.js         # Watchlist data schema
│   └── User.Model.js              # User reference schema
├── routes/
│   ├── Watchlist.routes.js        # Watchlist API routes
│   └── index.js                   # Route configuration
├── index.js                       # Main server file
├── package.json                   # Dependencies and scripts
└── .env                          # Environment variables
```

## 🔧 Technologies

- **Runtime**: Node.js with ES6 modules
- **Framework**: Express.js
- **Database**: MongoDB with Mongoose ODM
- **Authentication**: Clerk Express middleware with `requireAuth()`
- **HTTP Client**: Axios for stock service communication
- **Development**: Nodemon for hot reloading
- **Logging**: Morgan for HTTP request logging

## 📋 Prerequisites

- Node.js (v16 or higher)
- MongoDB instance
- Clerk account and API keys
- Stock Service running on port 8001 (for stock data retrieval)
- User Service running (for user validation)

## ⚙️ Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd backend/watchlist-service
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
   npm run watchlist
   ```

The service will start on `http://localhost:8002`

## Authentication

All endpoints require Clerk authentication using Bearer tokens. Include the authorization header in your requests:

```bash
Authorization: Bearer <clerk_jwt_token>
```

## 📡 API Endpoints

### Base URL: `http://localhost:8002/api/watchlist`

### ⭐ Add Stock to Watchlist

```http
POST /addwatchlist
```

**Headers:**

```
Authorization: Bearer <clerk_jwt_token>
Content-Type: application/json
```

**Request Body:**

```json
{
  "id": "stock_id_from_stock_service",
  "userId": "clerk_user_id"
}
```

**Response:**

```json
{
  "message": "Added to watchlist",
  "watchlist": {
    "_id": "64f123456789abcdef012345",
    "stockId": "RELIANCE",
    "company": "Reliance Industries Limited",
    "open": 2845.75,
    "high": 2890.5,
    "low": 2820.25,
    "prev_close": 2835.4,
    "price_change": "+10.35 (+0.37%)",
    "volume": 2547893,
    "owner": "64f987654321fedcba098765",
    "createdAt": "2025-01-01T10:30:00.000Z",
    "updatedAt": "2025-01-01T10:30:00.000Z"
  }
}
```

**Error Responses:**

```json
// If stock already in watchlist
{
  "message": "Already in watchlist"
}

// If user not found
{
  "message": "User not found"
}
```

### 📋 Get User Watchlist

```http
GET /userwatchlists?userId=user_mongodb_object_id
```

**Headers:**

```
Authorization: Bearer <clerk_jwt_token>
```

**Query Parameters:**

- `userId`: MongoDB ObjectId of the user

**Response:**

```json
{
  "success": true,
  "count": 3,
  "watchlist": [
    {
      "_id": "64f123456789abcdef012345",
      "stockId": "RELIANCE",
      "company": "Reliance Industries Limited",
      "open": 2845.75,
      "high": 2890.5,
      "low": 2820.25,
      "prev_close": 2835.4,
      "price_change": "+10.35 (+0.37%)",
      "volume": 2547893,
      "owner": "64f987654321fedcba098765",
      "createdAt": "2025-01-01T10:30:00.000Z",
      "updatedAt": "2025-01-01T10:30:00.000Z"
    },
    {
      "_id": "64f123456789abcdef012346",
      "stockId": "TCS",
      "company": "Tata Consultancy Services",
      "open": 3890.5,
      "high": 3925.8,
      "low": 3875.2,
      "prev_close": 3885.75,
      "price_change": "+4.75 (+0.12%)",
      "volume": 1234567,
      "owner": "64f987654321fedcba098765",
      "createdAt": "2025-01-01T11:15:00.000Z",
      "updatedAt": "2025-01-01T11:15:00.000Z"
    }
  ]
}
```

### 🗑️ Remove Stock from Watchlist

```http
DELETE /removeuserwatchlist
```

**Headers:**

```
Authorization: Bearer <clerk_jwt_token>
Content-Type: application/json
```

**Request Body:**

```json
{
  "userId": "user_mongodb_object_id",
  "watchlistId": "watchlist_item_mongodb_object_id"
}
```

**Response:**

```json
{
  "success": true,
  "message": "Watchlist item removed successfully",
  "removedItem": {
    "_id": "64f123456789abcdef012345",
    "stockId": "RELIANCE",
    "company": "Reliance Industries Limited",
    "open": 2845.75,
    "high": 2890.5,
    "low": 2820.25,
    "prev_close": 2835.4,
    "price_change": "+10.35 (+0.37%)",
    "volume": 2547893,
    "owner": "64f987654321fedcba098765"
  }
}
```

**Error Responses:**

```json
// If watchlist item not found
{
  "message": "Watchlist item not found"
}

// If required fields missing
{
  "message": "User ID and Watchlist ID are required"
}
```

## 🏛️ Database Schema

### Watchlist Model

```javascript
{
  stockId: String (required),
  company: String (required),
  open: Number,
  high: Number,
  low: Number,
  prev_close: Number,
  price_change: String,
  volume: Number,
  owner: ObjectId (required, ref: "User"),
  timestamps: true
}
```

### User Reference Model

```javascript
{
  clerk_id: String (required, unique),
  clerk_username: String (required, unique),
  email: String (required, unique),
  watchlist: [ObjectId] (ref: "Watchlist")
}
```

## 🔄 Service Integration

### Stock Service Integration

- Fetches stock data from `http://localhost:8001/api/stock/{id}`
- Validates stock existence before adding to watchlist
- Retrieves real-time stock information

### User Service Integration

- Validates user existence through User model
- Maintains user-watchlist relationships
- Supports Clerk authentication system

## 🛡️ Security Features

- **Bearer Token Authentication**: All endpoints protected
- **User Validation**: Verifies user existence before operations
- **Duplicate Prevention**: Prevents adding same stock twice
- **Input Validation**: Validates required fields
- **Error Handling**: Comprehensive error responses

## 🔍 Error Handling

### Common Error Responses

**401 Unauthorized**

```json
{
  "message": "Missing or invalid token"
}
```

**400 Bad Request**

```json
{
  "message": "User ID is required"
}
```

**404 Not Found**

```json
{
  "message": "User not found"
}
```

**409 Conflict**

```json
{
  "message": "Already in watchlist"
}
```

**500 Internal Server Error**

```json
{
  "message": "Failed to add to watchlist",
  "error": "detailed_error_message"
}
```

## 🧪 Testing

### Manual Testing with cURL

**Add to Watchlist:**

```bash
curl -X POST http://localhost:8002/api/watchlist/addwatchlist \
  -H "Authorization: Bearer <clerk_jwt_token>" \
  -H "Content-Type: application/json" \
  -d '{
    "id": "HDFCBANK",
    "userId": "clerk_user_id"
  }'
```

**Get Watchlist:**

```bash
curl -X GET "http://localhost:8002/api/watchlist/userwatchlists?userId=user_object_id" \
  -H "Authorization: Bearer <clerk_jwt_token>"
```

**Remove from Watchlist:**

```bash
curl -X DELETE http://localhost:8002/api/watchlist/removeuserwatchlist \
  -H "Authorization: Bearer <clerk_jwt_token>" \
  -H "Content-Type: application/json" \
  -d '{
    "userId": "user_object_id",
    "watchlistId": "watchlist_item_id"
  }'
```

## 🐛 Debugging

### Console Logging

The service includes comprehensive logging:

- 🔍 User lookup operations
- ✅ Successful operations
- ❌ Error conditions
- 📊 Watchlist counts

## 🔄 Development Workflow

1. **Start the service**: `npm run watchlist`
2. **Make changes**: Code changes trigger automatic restart
3. **Test endpoints**: Use Postman or cURL for testing
4. **Check logs**: Monitor console for debugging info

## 📈 Performance Considerations

- **Database Indexing**: User and stock IDs are indexed
- **Duplicate Prevention**: Efficient duplicate checking
- **Error Handling**: Fast-fail for invalid requests
- **Stock Data Caching**: Consider implementing for high traffic

## 🚀 Future Enhancements

- [ ] Real-time watchlist updates via WebSocket
- [ ] Watchlist sharing between users
- [ ] Stock price alerts and notifications
- [ ] Bulk watchlist operations
- [ ] Advanced filtering and sorting
- [ ] Watchlist analytics and insights

## 👥 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Commit changes: `git commit -m 'Add feature'`
4. Push to branch: `git push origin feature-name`
5. Submit a pull request

## 📄 License

ISC License - see package.json for details

## 👨‍💻 Author

**Priyangshu** - Stockify Development Team

---

**Service Status**: ✅ Fully authenticated with Clerk middleware  
**Stock Integration**: ✅ Real-time data from Stock Service (port 8001)  
**Authentication**: ✅ All routes protected with `requireAuth()`  
**Port**: ✅ Service runs on port 8002  
**Database**: ✅ MongoDB integration with Mongoose ODM  
**Duplicate Prevention**: ✅ Automatic duplicate detection
