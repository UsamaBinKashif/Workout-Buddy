const router = require("express").Router();
const {
  handleGetAllDocs,
  handleGetSingleDoc,
  handleAddDoc,
  handleDeleteDoc,
  handleUpdateDoc
} = require("../controller/workout");



//All Documents
router.get("/", handleGetAllDocs);

//Single Document
router.get("/:id", handleGetSingleDoc);

//Add Document
router.post("/", handleAddDoc);

//Delete Document
router.delete("/:id", handleDeleteDoc);

//Update Document
router.patch("/:id",handleUpdateDoc);

module.exports = router;
