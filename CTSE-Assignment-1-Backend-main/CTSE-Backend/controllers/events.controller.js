const Events = require("../models/events.models");
const firebaseService = require("../firebase/firebase.service");
const firebaseUtils = require("../firebase/firebse.util");

const NewEvent = async (req, res) => {
  const file = req.file;
  const imageName = `Image_${Date.now()}`;
  const url = firebaseUtils.generateFirebaseStorageURL(imageName);

  await firebaseService.uploadToFirebase(file, imageName);

  const { type, event_name, description, location, date, ticket_price } =
    req.body;
  const createdEvent = new Events({
    type,
    event_name,
    description,
    location,
    date,
    ticket_price,
    picture: url,
  });
  try {
    await createdEvent.save();
    res.status(200).json({
      success: true,
      message: "Event Added Successfully !!",
      event: createdEvent,
    });
  } catch (err) {
    res.status(400).json({
      error: err,
    });
  }
};

const GetEvent = async (req, res) => {
  try {
    const Event = await Events.find();
    res.status(200).json({
      success: true,
      Event: Event,
    });
  } catch (err) {
    res.status(400).json({
      error: err,
    });
  }
};

const GetOneEvent = async (req, res) => {
  try {
    const eventID = req.params.eventID;
    const Event = await Events.findById(eventID);
    res.status(200).json({
      success: true,
      Event: Event,
    });
  } catch (err) {
    res.status(400).json({
      error: err,
    });
  }
};

const UpdateEvent = async (req, res) => {
  try {
    const eventID = req.params.eventID;
    const updateEvent = await Events.findByIdAndUpdate(eventID, {
      $set: req.body,
    });
    res.status(200).send({ success: true, updateEvent: updateEvent });
  } catch (error) {
    res.status(500).send({ status: "Error with id", error: error.message });
  }
};

const DeleteEvent = (req, res) => {
  Events.findByIdAndDelete(req.params.eventID)
    .then((Event) => {
      res.status(200).json({
        success: true,
        message: "Event Deleted Successfully !!",
        Event: Event,
      });
    })
    .catch((err) => {
      res.status(400).json({
        error: err,
      });
    });
};

module.exports = {
  NewEvent,
  GetEvent,
  GetOneEvent,
  UpdateEvent,
  DeleteEvent,
};
