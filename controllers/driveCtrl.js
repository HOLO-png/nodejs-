const Drives = require("../models/driveModel");

const driveCtrl = {
  getLeg: async (req, res) => {
    try {
      const drives = await Drives.find();
      res.json({ drives });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
};

module.exports = driveCtrl;
