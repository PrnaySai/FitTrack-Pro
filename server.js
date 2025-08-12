// Dependencies
const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

// MongoDB connection
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/FSD-Project",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true, // Add this to avoid deprecation warnings
  }
);

// Routes
require("./routes/fitness-routes")(app);
require("./routes/api-routes")(app);

// Start the server
app.listen(PORT, () => {
  console.log(`🚀 Server is running at: http://localhost:${PORT}`);
});
