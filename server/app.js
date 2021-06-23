var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
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
app.use(express.static(path.join(__dirname, "public")));

app.use("/", async (req, res) => {
  const cu_prod = await cu.fetch_cu();
  const gs_prod = await gs.fetch_gs();
  const mini_prod = await mini.fetch_mini();
  const emart_prod = await emart.fetch_emart();
  const seven_prod = await seven.fetch_seven();
  const prodList = {
    cu: cu_prod,
    gs: gs_prod,
    mini: mini_prod,
    emart: emart_prod,
    seven: seven_prod,
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
