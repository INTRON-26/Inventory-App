const exp =  require('express');
const router = exp.Router();

const { registerUser, loginUser, logout, getUser, loginStatus, updateUser, changePassword, forgotPassword } = require("../controllers/userController");
const { protect } = require("../middlewares/authMiddleware");

router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/logout', logout);
router.get('/getuser', protect, getUser);
router.get('/loggedin', loginStatus);
router.patch("/updateuser", protect, updateUser);
router.patch("/changepassword",protect,changePassword);
router.post('/forgotpassword', forgotPassword);

module.exports = router;