const errorMiddleware = (err, req, res, next) => {
    console.log('Middleware error');
    const statusCode = res.statusCode ? res.statusCode : 500;
    res.status(statusCode)
    res.json({ message: err.message, stack: process.env.NODE_ENV === "production" ? err.stack : null }) // Update when deploying to production
}

module.exports = errorMiddleware