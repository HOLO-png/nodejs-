const authCtrl = {
  register: async (req, res) => {
    try {
      console.log(req.body);
      res.json(req.body);
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
};

module.exports = authCtrl;
