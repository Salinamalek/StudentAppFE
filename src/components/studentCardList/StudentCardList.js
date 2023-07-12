import { useState, useEffect } from "react";

import StudentCard from "../studentCard/StudentCard";
import SearchBar from "../searchBar/SearchBar";

import "./StudentCardList.scss";

const StudentCardList = () => {
  // set hook for student data
  const [students, setStudents] = useState([]);
  const [search, setSearch] = useState("");
  const [searchResult, setSearchResult] = useState([]);

  useEffect(() => {
    // fetch data from https://api.hatchways.io/assessment/students
    fetch("https://api.hatchways.io/assessment/students")
      .then((response) => response.json())
      .then((data) => {
        // update hook with data
        setStudents(data.students);
      });
  }, []);

  useEffect(() => {
    const filteredStudents = students.filter((student) => {
      return (
        student.firstName.toLowerCase().includes(search.toLowerCase()) ||
        student.lastName.toLowerCase().includes(search.toLowerCase())
      );
    });
    setSearchResult(filteredStudents);
  }, [search]);

  if (searchResult.length) {
    return (
      <div>
        {students.map((student) => {
          return <StudentCard student={student} />;
        })}
      </div>
    );
  }

  return (
    <div className="studentCardList">
      <SearchBar serach={search} setSearch={setSearch} />

      {/* map through data  */}
      {students.map((student) => {
        // render a student card for every student
        return <StudentCard student={student} />;
      })}
    </div>
  );
};

export default StudentCardList;
