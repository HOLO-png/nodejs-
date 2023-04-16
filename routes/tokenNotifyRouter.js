const router = require("express").Router();
const tokenNotifyCtrl = require("../controllers/tokenNotifyCtrl");

router.post("/token-notify", tokenNotifyCtrl.createTokenNotify);
router.delete("/token-notify/:userId", tokenNotifyCtrl.removeTokenNotify);

module.exports = router;
