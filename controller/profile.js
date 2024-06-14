const profile = async (req, res) => {
    try {
        const user = req.session.user;
        if (!user) {
            return res.status(400).json({ message: "you are not authenticated" });
        }
        return res.status(200).json({ data: user });
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: "Internal server error" });
    }
}

export {
    profile
}