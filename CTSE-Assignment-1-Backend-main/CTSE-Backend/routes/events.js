const express = require("express");
const EventRouter = express.Router();

const {
  NewEvent,
  GetEvent,
  GetOneEvent,
  UpdateEvent,
  DeleteEvent,
} = require("../controllers/events.controller");
const multerMiddleware = require("../middleware/multer.middlewear");

EventRouter.post(
  "/addevent",
  multerMiddleware.multerUploader.single("picture"),
  NewEvent
);
EventRouter.get("/getevent", GetEvent);
EventRouter.get("/:eventID", GetOneEvent);
EventRouter.put("/update/:eventID", UpdateEvent);
EventRouter.delete("/delete/:eventID", DeleteEvent);

module.exports = EventRouter;
