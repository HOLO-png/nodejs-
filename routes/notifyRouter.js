const router = require("express").Router();
const auth = require("../middleware/auth");
const notifyCtrl = require("../controllers/notifyCtrl");

router.get("/notifies", auth, notifyCtrl.getNotifies);

router.post("/notify", auth, notifyCtrl.createNotify);

router.get("/notify-nowDay", notifyCtrl.getNotifiesNowDay);

router.get("/count-notify-today", notifyCtrl.countNotifiesAntiTheftToday);

router.get("/count-notify-month", notifyCtrl.countNotifiesAntiTheftMonth);

// router.put("/notify-update/:idUser", notifyCtrl.getNotifiesNowDay);

router.get("/notify-forDay/:date", notifyCtrl.getNotifiesForDate);

// router.get("/notify/:userId", notifyCtrl.getNotifies);

router.delete("/delete-notify", notifyCtrl.deleteNotifies);

module.exports = router;
