const StudentList = ({ text, gender, updateStudent, deleteStudent }) => {
  return (
    <div className={gender}>
      <div className="text">{text}</div>
      <div className="">เพศ:{gender}</div>
      <div className="icon">
        <div className="icon-edit" onClick={updateStudent}>
          Edit
        </div>
        <div className="icon-delete" onClick={deleteStudent}>
          Delete
        </div>
      </div>
    </div>
  );
};

export default StudentList;
