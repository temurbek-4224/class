import React from "react";

const Modal = ({ subjects, student }) => {
  return (
    <div className="modal fade" id={`id${student.id}`} tabIndex="-1" aria-labelledby="allDataLabel" aria-hidden="true">
      <div className="modal-dialog ">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="allDataLabel" style={{
              color: '#333'
            }}>All Subjects</h5>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <table className='table table-sm table-dark'>
              <thead>
                <tr>
                  <th scope='col'>Subject Name</th>
                  <th scope='col'>Number of missed</th>
                </tr>
              </thead>
              <tbody>
                {subjects.map((subject, index) => (
                  <tr key={index}>
                    <td>{subject}</td>
                    <td>{student.abortedLessonsCount[subject]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Modal;