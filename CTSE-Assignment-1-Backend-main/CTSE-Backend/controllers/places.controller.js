const Places = require("../models/places.models");
const firebaseService = require("../firebase/firebase.service");
const firebaseUtils = require("../firebase/firebse.util");

const NewPlace = async (req, res) => {
  const file = req.file;
  console.log(file);
  const imageName = `Image_${Date.now()}`;
  const url = firebaseUtils.generateFirebaseStorageURL(imageName);

  await firebaseService.uploadToFirebase(file, imageName);

  const { type, name, description, city, facilities } = req.body;
  const createdPlace = new Places({
    type,
    name,
    description,
    city,
    facilities,
    picture: url,
  });
  try {
    await createdPlace.save();
    res.status(200).json({
      success: true,
      message: "Place Added Successfully !!",
      place: createdPlace,
    });
  } catch (err) {
    res.status(400).json({
      error: err,
    });
  }
};

const GetPlace = async (req, res) => {
  try {
    let Place = await Places.find();
    res.status(200).json({
      success: true,
      Place: Place,
    });
  } catch (err) {
    res.status(400).json({
      error: err,
    });
  }
};

const GetOnePlace = async (req, res) => {
  try {
    let place = await Places.findById(req.params.placeID);
    res.status(200).json({
      success: true,
      existingplace: place,
    });
  } catch (err) {
    res.status(400).json({
      error: err,
    });
  }
};

const UpdatePlace = async (req, res) => {
  try {
    const placeID = req.params.placeID;
    const updatePlace = await Places.findByIdAndUpdate(placeID, {
      $set: req.body,
    });
    res.status(200).send({ success: true, updatePlace: updatePlace });
  } catch (error) {
    res.status(500).send({ status: "Error with id", error: error.message });
  }
};

const DeletePlace = (req, res) => {
  Places.findByIdAndDelete(req.params.placeID)
    .then((place) => {
      res.status(200).json({
        success: true,
        message: "Place Deleted Successfully !!",
        place: place,
      });
    })
    .catch((err) => {
      res.status(400).json({
        error: err,
      });
    });
};

module.exports = {
  NewPlace,
  GetPlace,
  GetOnePlace,
  UpdatePlace,
  DeletePlace,
};
