const router = require("express").Router();
const burgerRoutes = require("./burgerRoutes");

router.use("/burgers", burgerRoutes);

module.exports = router;