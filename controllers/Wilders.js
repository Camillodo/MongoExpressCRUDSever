//REQUIRE
const Wilder = require("../models/Wilder")

module.exports = {

  //CREATE
  create:  async (req, res) => {

    try {
      await Wilder.init();
      const wilder = new Wilder(req.body);
      const data = await wilder.save();
      res.json({ success: true, result: data });

    } catch (err) {
      res.json({ success: false, result: err });
    }
  },

  //READ
  read : async (req, res) => {
    try {
      const data = await Wilder.find()
      res.json({ success: true, result: data})
    } catch (error) {
      res.json({ success: false, result: err})   
    }
  },

  //UPDATE
  update: async (req, res) => {
    try {
      const data = await Wilder.updateOne({_id: req.body._id}, req.body)
    } catch (error) {
      res.json({ success: false, result:err})
    }
    },
    
    //DELETE
    delete:  async (req, res) => {
      try {
        const data = await Wilder.deleteOne({ _id: req.body._id});
        res.json({ success: true, result: data })
      } catch (err) {
        res.json({ success: false, result:err})
      }
}
};