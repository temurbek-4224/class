import React from "react";

const UpsentStudentsPage = ({ match }) => {
  return (
    <div>
      This is the {match.params.subject}
    </div>
  )
}

export default UpsentStudentsPage;