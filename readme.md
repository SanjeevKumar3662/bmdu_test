BMDU Product API

A simple RESTful Product Management API built with Node.js, Express, and MongoDB (Mongoose).
This project demonstrates clean backend architecture, centralized error handling, and CRUD operations using best practices.

🧠 Tech Stack

Node.js

Express.js

MongoDB

Mongoose

dotenv

CORS

📁 Project Structure

<pre>
backend/
├── src/
│ ├── controller/ # Business logic
│ ├── route/ # API routes
│ ├── model/ # Mongoose schemas
│ ├── db/ # Database connection
│ ├── utils/ # Reusable helpers
│ │ ├── asyncHandler.js
│ │ ├── apiError.js
│ │ ├── apiResponse.js
│ │ └── errorHandler.js
│ └── index.js # App entry point
├── .env
├── package.json
└── package-lock.json
</pre>

Getting Started
1️⃣ Clone the Repository
git clone <repository-url>
cd backend

2️⃣ Install Dependencies
npm install

3️⃣ Environment Variables

Create a .env file:

PORT=5000
MONGODB_URI=your_mongodb_connection_string
MODE=DEV

4️⃣ Start the Server
npm run dev

Server runs on:

http://localhost:3000

📌 API Endpoints
Base URL
/api

Method Endpoint Description
POST /products Create a new product
GET /products Fetch all products
GET /products/:id Fetch a product by ID
PATCH /products/:id Update product details
DELETE /products/:id Delete a product
📤 Sample Request (Create Product)
`{
"name": "Laptop",
"description": "High performance laptop",
"price": 55000,
"category": "Electronics",
"stock": 5,
"imageUrl": ""
}`

📥 Sample Success Response
`{
"success": true,
"message": "Product Created",
"data": {
"\_id": "65a1...",
"name": "Laptop",
"price": 55000
}
}`

⚠️ Error Handling Strategy

Async errors handled via asyncHandler

Custom ApiError for consistent error throwing

Centralized errorHandler middleware

Safe production responses (no sensitive data leakage)

Example error response:

`{
"success": false,
"message": "Product does not exist"
}
`
🔐 Status Codes Used

200 – Success

201 – Resource created

400 – Client error / validation failure

404 – Resource not found

500 – Server error

## Author

#### Sanjeev Kumar

Aspiring Full-Stack Developer

Strong foundation in JavaScript, React, Node.js, MongoDB , Express

Actively building production style projects

Focused on clean code and scalable architecture
