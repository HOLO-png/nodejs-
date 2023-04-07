const Drives = require("../models/driveModel");

const driveCtrl = {
  getLegStatus: async (req, res) => {
    try {
      const drives = await Drives.find();
      res.status(200).json(drives[0].status);
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
  updateDriveStatus: async (req, res) => {
    const _id = "643051e1e4e0a63785a4f537";
    try {
      await Drives.updateOne({ _id }, req.body);
      res.status(200).json(req.body);
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
};

module.exports = driveCtrl;
