import "./App.css";
import { useState } from "react";
import Navbar from "./components/Navbar";
import TableHeader from "./components/TableHeader";
import StudentCard from "./components/StudentCard";

import studentsData from "./assets/students.json";

function App() {
  const [students, setStudents] = useState(studentsData);

  const [fullName, setFullName] = useState(" ");
  const [image, setImage] = useState(" ");
  const [phone, setPhone] = useState(" ");
  const [email, setEmail] = useState(" ");
  const [program, setProgram] = useState(" ");
  const [graduationYear, setGraduationYear] = useState(2023);
  const [graduated, setGraduated] = useState(" ");

  let submit = (e) => {
    e.preventDefault();
    let newStudent = {
      fullName: fullName,
      email: email,
      phone: phone,
      program: program,
      image: image,
      graduationYear: graduationYear,
      graduated: graduated,
    };
    setStudents([newStudent, ...students]);
  };
  return (
    <div className="App pt-20">
      <Navbar />

      {/* FORM */}
      <form onSubmit={submit}>
        <span>Add a Student</span>
        <div>
          <label>
            Full Name
            <input
              onChange={(element) => {
                setFullName(element.target.value);
              }}
              name="fullName"
              type="text"
              placeholder="Full Name"
              value={fullName}
            />
          </label>

          <label>
            Profile Image
            <input
              name="image"
              type="url"
              placeholder="Profile Image"
              onChange={(element) => {
                setImage(element.target.value);
              }}
              value={image}
            />
          </label>

          <label>
            Phone
            <input
              name="phone"
              type="tel"
              placeholder="Phone"
              onChange={(element) => {
                setPhone(element.target.value);
              }}
              value={phone}
            />
          </label>

          <label>
            Email
            <input
              name="email"
              type="email"
              placeholder="Email"
              onChange={(element) => {
                setEmail(element.target.value);
              }}
              value={email}
            />
          </label>
        </div>

        <div>
          <label>
            Program
            <select
              name="program"
              onChange={(element) => {
                setProgram(element.target.value);
              }}
              value={program}
            >
              <option value="">-- None --</option>
              <option value="Web Dev">Web Dev</option>
              <option value="UXUI">UXUI</option>
              <option value="Data">Data</option>
            </select>
          </label>

          <label>
            Graduation Year
            <input
              onChange={(element) => {
                setGraduationYear(element.target.value);
              }}
              name="graduationYear"
              type="number"
              placeholder="Graduation Year"
              minLength={4}
              maxLength={4}
              min={2023}
              max={2030}
            />
          </label>

          <label>
            Graduated
            <input
              name="graduated"
              type="checkbox"
              onChange={(element) => {
                setGraduated(element.target.checked);
              }}
              value={graduated}
            />
          </label>

          <button type="submit">Add Student</button>
        </div>
      </form>
      {/* FORM END */}

      {/* TABLE/LIST HEADER */}
      <TableHeader />

      {/* STUDENT LIST */}
      {students &&
        students.map((student) => {
          return <StudentCard key={student.email} {...student} />;
        })}
    </div>
  );
}

export default App;
