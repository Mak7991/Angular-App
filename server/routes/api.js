const express = require("express");
const router = express.Router();
const User = require("../model/user");
const jwt = require("jsonwebtoken");
const bcrypt = require('bcrypt')

function verifyToken(req, res, next) {
  console.log(req.headers.Authorization);
  if (!req.headers.Authorization) {
    return res.status(401).send("UnAuthorized Request");
  }
  let token = req.headers.Authorization.split(" ")[2];
  if (token === null) {
    return res.status(401).send("UnAuthorized Request");
  }
  let payload = jwt.verify(token, "secretKey");
  if (!payload) {
    return res.status(401).send("UnAuthorized Request");
  }
  req.userId = payload.subject;
  next();
}

router.get("/", (req, res) => {
  res.send("Router is working fine");
});

router.post("/register", async (req, res) => {
  console.log("req", req.body);
  try {
    const saltRounds = parseInt(process.env.SALT, 10);
    const userData = {
      email: req.body.email,
      password: await bcrypt.hash(req.body.password, saltRounds)
    };
    const user = new User(userData);
    const registeredUser = await user.save();

    const payload = { subject: registeredUser._id };
    const token = jwt.sign(payload, "secretKey");
    res.status(200).send({ token });


  } catch (error) {
    console.log(error);
    res.status(500).send("An error occurred");
  }
});

router.post("/login", async (req, res) => {
  try {
    const userData = req.body;
    const user = await User.findOne({ email: userData.email });
    const isMatch = await bcrypt.compare(userData.password, user.password);

    if (!user.email) {
      res.status(401).send("Invalid email");
    } else if (!isMatch) {
      res.status(401).send("Invalid password");
    } else {
      const payload = { subject: user._id };
      const token = jwt.sign(payload, "secretKey");
      res.status(200).send({ token });
    }
  } catch (error) {
    console.log(error);
    res.status(500).send("An error occurred");
  }
});

router.get("/house-listings", verifyToken, (req, res) => {
  let houseListings = [
    {
      id: 0,
      name: "Acme Fresh Start Housing",
      city: "Chicago",
      state: "IL",
      photo: "/bernard-hermant-CLKGGwIBTaY-unsplash.jpg",
      availableUnits: 4,
      wifi: true,
      laundry: true,
    },
    {
      id: 1,
      name: "A113 Transitional Housing",
      city: "Santa Monica",
      state: "CA",
      photo: "/brandon-griggs-wR11KBaB86U-unsplash.jpg",
      availableUnits: 0,
      wifi: false,
      laundry: true,
    },
    {
      id: 2,
      name: "Warm Beds Housing Support",
      city: "Juneau",
      state: "AK",
      photo: "/i-do-nothing-but-love-lAyXdl1-Wmc-unsplash.jpg",
      availableUnits: 1,
      wifi: false,
      laundry: false,
    },
    {
      id: 3,
      name: "Homesteady Housing",
      city: "Chicago",
      state: "IL",
      photo: "/ian-macdonald-W8z6aiwfi1E-unsplash.jpg",
      availableUnits: 1,
      wifi: true,
      laundry: false,
    },
    {
      id: 4,
      name: "Happy Homes Group",
      city: "Gary",
      state: "IN",
      photo: "/krzysztof-hepner-978RAXoXnH4-unsplash.jpg",
      availableUnits: 1,
      wifi: true,
      laundry: false,
    },
    {
      id: 5,
      name: "Hopeful Apartment Group",
      city: "Oakland",
      state: "CA",
      photo: "/r-architecture-JvQ0Q5IkeMM-unsplash.jpg",
      availableUnits: 2,
      wifi: true,
      laundry: true,
    },
    {
      id: 6,
      name: "Seriously Safe Towns",
      city: "Oakland",
      state: "CA",
      photo: "/phil-hearing-IYfp2Ixe9nM-unsplash.jpg",
      availableUnits: 5,
      wifi: true,
      laundry: true,
    },
    {
      id: 7,
      name: "Hopeful Housing Solutions",
      city: "Oakland",
      state: "CA",
      photo: "/r-architecture-GGupkreKwxA-unsplash.jpg",
      availableUnits: 2,
      wifi: true,
      laundry: true,
    },
    {
      id: 8,
      name: "Seriously Safe Towns",
      city: "Oakland",
      state: "CA",
      photo: "/saru-robert-9rP3mxf8qWI-unsplash.jpg",
      availableUnits: 10,
      wifi: false,
      laundry: false,
    },
    {
      id: 9,
      name: "Capital Safe Towns",
      city: "Portland",
      state: "OR",
      photo: "/webaliser-_TPTXZd9mOo-unsplash.jpg",
      availableUnits: 6,
      wifi: true,
      laundry: true,
    },
  ];
  res.json(houseListings);
});

module.exports = router;
