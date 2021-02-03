const express = require("express");
const router = express.Router();

// const verify = require("./routes/verifyToken");

router.get(
  "/",
  /*verify*/
  (req, res) => {
    res.send({ response: "JTCC home server is up and running." }).status(200);
  }
);

module.exports = router;
