// -------import-----------
import express from 'express';
import router from './routes/api.js';
const app= new express();

// Security middleware to limit repeated requests from the same IP (Prevents DDoS attacks & brute-force attacks)
import rateLimit from 'express-rate-limit';

// Security middleware that sets various HTTP headers to protect against common web vulnerabilities
import helmet from 'helmet';

//Prevent NoSQL Injection
import mongosanitize from 'express-mongo-sanitize';

// Security middleware to prevent XSS (Cross-Site Scripting) attacks
import xss from 'xss-clean';

// Security middleware to prevent HTTP Parameter Pollution attacks
import hpp from 'hpp';

// Middleware to enable Cross-Origin Resource Sharing (CORS)
import cors from 'cors';

// Middleware to parse cookies from incoming requests
import cookieParser from 'cookie-parser';

// Mongoose library to interact with MongoDB
import mongoose from 'mongoose';

// Built-in Node.js module for handling file paths
import path from 'path';

// Importing environment variables and configuration settings
import {LIMIT_MESSAGE, MONGODB_STRING, MONGODB_OPTION, JSON_SIZE, RATE_LIMIT_TIME, TIME_LIMIT_INTERVAL } from './app/config/config.js';



//---------- use packages--------
// Set security HTTP headers
app.use(helmet());

// Limit repeated requests from the same IP (Prevents DDoS & brute-force attacks)
const limiter = rateLimit({
    windowMs:RATE_LIMIT_TIME,
    max: TIME_LIMIT_INTERVAL, // Limit each IP to ..times requests per windowMs
    message: LIMIT_MESSAGE,
});
app.use(limiter);

// Prevent NoSQL Injection attacks
app.use(mongosanitize());

// Prevent XSS (Cross-Site Scripting) attacks
app.use(xss());

// Prevent HTTP Parameter Pollution attacks
app.use(hpp());

// Enable CORS
app.use(cors());

// Parse cookies from incoming requests
app.use(cookieParser());

// Parse JSON and URL-encoded data
app.use(express.json());
app.use(express.urlencoded({ limit: JSON_SIZE, extended: true }));

// Disable ETag generation to prevent caching validation overhead and manual caching management
app.set('etag', false);


// -------- MongoDB connection--------
mongoose.connect(MONGODB_STRING,MONGODB_OPTION).then((res)=>{
    console.log("Database Connected")
}).catch((err)=>{
    console.log(err)
})

// Use the router for API version 1 (this will handle requests to '/api/v1')
app.use("/api/v1", router);

// -----------React front-end-----------
// Add React Front End Routing
app.use(express.static('view/dist'))
app.get('*',function (req,res) {
    res.sendFile(path.resolve(__dirname,'view','dist','index.html'))
})

export default app;