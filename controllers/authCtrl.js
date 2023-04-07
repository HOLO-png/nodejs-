const authCtrl = {
  register: async (req, res) => {
    try {
      const { Led } = req.body;
      res.json(Led);
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
};

module.exports = authCtrl;
