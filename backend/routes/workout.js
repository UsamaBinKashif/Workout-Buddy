const router = require("express").Router();
const {
  handleGetAllDocs,
  handleGetSingleDoc,
  handleAddDoc,
} = require("../controller/workout");



//All Documents
router.get("/", handleGetAllDocs);

//Single Document
router.get("/:id", handleGetSingleDoc);

//Add Document
router.post("/", handleAddDoc);

//Delete Document
router.delete("/:id", (req, res) => {
  res.status(200).json("Deleted Workout");
});

//Update Document
router.patch("/:id", (req, res) => {
  res.status(200).json("Updated Workout");
});

module.exports = router;
