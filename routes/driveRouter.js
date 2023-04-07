const router = require("express").Router();
const authCtrl = require("../controllers/driveCtrl");

router.get("/drive", authCtrl.getLegStatus);
router.post("/drive", authCtrl.updateDriveStatus);

module.exports = router;
