const Drives = require("../models/driveModel");

const driveCtrl = {
  getLegStatus: async (req, res) => {
    try {
      const drives = await Drives.find();
      res.json(drives[0].status);
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
  updateDriveStatus: async (req, res) => {
    const _id = "643051e1e4e0a63785a4f537";
    try {
      console.log(req.body);
      const drives = await Drives.updateOne({ _id }, req.body);
      res.json("updated success");
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
};

module.exports = driveCtrl;
