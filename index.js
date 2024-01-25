const express = require("express");
const cors = require("cors");

const config = require("./src/configs/index");
const ApiError = require("./src/api-error");
const adminsRouter = require("./src/routes/admin.route");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/admin", adminsRouter);

app.get('/',(req, res) => {
  res.json("home")
});

app.use((req, res, next) => {
  return next(new ApiError(404, "Resource not found"));
});
app.use((err, req, res, next) => {
  return res.status(err.statusCode || 500).json({
    message: err.message || "Internal Server Error",
  });
});

config.db.connect();
console.log("Connected to the database!");

const PORT = config.app.port;
app.listen(PORT, () => {
  console.log(`Ứng dụng đang chạy trên cổng ${PORT} http://localhost:${PORT}
    .. http://localhost:${PORT}/api/admin
  `);
});