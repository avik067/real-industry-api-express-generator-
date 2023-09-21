const mongoose = require("mongoose");
const User = require("../../Model/user");



const getOne = async (req,res) => {
    await User.findOne({}).then((data)=>{res.status(200).json(data)}).catch((e)=>{res.status(404).json({error:e})})
}

module.exports = {
    getOne
  };