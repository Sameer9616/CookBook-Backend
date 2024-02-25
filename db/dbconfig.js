const mongoose = require("mongoose");
const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  console.error(
    "MongoDB URI is not defined. Please check your environment variables."
  );
} else {
  mongoose.connect(
    MONGODB_URI,
    { useNewUrlParser: true, useUnifiedTopology: true },
    (err) => {
      if (err) {
        console.log(err);
      } else {
        console.log("MongoDB connected successfully!");
      }
    }
  );
}
