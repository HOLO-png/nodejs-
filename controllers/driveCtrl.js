const Drives = require("../models/driveModel");
const _id = "643051e1e4e0a63785a4f537";

const io = require("../module_sokect");
const driveService = require("../services/drive.service");
const serviceFCM = require("../serviceFCM");
const token =
  "dUnTEoBPReyQgX_D4R7PLp:APA91bF19Pa7P6Daj2jrahaCEzpWGKu-aPWgLZmAvZFcEgqPWiQIHunE_MYUx2pzU7-o0hqRZ1W0zeK76JJJMM-83mneWy6mgn8wgEP4_XP5gRBKYnxiHIHB3qK-0G9OxDFBqzc-wMzW";
const driveCtrl = {
  getDrive: async (_, res) => {
    try {
      const drive = await Drives.findOne({ _id });
      res.status(200).json(drive);
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
  updateDriveStatus: async (req, res) => {
    try {
      await Drives.updateOne({ _id });
      res.status(200).json(req.body);
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
  updateLightStatus: async (req, res) => {
    try {
      const { Led } = req.body;
      console.log("new status", req.body);
      const drive = await Drives.updateOne({ _id }, { $set: req.body });
      io.emit("testLight", Led.Status);
      return res.status(200).json(Led.Status);
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
  updateDataTempHumi: async (req, res) => {
    try {
      const { Humidity, Temperature } = req.body;
      console.log("new status", Temperature.Data);
      if (Temperature.Data >= 50) {
        serviceFCM.sendMessage(token, "Cảnh Báo", "Nhiệt Độ quá cao!");
      }
      const drive = await Drives.updateOne({ _id }, { $set: req.body });
      const d = { temp: Humidity.Data, humi: Temperature.Data };
      io.emit("testTemHumi", d);
      return res.status(200).json(req.body);
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
};

module.exports = driveCtrl;
