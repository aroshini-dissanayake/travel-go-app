const express = require("express");
const multerMiddleware = require("../middleware/multer.middlewear");
const sampleController = require("../controllers/sample.controller");
const SampleRouter = express.Router();

SampleRouter.post(
  "/",
  multerMiddleware.multerUploader.single("picture"),
  sampleController.SampleFunc
);

module.exports = SampleRouter;
