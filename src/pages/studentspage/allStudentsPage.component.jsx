import React, { useState } from "react";
import { getAllGroups, getAllStudents } from "../../assets/students.data";
import List from "../../components/list/list.component";
import StudentsTable from "../../components/table/table.component";

const AllStudentsPage = () => {
  const allStudents = getAllStudents();
  const allGroups = getAllGroups();

  const [currentGroup, setCurrentGroup] = useState('');
  const [sortedStudents, setSortedStudents] = useState(allStudents);

  const handleSort = (group) => {
    const sortedStudents = [...allStudents].filter(student => {
      return group === student.group;
    })

    setSortedStudents(sortedStudents);
  }

  const handleClick = (group) => {
    setCurrentGroup(group);
    handleSort(group);
  }

  const allClicked = () => {
    setCurrentGroup('');
    setSortedStudents(allStudents);
  }

  return (
    <div>
      <h4 style={{
        textAlign: 'center'
      }}>There Are <span>{sortedStudents.length}</span> Students In the DataBase</h4>

      <div style={{
        display: 'flex',
        padding: '20px 50px',
        justifyContent: 'space-around'
      }}>
        <List
          allClicked={allClicked}
          handleClick={handleClick}
          allGroups={allGroups}
          currentGroup={currentGroup}
        />
        <StudentsTable
          allStudents={sortedStudents}
        />
      </div>
    </div>
  )
}

export default AllStudentsPage;