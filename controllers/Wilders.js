//REQUIRE
const Wilder = require("../models/Wilder")

module.exports = {

  //CREATE
  create: (req, res) => {
      const wilder = new Wilder(req.body);
      wilder
        .save()
        .then((data) => {
          res.json({
            success: true,
            result: data
          });
        })
        .catch((err) => {
          res.json({
            success: false,
            result: err
          });
        });
  },

  //READ
  read : (req, res) => {
    Wilder.find()
    .then(data => {
      res.json({ success: true, result: data})
    })
    .catch(err => {
        res.json({ success: false, result: err})
    })
  },

  //UPDATE
  update: (req, res) => {
    Wilder.updateOne({_id: req.body._id}, req.body)
    .then(data => {
      res.json(data)
    })
      .catch(err => {
          res.json({ success: false, result: err})
      })
    },
    
    //DELETE
    delete: (req, res) => {
      Wilder.deleteOne({ _id: req.body._id})
      .then(data => {
        res.json({ success: true, result: data })
      })
      .catch(err => res.json({success: false, result: err}))
  }

};