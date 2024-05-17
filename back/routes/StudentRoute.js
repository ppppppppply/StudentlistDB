const {Router} = require("express");
const { getStudent, saveStudent ,updateStudent, deleteStudent  } = require("../controllers/StudentController");

const router = Router()

router.get('/', getStudent)
router.post('/save', saveStudent)
router.post('/update', updateStudent)
router.post('/delete', deleteStudent)

module.exports = router;