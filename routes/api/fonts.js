const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const passport = require("passport");
//const bodyParser = require('body-parser');

// Font Model

const Font = require("../../models/Font");

// @route GET api/fonts/test
// @desc test fonts route
// @access Public
router.get("/test", (req, res) => res.json({ msg: "fonts works" }));

// @route GET api/fonts
// @desc get fonts
// @access Public
router.get(
  "/",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    Font.find()
    .then(fonts => res.json(fonts))
    .catch(err => res.status(404).json({ nofontsfound: `No fonts found` }));
  }
);

// @route POST api/fonts
// @desc create font
// @access Private

router.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {

   // const { errors, isValid } = validateFontInput(req.body);

    // if (!isValid) {
    //   return res.status(400).json(errors);
    // }

    const newFont = new Font({
      name: req.body.name,
      path: req.body.path
    });

    newFont.save().then(font => res.json(font));
    }
);

module.exports = router;