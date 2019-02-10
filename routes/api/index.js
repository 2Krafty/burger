const router = require("express").Router();
const burgerRoutes = require("./burgerRoutes");

router.use("/burger", burgerRoutes);

module.exports = router;