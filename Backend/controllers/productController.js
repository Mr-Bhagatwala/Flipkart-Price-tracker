const puppeteer = require('puppeteer');
const Product = require('../models/productModel');



// Fetch product details from Flipkart and save to DB
const fetchProduct = async (req, res) => {
  try {
    const { link } = req.body;
    const productDetails = await scrapeFlipkart(link);

    let product = await Product.findOne({ link });

    if (!product) {
      product = new Product({
        ...productDetails,
        link,
        priceHistory: [{ price: productDetails.price, checkedAt: new Date() }],
      });
    } else {
      product.priceHistory.push({ price: productDetails.price, checkedAt: new Date() });
    }

    await product.save();
    res.json(product);
  } catch (err) {
    console.error('Error fetching product data:', err);  // Log the error to the console
    res.status(500).json({ error: 'Failed to fetch product data' });
  }
};

// Scrape product data from Flipkart

const scrapeFlipkart = async (url) => {
    let browser;
    try {
      browser = await puppeteer.launch({ headless: true });
      const page = await browser.newPage();
      
      await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 30000 });
      
      // Wait for the price element to ensure it's loaded
      await page.waitForSelector('div.Nx9bqj.CxhGGd', { timeout: 20000 });
      
      await page.goto(url, { waitUntil: 'networkidle2' }); // Ensure the page loads completely

// Wait for the description element
await page.waitForSelector('div.GNDEQ-', { timeout: 5000 });

const productDetails = await page.evaluate(() => {
    const title = document.querySelector('h1._6EBuvT span.VU-ZEz')?.innerText || 'No title available';
    
    const priceText = document.querySelector('div.Nx9bqj.CxhGGd')?.innerText || 'No price available';
    const price = priceText !== 'No price available' ? parseFloat(priceText.replace(/[₹,]/g, '')) : null;
    
    const reviews = document.querySelector('span.Wphh3N')?.innerText || 'No reviews';
    const totalPurchases = document.querySelector('span._2_R_DZ')?.innerText || 'No purchase data';
    
    const imageUrl = document.querySelector('div.yN\\+eNk.w9jEaj img')?.src || 'No image available';
    
    const ratingText = document.querySelector('span.Y1HWO0')?.innerText;
    const rating = ratingText ? parseFloat(ratingText.split(' ')[0]) : null;

    // Use document.querySelector for the description
    const descriptionElement = document.querySelector('div.GNDEQ-');
    const description = descriptionElement ? descriptionElement.innerText : 'No description available';
    
    return {
        title,
        price,
        reviews,
        totalPurchases,
        imageUrl,
        rating,
        description,
    };
});

    
    
      return productDetails;
    } catch (err) {
      console.error('Error scraping Flipkart:', err);
      throw new Error('Failed to scrape product data');
    } finally {
      if (browser) await browser.close();
    }
  };
  

// Fetch all products
const getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    console.error('Error retrieving products:', err);  // Log error to console
    res.status(500).json({ error: 'Failed to retrieve products' });
  }
};

// Recheck the product price and update the history
const recheckPrice = async (req, res) => {
  try {
    const { productId } = req.body;
    const product = await Product.findById(productId);

    if (!product) {
      return res.status(404).json({ error: 'Product not found' });
    }

    const updatedDetails = await scrapeFlipkart(product.link);
    product.priceHistory.push({ price: updatedDetails.price, checkedAt: new Date() });

    await product.save();
    res.json(product);
  } catch (err) {
    console.error('Error rechecking product price:', err);  // Log error
    res.status(500).json({ error: 'Failed to recheck product price' });
  }
};

module.exports = { fetchProduct, getProducts, recheckPrice };
