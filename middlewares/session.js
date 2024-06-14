import session from "express-session";

const sessionMiddleware = session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: { 
        secure: false,
        maxAge: 1000 * 60 * 1 // 3 minutes
    }
});

export default sessionMiddleware;