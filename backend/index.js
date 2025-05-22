

if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const passportLocalMongoose = require("passport-local-mongoose");
const session = require("express-session");
const MongoStore = require('connect-mongo'); 

const { HoldingsModel } = require("./model/HoldingsModel");
const { PositionsModel } = require("./model/PositionsModel");
const { OrdersModel } = require("./model/OrdersModel");

const PORT = process.env.PORT || 3002;
const mongoUri = process.env.MONGO_URL;

const app = express();

const store = MongoStore.create({
  mongoUrl: mongoUri,
  crypto: {
    secret: "aldkjhfglahglakd",
  },
  touchAfter: 24 * 3600,
});

const sessionOption = {
  store,
  secret: "keyboardcat",
  resave: false,
  saveUninitialized: true,
  cookie: {
    expires: Date.now() + 10 * 24 * 60 * 60 * 1000,
    maxAge: 10 * 24 * 60 * 60 * 1000,
    httpOnly: true,
  },
};

app.use(session(sessionOption));
app.use((req, res, next) => {
  res.locals.currUser = req.user;
  next();
});

app.use(passport.initialize());
app.use(passport.session());

app.use(cors());
app.use(bodyParser.json());

mongoose
  .connect(mongoUri)
  .then(() => console.log("MongoDB connected successfully"))
  .catch((err) => console.error("MongoDB connection error:", err));

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },

  username: {
    type: String,
    required: true,
    unique: true,
  },
});

userSchema.plugin(passportLocalMongoose);

const User = mongoose.model("User", userSchema);

passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use(passport.initialize());
app.use(passport.session());

// Signup route
app.post("/signup", async (req, res) => {
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    return res
      .status(400)
      .json({ success: false, message: "All fields are required." });
  }

  try {
    const existingUser = await User.findOne({
      $or: [{ username: username }, { email: email }],
    });
    if (existingUser) {
      let errorMessage = "A user with that username or email already exists.";
      if (existingUser.username === username) {
        errorMessage = "A user with that username already exists.";
      } else if (existingUser.email === email) {
        errorMessage = "A user with that email already exists.";
      }
      return res.status(409).json({ success: false, message: errorMessage });
    }

    const newUser = new User({ email, username });

    const registeredUser = await User.register(newUser, password);

    res
      .status(201)
      .json({
        success: true,
        message: "Signup successful!",
        user: {
          id: registeredUser._id,
          username: registeredUser.username,
          email: registeredUser.email,
        },
      });
  } catch (err) {
    console.error("Signup error:", err);

    if (err.name === "UserExistsError") {
      return res
        .status(409)
        .json({
          success: false,
          message: "A user with that username already exists.",
        });
    }

    res
      .status(500)
      .json({
        success: false,
        message: "An error occurred during signup. Please try again.",
      });
  }
});

// Login route
app.post("/login", passport.authenticate("local"), (req, res) => {
  res.status(200).json({
    success: true,
    message: "Login successful!",
    user: {
      id: req.user._id,
      username: req.user.username,
      email: req.user.email,
    },
  });
});

app.get("/allHoldings", async (req, res) => {
  try {
    let allHoldings = await HoldingsModel.find({});
    res.json(allHoldings);
  } catch (err) {
    console.error("Error fetching holdings:", err);
    res.status(500).json({ message: "Error fetching holdings." });
  }
});

app.get("/allPositions", async (req, res) => {
  try {
    let allPositions = await PositionsModel.find({});
    res.json(allPositions);
  } catch (err) {
    console.error("Error fetching positions:", err);
    res.status(500).json({ message: "Error fetching positions." });
  }
});

app.post("/newOrder", async (req, res) => {
  try {
    let newOrder = new OrdersModel({
      name: req.body.name,
      qty: req.body.qty,
      price: req.body.price,
      mode: req.body.mode,
    });
    await newOrder.save();
    res
      .status(201)
      .json({
        success: true,
        message: "Order placed successfully!",
        order: newOrder,
      });
  } catch (err) {
    console.error("Error placing new order:", err);
    res.status(500).json({ message: "Error placing order." });
  }
});

app.get("/allOrder", async (req, res) => {
  try {
    let allOrder = await OrdersModel.find({});
    res.json(allOrder);
  } catch (err) {
    console.error("Error fetching orders:", err);
    res.status(500).json({ message: "Error fetching orders." });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}!`);
});