const mongoose = require("mongoose");

const databaseConnection = mongoose.connect(
  "mongodb+srv://admin:password@cluster0.ulzxi.mongodb.net/databaseName?retryWrites=true&w=majority",
  { useNewUrlParser: true }
);

mongoose.connection
  .once("open", () => {
    console.log("connected...");
  })
  .on("error", (err) => {
    console.log("Error==>", err);
  });

module.exports = databaseConnection;
