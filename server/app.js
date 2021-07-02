var createError = require("http-errors");
var express = require("express");

var cookieParser = require("cookie-parser");
var logger = require("morgan");
var cors = require("cors");

const cu = require("./fetch/fetch_cu");
const gs = require("./fetch/fetch_gs");
const mini = require("./fetch/fetch_mini");
const seven = require("./fetch/fetch_seven");
const emart = require("./fetch/fetch_emart");

var app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(cors());

app.use(`/cu`, async (req, res) => {
  const cu_prod = await cu.fetch_cu();
  const prodList = {
    prod: cu_prod,
  };
  res.json(prodList);
});
app.use("/gs", async (req, res) => {
  const gs_prod = await gs.fetch_gs();
  const prodList = {
    prod: gs_prod,
  };
  res.json(prodList);
});
app.use("/mini", async (req, res) => {
  const mini_prod = await mini.fetch_mini();
  const prodList = {
    prod: mini_prod,
  };
  res.json(prodList);
});
app.use("/emart", async (req, res) => {
  const emart_prod = await emart.fetch_emart();
  const prodList = {
    prod: emart_prod,
  };
  res.json(prodList);
});
app.use("/seven", async (req, res) => {
  const seven_prod = await seven.fetch_seven();
  const prodList = {
    prod: seven_prod,
  };
  res.json(prodList);
});

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
