var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var helmet = require("helmet");
var passport = require("passport");
require("./auth/auth");
require("./database/config")

var userRouter = require("./routers/user.router");
var shelterRouter = require("./routers/shelter.router");
var serviceRouter = require("./routers/service.router");
var productRouter = require("./routers/product.router");
var toadoptRouter = require("./routers/toadopt.router");
var petRouter = require("./routers/pet.router");
var authRouter = require("./routers/auth.router");
var errorHandler = require("./middleware/errorHandler");

const { authadmin } = require("./auth/auth");

var app = express();

app.use(logger("dev"));
app.use(helmet());
app.use(express.json());
app.use('/uploads',express.static('uploads'));
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use(authRouter);
app.use(passport.authenticate("jwt", { session: false }))
app.use("/user", userRouter);
app.use("/shelter", shelterRouter);
app.use("/service", serviceRouter);
app.use("/product", productRouter);
app.use("/toadopt", toadoptRouter);
app.use("/pet", petRouter);
app.use(errorHandler);

module.exports = app;