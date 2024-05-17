import { useEffect, useState } from "react";
import StudentList from "./components/StudentList";
import { GET, POST, PUT, DELETE } from "./utils/HandleApi";

function App() {
  const [text, setText] = useState("");
  const [gender, setGender] = useState("male");
  const [Student, setStudent] = useState([]);
  const [Update, setUpdate] = useState(false);
  const [StudentId, setStudentId] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    GET(setStudent);
    setGender("male");
  }, []);

  const updateStudent = (_id, text) => {
    setUpdate(true);
    setText(text);
    setStudentId(_id);
  };

  const handleSubmit = () => {
    if (text === "" || gender === "") {
      setError("กรุณากรอกข้อมูลให้ครบถ้วน");
      return;
    }

    if (Update) {
      PUT(StudentId, text, gender, setStudent, setText, setGender, setUpdate);
    } else {
      POST(text, gender, setText, setGender, setStudent);
    }
    setError("");
  };

  return (
    <div className="App">
      <section className="container">
        <h1>Student Management</h1>
        <div className="Top">
          <input
            type="text"
            placeholder="เพิ่มชื่อ"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <select value={gender} onChange={(e) => setGender(e.target.value)}>
            <option value="male">male</option>
            <option value="female">female</option>
          </select>

          <div className={Update ? "edit" : "add"} onClick={handleSubmit}>
            {Update ? "แก้ไข" : "เพิ่ม"}
          </div>
        </div>
        {error && <p style={{ color: "red" }}>{error}</p>}
        <div className="list">
          {Student.map((item) => (
            <StudentList
              key={item._id}
              text={item.text}
              gender={item.gender}
              updateStudent={() => updateStudent(item._id, item.text)}
              deleteStudent={() => DELETE(item._id, setStudent)}
            />
          ))}
        </div>
      </section>
    </div>
  );
}

export default App;

