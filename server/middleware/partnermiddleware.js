module.exports = (req, res, next) => {
    if (req.user.role !== "partner") {
        return res.status(403).json({
            message: "Forbidden",
        });
    }
    next();
}