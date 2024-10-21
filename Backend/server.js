const express = require('express');
const mongoose = require('mongoose');
const productRoutes = require('./routes/productRoutes');
const cors = require('cors');
const app = express();
// Enable CORS for all routes
app.use(cors());


app.use(express.json());

mongoose.connect('mongodb://localhost:27017/priceTracker', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.log('Failed to connect to MongoDB:', err));

app.use('/api/products', productRoutes);

const port = 5000;
app.listen(port, () => console.log(`Server running on port ${port}`));
