const express = require("express");
const router = express.Router();
const passport = require("passport");
const multer = require("multer");
// const body = require("body-parser");

let storage = multer.diskStorage({
  destination: function(req,file,cb){

    console.group('disk storage');
    console.log(req.body);
    console.groupEnd();

    cb(null,'uploads')
  },
  filename: function(req,file,cb){
    cb(null, file.fieldname + '-' + Date.now() + file.originalname)
  }
})

const upload = multer({storage:storage}).single('file');

// @route GET api/files/test
// @desc test file route
// @access Public
router.get("/test", (req, res) => res.json({ msg: "file works" }));

// @route POST api/files/uploadfile/:destination
// @desc upload file
// @access Private

router.post(
    "/uploadfile/:destination",
    passport.authenticate("jwt", { session: false }),
    (req, res) => {
       upload(req,res,(err)=>{
           console.log(req.params.destination);
          //  const file = res.getAll('file');
          // console.group('plik');
          //    console.log(file);
          // console.groupEnd();
        if(err){
          return res.status(404).json({msg: false})
        }
        return res.json({msg: "file upload"})
       })
    }
  );

  module.exports = router;