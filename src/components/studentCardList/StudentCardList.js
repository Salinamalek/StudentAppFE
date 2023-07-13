import { useState, useEffect } from "react";

import StudentCard from "../studentCard/StudentCard";
import SearchBar from "../searchBar/SearchBar";
import "./StudentCardList.scss";

const StudentCardList = () => {
  // set hook for student data
  const [students, setStudents] = useState([]);
  const [search, setSearch] = useState("");
  // const [searchResult, setSearchResult] = useState([]);

  useEffect(() => {
    // fetch data from https://api.hatchways.io/assessment/students
    fetch("https://api.hatchways.io/assessment/students")
      .then((response) => response.json())
      .then((data) => {
        // update hook with data
        setStudents(data.students);
      });
  }, []);

  function filterStudents(student) {
    const allStudents = search.trim().split(" ");

    function nameSearch(student) {
      const { firstName, lastName } = student;

      for (const search of allStudents) {
        const lowerCaseSearch = search.toLowerCase();
        const [firstNameLowerCase, lastNameLowerCase] = [
          firstName.toLowerCase(),
          lastName.toLowerCase(),
        ];

        if (
          firstNameLowerCase.startsWith(lowerCaseSearch) ||
          lastNameLowerCase.startsWith(lowerCaseSearch)
        )
          return student;
      }
    }
    return nameSearch(student);
  }

  return (
    <div className="studentCardList">
      {/* map through data  */}
      {/* render a student card for every student */}
      <SearchBar setSearch={setSearch} />
      {students.filter(filterStudents).map((student) => {
        return <StudentCard student={student} />;
      })}
    </div>
  );
};

export default StudentCardList;
