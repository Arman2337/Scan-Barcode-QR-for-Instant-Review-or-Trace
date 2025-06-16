import express, { urlencoded } from 'express';
import cors from 'cors';
import cookieParser from "cookie-parser";
import dotenv from 'dotenv';
import connectDB from './src/config/db.js';
import { errorHandler } from './src/middleware/errorMiddleware.js';
import axios from 'axios'; 
import productRoutes from './src/routes/productRoutes.js';
import reviewRoutes from './src/routes/reviewRoutes.js';

import Product from './src/models/product.js';

dotenv.config();
connectDB();

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(urlencoded({ extended: true }));
app.use(cookieParser());

const corsOptions = {
    origin: 'http://localhost:5173',
    credentials: true,
};
app.use(cors(corsOptions));

app.get("/", (req, res) => {
    res.status(200).json({
        message: "Welcome to the backend server!",
        status: "success"
    });
});

// ✅ Mount routes
app.use('/api/products', productRoutes);     // /api/products/:code or POST /
app.use('/api/products', reviewRoutes);      // /api/products/:productId/reviews

app.get('/api/image-proxy', async (req, res) => {
    const imageUrl = req.query.url;

    if (!imageUrl) {
        return res.status(400).send('Image URL is required');
    }

    try {
        const response = await axios.get(imageUrl, {
            responseType: 'arraybuffer',
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)',
                'Accept': 'image/*,*/*;q=0.8',
                'Referer': 'https://www.newegg.com/', // optional spoofing
            },
        });

        const contentType = response.headers['content-type'] || 'image/jpeg';
        res.set('Content-Type', contentType);
        res.send(response.data);
    } catch (error) {
        // console.error('Image proxy error:', error.message);
        console.error('Image proxy error:', error.response?.status, error.response?.statusText);

        res.status(500).send('Failed to load image');
    }
});

// ✅ Error handler last
app.use(errorHandler);


app.get('/api/upcitemdb/:barcode', async (req, res) => {
    const { barcode } = req.params;

    



    try {
        // 1. Check local database first
        const product = await Product.findOne({ barcode });

        if (product) {
            // 2. If found, return from database
            return res.json({
                success: true,
                data: product
            });
        }

        // 3. If not found, fetch from UPCitemDB
        const productData = await lookupUPCitemDB(req.params.barcode);

        // 4. Store in your database
        product = new Product({
            barcode,
            ...productData
               });
        await product.save();

        res.json({
            success: true,
            data: product
        });
    } catch (error) {
        console.error('UPCitemDB lookup failed:', error.message);
        res.status(500).json({
            success: false,
            error: error.message
        });
    }
});
    
    
    
    

// UPCitemDB API implementation
async function lookupUPCitemDB(barcode) {
    const url = `https://api.upcitemdb.com/prod/trial/lookup`;
    
    const params = {
        upc: barcode
    };

    const headers = {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    };

    const response = await axios.get(url, { params, headers });
    
    if (response.data.code !== 'OK' || !response.data.items || response.data.items.length === 0) {
        throw new Error(response.data.message || 'Product not found in UPCitemDB database');
    }
    
    // Return the first matching item
    return response.data.items[0];
}

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
