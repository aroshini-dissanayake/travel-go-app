const express = require("express");
const cors = require("cors");
const { connection } = require("./utils/connection");
const dotenv = require("dotenv");

//@import router
const SampleRouter = require("./routes/sample.route");
const UserRouter = require("./routes/user");
const PlaceRouter = require("./routes/places");
const BlogRouter = require("./routes/blogs");
const HotelRouter = require("./routes/hotels");
const EventRouter = require("./routes/events");


const app = express();
dotenv.config();
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 5000;

//use routes
app.use("/api/sample/", SampleRouter);
app.use("/api/user", UserRouter);
app.use("/api/places", PlaceRouter);
app.use("/api/blog", BlogRouter);
app.use("/api/hotels", HotelRouter);
app.use("/api/events", EventRouter);

app.listen(PORT, () => {
  console.log(`Server is up and running on port number: ${PORT}`);
  connection();
});
