const express = require("express");
const router = express.Router();

router.get("/sign-up", (req, res) => {
    res.send('hello sign up')
});

module.exports = router