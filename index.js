const express = require("express");
const mongoose = require("mongoose");
const Product = require("./models/product.model");
const productRouter = require("./routes/prouduct.route");
const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use("/api/v1/products", productRouter);

mongoose
  .connect(
    "mongodb+srv://oteriprince01:oS6V3G24ZXHzUwNY@cluster0.sx1qihi.mongodb.net/Node-API?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => {
    console.log("Connected to Database");
    app.listen(PORT, console.log(`server running on PORT ${PORT}`));
  })
  .catch(() => {
    console.log("Connection failed");
  });
