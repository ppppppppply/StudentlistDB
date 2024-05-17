const StudentModel = require('../models/StudentModel');

// ฟังก์ชันสำหรับดึงข้อมูลนักเรียนทั้งหมด
module.exports.getStudent = async (req, res) => {
  try {
    const students = await StudentModel.find();
    res.send(students);
  } catch (error) {
    console.error(error);
    res.status(500).send('An error occurred while fetching students.');
  }
};

// ฟังก์ชันสำหรับบันทึกข้อมูลนักเรียนใหม่
module.exports.saveStudent = async (req, res) => {
  const { text,gender } = req.body;
  try {
    const newStudent = await StudentModel.create({ text,gender });
    console.log("Added Student Success");
    console.log(newStudent);
    res.send(newStudent);
  } catch (error) {
    console.error(error);
    res.status(500).send('An error occurred while saving the student.');
  }
};

// ฟังก์ชันสำหรับอัปเดตข้อมูลนักเรียน
module.exports.updateStudent = async (req, res) => {
  const { _id, text ,gender } = req.body;
  try {
    const updatedStudent = await StudentModel.findByIdAndUpdate(_id, { text,gender }, { new: true });
    console.log("Updated Student Success");
    res.send(updatedStudent);
  } catch (error) {
    console.error(error);
    res.status(500).send('An error occurred while updating the student.');
  }
};

// ฟังก์ชันสำหรับลบข้อมูลนักเรียน
module.exports.deleteStudent = async (req, res) => {
  const { _id } = req.body;
  try {
    await StudentModel.findByIdAndDelete(_id);
    console.log("Deleted Student Success");
    res.send("Deleted Student Success");
  } catch (error) {
    console.error(error);
    res.status(500).send('An error occurred while deleting the student.');
  }
};
