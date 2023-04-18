const Drives = require("../models/driveModel");
const _id = "643051e1e4e0a63785a4f537";

const io = require("../module_sokect");
const driveService = require("../services/drive.service");
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
  updateStatus: async (req, res) => {
    try {
      console.log("new status", req.body);
      const drive = await Drives.updateOne({ _id }, { $set: req.body });
      io.emit("testLight", drive.Led);
      res.status(200).json(req.body);
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
};

module.exports = driveCtrl;
