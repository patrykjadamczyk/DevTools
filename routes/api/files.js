const express = require("express");
const router = express.Router();
const passport = require("passport");
const multer = require("multer");
const bodyParser = require("body-parser");

let storage = multer.diskStorage({
  destination: function(req,file,cb){

    // console.group('disk storage');
    // console.log(req.body.dest);
    // console.groupEnd();

    cb(null,req.body.dest)
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
    "/uploadfile",
    passport.authenticate("jwt", { session: false }),
    (req, res) => {
      //  const file = res.getAll('file');
      // console.group('plik');
      //    console.log(file);
      // console.groupEnd();
       upload(req,res,(err)=>{
           console.log(req.params.destination);
        if(err){
          return res.status(404).json({msg: false})
        }
        return res.json({msg: "file upload"})
       })
    }
  );

  module.exports = router;