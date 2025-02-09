// app running port
export const PORT=5030;

// Database connection (don't type localhost)
export const MONGODB_STRING="mongodb://127.0.0.1:27017/"
export const MONGODB_OPTION={user:'',pass:"",autoIndex:true};

//Json size
export const JSON_SIZE = '50mb';

// Express rate limit
export const RATE_LIMIT_TIME = 60*60*1000;
export const TIME_LIMIT_INTERVAL = 1000;
export const LIMIT_MESSAGE = 'Too many requests, please try again after some time';

// Token expire time
export const TOKEN_EXPIRATION = '24h';

// Email from
export const EMAIL_FROM = 'XYZ Ecommerce Solution <info@teamrabbil.com>';
