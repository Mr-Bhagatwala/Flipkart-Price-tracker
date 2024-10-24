# Flipkart Price Tracker

A web application that allows users to track prices of Flipkart products by sharing product links. The application automatically fetches product details like title, description, price, reviews, and total purchases. Users can check the price history of products and recheck them to update their pricing history.

## Features

- Fetch product details (title, description, price, reviews, total purchases) from Flipkart links.
- Track price history over time.
- Visualize price changes using charts.
- No user login required. All users can view the products and their price history.
- Built using the MERN stack (MongoDB, Express, React, Node.js).

## Tech Stack

- **Frontend**: React.js, Chart.js, Axios
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Libraries**: 
  - `react-chartjs-2`: Used for displaying price history charts.
  - `axios`: Used for making API requests to fetch product data.

## Prerequisites

- Node.js (v16 or later)
- MongoDB (for the database)
- Git (for cloning the repository)

## Getting Started

Follow these steps to set up the Flipkart Price Tracker application:

### 1. Clone the Repository

Open your terminal and run the following command to clone the repository:

- git clone https://github.com/yourusername/flipkart-price-tracker.git
- cd flipkart-price-tracker

### 2. Backend Setup
Navigate to the Backend Directory
Change to the backend directory:
- cd backend

Install Backend Dependencies
Install the required backend dependencies:

-npm install


Set Up Environment Variables
Create a .env file in the backend directory and add your MongoDB connection string and the desired port:
- MONGO_URI=your_mongodb_connection_string
- PORT=5000

 Start the Backend Server
Run the following command to start the backend server:
-npm run server

The backend server will start at http://localhost:5000.

### 3. Frontend Setup
Navigate to the Frontend Directory
Change to the frontend directory:
- cd frontend

 Start the Frontend Development Server
Run the following command to start the frontend development server:
-npm start

The frontend will be available at http://localhost:3000.

### 4. Proxy Setup
The frontend has a proxy configured in the package.json file to forward API requests to the backend. Ensure the following line is present:
- "proxy": "http://localhost:5000"


###Usage
On the home page, users can enter a Flipkart product link.
The product details, including title, price, and reviews, are automatically fetched and displayed.
Users can click to check the price history of the product, visualized as a chart.
Each time the user checks the product, the current price is saved, allowing users to track price changes over time.
###Contributing
Contributions are welcome! Please fork the repository and submit a pull request for any improvements or bug fixes.

###License
This project is licensed under the MIT License - see the LICENSE file for details.
-
You can replace `Mr-Bhagatwala` in the clone URL with your actual GitHub username. Feel free to modify any sections to fit your needs better!





