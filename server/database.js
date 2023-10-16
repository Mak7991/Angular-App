const mongoose = require("mongoose");

require("dotenv").config();

const connectToMongo = async () => {
  try {
    mongoose.set("strictQuery", false);
    mongoose.connect(process.env.MONGOURI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      // useCreateIndex: true,
    });
    console.log("Mongo connected");
  } catch (error) {
    console.log(error, "error");
    process.exit();
  }
};

module.exports = connectToMongo;
