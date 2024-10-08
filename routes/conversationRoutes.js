const {
  addMessageUser,
  getConversation,
  createConversation,
  getAllConversations,
} = require("../controllers/conversationController");
const { protect } = require("../middleware/protect");

const router = require("express").Router();

router.use(protect);

router.route("/").get(getAllConversations).post(createConversation);
router.route("/:id").get(getConversation);

module.exports = router;
