const Drives = require("../models/driveModel");
const _id = "643051e1e4e0a63785a4f537";

const driveCtrl = {
  getLegStatus: async (_, res) => {
    try {
      const drive = await Drives.findOne({ _id });
      res.status(200).json(drive.Led.Status);
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
};

module.exports = driveCtrl;
