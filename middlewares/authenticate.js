const isAuthenticated = (req, res, next) => {
    if (!req.session.user) {
        return res.status(400).json({ message: "you are not authenticated" });
    }
    next();
}

export {
    isAuthenticated
}