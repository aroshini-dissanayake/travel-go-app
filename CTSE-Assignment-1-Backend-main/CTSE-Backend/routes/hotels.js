const express = require("express");
const HotelRouter = express.Router();

const {
  NewHotel,
  GetHotel,
  GetOneHotel,
  UpdateHotel,
  DeleteHotel,
} = require("../controllers/hotels.controller");
const multerMiddleware = require("../middleware/multer.middlewear");

HotelRouter.post(
  "/addhotel",
  multerMiddleware.multerUploader.single("picture"),
  NewHotel
);
HotelRouter.get("/gethotel", GetHotel);
HotelRouter.get("/:hotelID", GetOneHotel);
HotelRouter.put("/update/:hotelID", UpdateHotel);
HotelRouter.delete("/delete/:hotelID", DeleteHotel);

module.exports = HotelRouter;
