const Koa = require('koa');
const cors = require('koa2-cors');
const koaBody = require('koa-body');

// Import Routes

const app = new Koa();
const PORT = 8163; // Consider setting this to an environment variable

// CORS Configuration - Cross Origin
app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true
}));

// Body Parsed
app.use(koaBody());

// Configure to take routes

// Server
const server = app.listen(PORT, () => {
    console.log(`Listening On Port: ${PORT}`)
})
