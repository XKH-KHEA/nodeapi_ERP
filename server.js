const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const userRoutes = require("./routes/userRoutes");
const itemRoutes = require("./routes/itemRoutes"); // Import item routes
const customers = require("./routes/customerRoutes");
const saleQuotes = require("./routes/saleQuoteRoutes");
const saleOrders = require("./routes/saleOrderRoutes");
const salesInvoices = require("./routes/salesInvoiceRoutes");

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());

// Routes
app.use("/api/users", userRoutes);
app.use("/api/items", itemRoutes);
app.use("/api/customers", customers);
app.use("/api/salequotes", saleQuotes);
app.use("/api/saleorders", saleOrders);
app.use("/api/saleinvoices", salesInvoices);
// MongoDB Connection
mongoose
  .connect(
    "mongodb+srv://onkhea168:Ok391291@cluster0.s6sa1b5.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log("Connected to MongoDB Atlas");
  })
  .catch((err) => {
    console.error("Failed to connect to MongoDB Atlas", err);
  });

// Start Server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
