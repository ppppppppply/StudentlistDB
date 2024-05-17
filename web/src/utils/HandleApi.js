import axios from "axios";

const baseUrl = "http://localhost:5000";

// Function to GET all ToDo items
const GET = (setToDo) => {
  axios
    .get(baseUrl)
    .then(({ data }) => {
      console.log("data ---> ", data);
      setToDo(data);
    })
    .catch((err) => console.log(err));
};

// Function to POST a new ToDo item
const POST = (text, gender, setText, setGender, setToDo) => {
  axios
    .post(`${baseUrl}/save`, { text,gender })
    .then(({ data }) => {
      console.log(data);
      setText("");
      setGender("");
      GET(setToDo);
    })
    .catch((err) => console.log(err));
};

// Function to PUT (update) a ToDo item
const PUT = (toDoId, text, gender, setToDo, setText, setGender, setIsUpdating) => {
  axios
    .post(`${baseUrl}/update`, { _id: toDoId, text,gender })
    .then(({ data }) => {
      setText("");
      setGender("");
      setIsUpdating(false);
      GET(setToDo);
    })
    .catch((err) => console.log(err));
};

// Function to DELETE a ToDo item
const DELETE = (_id, setToDo) => {
  axios
    .post(`${baseUrl}/delete`, { _id })
    .then(({ data }) => {
      console.log(data);
      GET(setToDo);
    })
    .catch((err) => console.log(err));
};

export { GET, POST, PUT, DELETE };

