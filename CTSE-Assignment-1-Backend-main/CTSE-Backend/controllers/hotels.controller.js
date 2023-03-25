const Hotels = require("../models/hotels.models");

const NewHotel = async (req, res) => {
  try {
    const { name, description, picture, address, phone, facilities } = req.body;
    const newHotel = new Hotels({
      name,
      description,
      picture,
      address,
      phone,
      facilities,
    });
    await newHotel.save();
    res.status(200).json({
      success: true,
      message: "New Hotel Added Successfully !!",
      newHotel: newHotel,
    });
  } catch (err) {
    res.status(400).json({
      error: err,
    });
  }
};

const GetHotel = async (req, res) => {
  try {
    let hotels = await Hotels.find();
    res.status(200).json({
      success: true,
      existinghotels: hotels,
    });
  } catch (err) {
    res.status(400).json({
      error: err,
    });
  }
};

const GetOneHotel = async (req, res) => {
  try {
    let hotel = await Hotels.findById(req.params.hotelID);
    res.status(200).json({
      success: true,
      existinghotel: hotel,
    });
  } catch (err) {
    res.status(400).json({
      error: err,
    });
  }
};

const UpdateHotel = async (req, res) => {
  try {
    const hotelID = req.params.hotelID;
    const updateHotel = await Hotels.findByIdAndUpdate(hotelID, {
      $set: req.body,
    });
    res.status(200).send({ success: true, updateHotel: updateHotel });
  } catch (error) {
    res.status(500).send({ status: "Error with id", error: error.message });
  }
};

const DeleteHotel = (req, res) => {
  Hotels.findByIdAndDelete(req.params.hotelID)
    .then((hotel) => {
      res.status(200).json({
        success: true,
        message: "Hotel Deleted Successfully !!",
        hotel: hotel,
      });
    })
    .catch((err) => {
      res.status(400).json({
        error: err,
      });
    });
};

module.exports = {
  NewHotel,
  GetHotel,
  GetOneHotel,
  UpdateHotel,
  DeleteHotel,
};
