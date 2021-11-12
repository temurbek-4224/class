import React from "react";
import Modal from "../modal/modal.component";

const StudentsTable = ({ allStudents }) => {
  return (
    <table className='table table-dark table-bordered' style={{
      maxWidth: '600px',
      fontSize: '14px',
    }}>
      <thead>
        <tr>
          <th scope='col'>id</th>
          <th scope='col'>Full Name</th>
          <th scope='col'>Group</th>
          <th scope='col'>Number of missed classes</th>
        </tr>
      </thead>
      <tbody>
        {
          allStudents.map(student => {
            let count = 0;
            let subjects = [];
            for (let key in student.abortedLessonsCount) {
              count += parseInt(student.abortedLessonsCount[key]);
              subjects.push(key)
            }
            return (
              <tr key={student.id}>
                <td>{student.id}</td>
                <td>{student.fullName}</td>
                <td>{student.group}</td>
                <td
                  style={{
                    display: 'flex',
                    justifyContent: 'space-around',
                    alignItems: 'center'
                  }}
                >
                  <span>{count}</span>
                  <button
                    className='btn btn-sm btn-link'
                    data-toggle="modal"
                    data-target={`#id${student.id}`}
                  >
                    View All
                  </button>
                  <Modal
                    subjects={subjects}
                    student={student}
                  />
                </td>
              </tr>
            )
          })
        }
      </tbody>
    </table>
  )
}

export default StudentsTable;