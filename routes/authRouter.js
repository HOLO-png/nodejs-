const router = require("express").Router();
const authCtrl = require("../controllers/authCtrl");

router.post("/example", authCtrl.register);

module.exports = router;
