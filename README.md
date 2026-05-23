# 🛒 E-Commerce Backend Project (Node.js, Express.js & MongoDB)

A full-featured E-Commerce Backend Application built while learning Backend Development from the Sheriyans Coding School Node.js, Express.js, and MongoDB series.

This project demonstrates real-world backend concepts such as authentication, authorization, product management, cart functionality, order processing, file uploads, and database integration.

## 🚀 Features

### 👤 User Features

* User Registration & Login
* Secure Password Hashing (bcrypt)
* JWT Authentication
* User Profile Management
* Logout Functionality

### 🛍️ Product Features

* View All Products
* Product Details Page
* Search Products
* Product Categories
* Product Image Uploads
* Product Inventory Management

### 🛒 Cart Features

* Add Products to Cart
* Remove Products from Cart
* Update Quantity
* View Cart Items
* Calculate Total Price

### 📦 Order Features

* Place Orders
* Order History
* Order Status Tracking
* Manage Purchased Products

### 🔐 Admin Features

* Add Products
* Update Products
* Delete Products
* Manage Users
* Manage Orders
* Upload Product Images

## 🛠️ Tech Stack

### Backend

* Node.js
* Express.js

### Database

* MongoDB
* Mongoose

### Authentication

* JWT (JSON Web Token)
* bcrypt

### File Upload

* Multer

### Template Engine

* EJS

### Other Tools

* Cookie Parser
* Express Session
* dotenv
* Nodemon

## 📂 Project Structure




## API Endpoints

### Authentication

| Method | Endpoint  | Description   |
| ------ | --------- | ------------- |
| POST   | /register | Register User |
| POST   | /login    | Login User    |
| GET    | /logout   | Logout User   |

### Products

| Method | Endpoint      | Description         |
| ------ | ------------- | ------------------- |
| GET    | /products     | Get All Products    |
| GET    | /products/:id | Get Product Details |
| POST   | /products     | Create Product      |
| PUT    | /products/:id | Update Product      |
| DELETE | /products/:id | Delete Product      |

### Cart

| Method | Endpoint         | Description         |
| ------ | ---------------- | ------------------- |
| POST   | /cart/add/:id    | Add Product to Cart |
| DELETE | /cart/remove/:id | Remove Product      |
| GET    | /cart            | View Cart           |

### Orders

| Method | Endpoint    | Description   |
| ------ | ----------- | ------------- |
| POST   | /orders     | Place Order   |
| GET    | /orders     | View Orders   |
| GET    | /orders/:id | Order Details |

## 📸 Screenshots

Add project screenshots here:

* Home Page
* Product Listing
* Product Details
* Cart Page
* Admin Dashboard

## 📚 Concepts Learned

* Express Routing
* Middleware
* MVC Architecture
* MongoDB Relationships
* Authentication & Authorization
* Session and Cookie Handling
* File Uploads using Multer
* REST API Development
* CRUD Operations
* Error Handling

## 🎯 Future Improvements

* Payment Gateway Integration (Stripe/Razorpay)
* Product Reviews & Ratings
* Wishlist Functionality
* Email Verification
* Forgot Password Feature
* Admin Analytics Dashboard
* Pagination & Filtering
* Cloudinary Image Storage
* Docker Deployment

## 📄 License

This project is licensed under the MIT License.

---

⭐ If you found this project useful, feel free to star the repository and contribute! 🚀
