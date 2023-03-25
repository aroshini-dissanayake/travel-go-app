const express = require("express");
const PlaceRouter = express.Router();

const {
  NewPlace,
  GetPlace,
  GetOnePlace,
  UpdatePlace,
  DeletePlace,
} = require("../controllers/places.controller");
const multerMiddleware = require("../middleware/multer.middlewear");

PlaceRouter.post(
  "/addplace",
  multerMiddleware.multerUploader.single("picture"),
  NewPlace
);
PlaceRouter.get("/getplace", GetPlace);
PlaceRouter.get("/:placeID", GetOnePlace);
PlaceRouter.put("/update/:placeID", UpdatePlace);
PlaceRouter.delete("/delete/:placeID", DeletePlace);

module.exports = PlaceRouter;
