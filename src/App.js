import "./styles.css";
import { useState } from "react";

export default function App() {
  let [title, setTitle] = useState("To prepare for Exam");
  let [desc, setDesc] = useState(
    "To ensure this task completeed o should be waking and scheduling my preparetimings exactly to my times in the way i could be not worryiing to delay any practic"
  );
  let [date, setDate] = useState("22-09-2024");
  function submit(i) {
    setTitle();
  }
  return (
    <div className="App">
      <div className="formm">
        <h1 className="heading">Personal Taskmanager</h1>
        <div className="form">
          <div className="box">
            <label for="ti">Title :</label>
            <input
              type="text"
              name="ti"
              placeholder="enter the title"
              className="inp"
            />
          </div>
          <div className="box">
            <label for="ds">Description :</label>
            <input
              type="text"
              name="ds"
              placeholder="type description"
              className="inp"
            />
          </div>
          <div className="box">
            <label for="dd">Due Date :</label>
            <input
              type="date"
              name="dd"
              placeholder="enter the date"
              className="inp"
            />
          </div>
          <div className="button">
            <button type="submit" onClick={submit} className="btn">
              Submit
            </button>
          </div>
        </div>
        <div className="boxx">
          <div className="view">
            <h1 className="head2">TaskView</h1>
            <ul>
              <li>{title}</li>
              <li>{desc}</li>
              <li>{date}</li>
              <span className="ed">Edit</span>
              <span className="del">Delete</span>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
