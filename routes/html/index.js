const router = require("express").Router();
const htmlRoute = require("./htmlRoutes");

router.use("/", htmlRoutes);
module.exports = router;