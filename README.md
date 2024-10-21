
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
```json


Backend Libraries
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
