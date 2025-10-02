# 📋 Order Service

A Node.js microservice for managing stock trading orders in the Stockify trading platform. This service handles placing, retrieving, and managing stock orders with user authentication and order tracking capabilities.

## 🚀 Overview

The Order Service is part of a microservices architecture that enables users to:

- Place buy/sell stock orders
- View their complete order history
- Remove orders from their account
- Track order details including quantity, price, and mode

## 🏗️ Architecture

```
order-service/
├── controller/
│   └── Order.controller.js       # Business logic for order operations
├── model/
│   ├── Order.Model.js            # Order data schema
│   └── User.Model.js             # User reference schema
├── routes/
│   ├── Order.routes.js           # Order API routes
│   └── index.js                  # Route configuration
├── index.js                      # Main server file
├── package.json                  # Dependencies and scripts
└── .env                         # Environment variables
```

## 🔧 Technologies

- **Runtime**: Node.js with ES6 modules
- **Framework**: Express.js
- **Database**: MongoDB with Mongoose ODM
- **Authentication**: Clerk Express middleware (integrated)
- **HTTP Client**: Axios for inter-service communication
- **Development**: Nodemon for hot reloading
- **Logging**: Morgan for HTTP request logging

## 📋 Prerequisites

- Node.js (v16 or higher)
- MongoDB instance
- Clerk account and API keys (for authentication middleware)
- User Service running (for user validation)

## ⚙️ Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd backend/order-service
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
   npm run orders
   ```

The service will start on `http://localhost:8004`

## 📡 API Endpoints

### Base URL: `http://localhost:8004/api/orders`

**🔐 Authentication Required**: All endpoints require Clerk authentication using Bearer tokens:

```bash
Authorization: Bearer <clerk_jwt_token>
```

### 📌 Place New Order

```http
POST /addorder
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
  "name": "BAJAJ-AUTO",
  "qty": 10,
  "price": 9510.5,
  "mode": "BUY"
}
```

**Response:**

```
"New Order placed"
```

### 📋 Get User Orders

```http
GET /userorder?userId=user_mongodb_object_id
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
    "name": "BAJAJ-AUTO",
    "qty": 10,
    "price": 9510.5,
    "mode": "BUY",
    "owner": "64f987654321fedcba098765",
    "createdAt": "2025-01-01T10:30:00.000Z",
    "updatedAt": "2025-01-01T10:30:00.000Z"
  },
  {
    "_id": "64f123456789abcdef012346",
    "name": "SUNPHARMA",
    "qty": 5,
    "price": 1545.25,
    "mode": "SELL",
    "owner": "64f987654321fedcba098765",
    "createdAt": "2025-01-01T11:15:00.000Z",
    "updatedAt": "2025-01-01T11:15:00.000Z"
  }
]
```

### 🗑️ Remove User Order

```http
DELETE /removeuserorder
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
  "message": "Order removed successfully"
}
```

**Note:** Currently removes one order for the user. The implementation may need enhancement for specific order removal.

## 🏛️ Database Schema

### Order Model

```javascript
{
  _id: ObjectId,              // Unique order identifier
  name: String,               // Stock/company name (e.g., "BAJAJ-AUTO")
  qty: Number,                // Quantity of shares
  price: Number,              // Order price per share
  mode: String,               // Order type ("BUY" or "SELL")
  owner: ObjectId,            // Reference to User model (required)
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

- Validates user existence before order operations
- Uses User model for authentication and authorization
- Maintains user-order relationships

### Order Management Flow

1. **Authentication**: Verify Clerk JWT token
2. **User Validation**: Verify user exists in database
3. **Order Creation**: Create new order with user reference
4. **Data Persistence**: Save order to MongoDB
5. **Response**: Return confirmation or order data

## 🛡️ Security Features

- **Clerk Authentication**: JWT-based authentication on all endpoints
- **User Validation**: Verifies user existence before operations
- **Data Integrity**: Required owner field ensures data consistency
- **Error Handling**: Comprehensive error responses
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
  "error": "detailed_error_object"
}
```

## 🧪 Testing

### Manual Testing with cURL

**Place Order:**

```bash
curl -X POST http://localhost:8004/api/orders/addorder \
  -H "Authorization: Bearer <clerk_jwt_token>" \
  -H "Content-Type: application/json" \
  -d '{
    "owner": "user_object_id",
    "name": "HCLTECH",
    "qty": 15,
    "price": 1475.80,
    "mode": "BUY"
  }'
```

**Get Orders:**

```bash
curl -X GET "http://localhost:8004/api/orders/userorder?userId=user_object_id" \
  -H "Authorization: Bearer <clerk_jwt_token>"
```

**Remove Order:**

```bash
curl -X DELETE http://localhost:8004/api/orders/removeuserorder \
  -H "Authorization: Bearer <clerk_jwt_token>" \
  -H "Content-Type: application/json" \
  -d '{
    "userId": "user_object_id"
  }'
```


## 📈 Performance Considerations

- **Database Indexing**: User and order IDs are indexed
- **Query Optimization**: Efficient user-order relationship queries
- **Error Handling**: Fast-fail for invalid requests
- **Memory Management**: Lightweight order data structure

## 🔄 Development Workflow

1. **Start the service**: `npm run orders`
2. **Make changes**: Code changes trigger automatic restart
3. **Test endpoints**: Use Postman or cURL for testing
4. **Check logs**: Monitor console for debugging info

## 🚀 Future Enhancements

- [ ] Implement specific order removal by order ID
- [ ] Add order status tracking (PENDING, EXECUTED, CANCELLED)
- [ ] Order validation with stock service integration
- [ ] Real-time order updates via WebSocket
- [ ] Order history with pagination
- [ ] Bulk order operations
- [ ] Order execution simulation
- [ ] Portfolio impact calculations
- [ ] Input validation middleware
- [ ] Enhanced error handling across all endpoints

## 📊 Order Types & Modes

### Supported Order Modes

- **BUY**: Purchase orders for stocks
- **SELL**: Sale orders for stocks

### Order Information

- **Name**: Stock symbol or company name
- **Quantity**: Number of shares
- **Price**: Order price per share
- **Timestamp**: Automatic order placement time

## 🧪 Sample Order Data

```json
{
  "name": "RELIANCE",
  "qty": 25,
  "price": 2845.75,
  "mode": "BUY",
  "owner": "64f987654321fedcba098765"
}
```

## 👥 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-order-enhancements`
3. Commit changes: `git commit -m 'Add order status tracking'`
4. Push to branch: `git push origin feature-order-enhancements`
5. Submit a pull request

## 📄 License

ISC License - see package.json for details

## 👨‍💻 Author

**Priyangshu** - Stockify Development Team

---

**Service Status**: ✅ Routes correctly configured as `/api/orders`  
**Authentication**: ✅ All routes protected with Clerk `requireAuth()`  
**Package Name**: ✅ Correctly named as `order-service`  
**Port**: ✅ Service runs on port 8004  
**Clerk Integration**: ✅ Full JWT-based authentication middleware
