const router = require("express").Router();
const authCtrl = require("../controllers/driveCtrl");

router.get("/drive", authCtrl.getLeg);
// router.post("/drive", authCtrl.getLeg);

module.exports = router;
