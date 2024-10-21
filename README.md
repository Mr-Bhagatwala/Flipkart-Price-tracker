
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
  
## Frontend Libraries

```json
{
  "dependencies": {
    "@babel/plugin-proposal-private-property-in-object": "^7.21.11",
    "@testing-library/jest-dom": "^5.17.0",
    "@testing-library/react": "^13.4.0",
    "@testing-library/user-event": "^13.5.0",
    "axios": "^1.7.7",
    "chart.js": "^4.4.5",
    "react": "^18.3.1",
    "react-chartjs-2": "^5.2.0",
    "react-dom": "^18.3.1",
    "react-icons": "^5.3.0",
    "react-scripts": "5.0.1",
    "web-vitals": "^2.1.4"
  }
}

Here is the entire README.md file content in one go:

markdown
Copy code
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
  
## Frontend Libraries

```json
{
  "dependencies": {
    "@babel/plugin-proposal-private-property-in-object": "^7.21.11",
    "@testing-library/jest-dom": "^5.17.0",
    "@testing-library/react": "^13.4.0",
    "@testing-library/user-event": "^13.5.0",
    "axios": "^1.7.7",
    "chart.js": "^4.4.5",
    "react": "^18.3.1",
    "react-chartjs-2": "^5.2.0",
    "react-dom": "^18.3.1",
    "react-icons": "^5.3.0",
    "react-scripts": "5.0.1",
    "web-vitals": "^2.1.4"
  }
}
##Backend Libraries

{
  "dependencies": {
    "express": "^4.x.x",
    "mongoose": "^7.x.x",
    "axios": "^1.7.7"
  }
}
Prerequisites
Node.js (v16 or later)
MongoDB (for database)
Getting Started
Clone the repository

git clone https://github.com/yourusername/flipkart-price-tracker.git
cd flipkart-price-tracker
Backend Setup
Navigate to the backend directory:

bash
Copy code
cd backend
Install the backend dependencies:

bash
Copy code
npm install
Set up environment variables in a .env file in the backend directory:

bash
Copy code
MONGO_URI=your_mongodb_connection_string
PORT=5000
Start the backend server:

bash
Copy code
npm start
The backend server will start at http://localhost:5000.

Frontend Setup
Navigate to the frontend directory:

bash
Copy code
cd frontend
Install the frontend dependencies:

bash
Copy code
npm install
Start the frontend development server:

bash
Copy code
npm start
The frontend will be available at http://localhost:3000.

Proxy Setup
The frontend has a proxy configured in package.json to forward API requests to the backend.

json
Copy code
"proxy": "http://localhost:5000"
Usage
On the home page, users can enter a Flipkart product link.
The product details, including title, price, and reviews, are automatically fetched and displayed.
Users can click to check the price history of the product, visualized as a chart.
Each time the user checks the product, the current price is saved, allowing users to track price changes over time.
Contributing
Contributions are welcome! Please fork the repository and submit a pull request for any improvements or bug fixes.