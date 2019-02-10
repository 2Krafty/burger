const router = require("express").Router();
const burgerController = require("../../controllers/burgersControllers");

//when user hits /api/burgers
router.route("/")
.get(burgerController.findAll)
.post(burgerController.createBurger);

//when user hits /api/burgers/:id
router.route("/:id")
.get(burgerController.findById)
.put(burgerController.updateBurger)
.delete(burgerController.deleteBurger);

module.exports = router;

