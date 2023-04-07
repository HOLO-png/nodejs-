const Drives = require("../models/driveModel");

const driveCtrl = {
  getLeg: async (req, res) => {
    try {
      const drives = await Drives.find();
      res.json(drives[0].status);
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
  createDrive: async (req, res) => {
    try {
      const drives = await Drives.insert({ req });
      res.json(drives[0].status);
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
};

module.exports = driveCtrl;
