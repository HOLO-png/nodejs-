const router = require("express").Router();
const authCtrl = require("../controllers/driveCtrl");

router.get("/drive", authCtrl.getDrive);
router.post("/drive", authCtrl.updateDriveStatus);
router.post("/drive/updateStatus", authCtrl.updateStatus);

module.exports = router;
