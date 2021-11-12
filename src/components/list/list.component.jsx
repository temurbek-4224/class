import React from "react";

const List = ({ currentGroup, handleClick, allClicked, allGroups }) => {
  return (
    <div style={{
      minWidth: '150px',
      cursor: 'pointer'
    }}>
      <ul className="list-group">
        <li
          className={`list-group-item ${!currentGroup ? 'active' : ''}`}
          onClick={() => allClicked()}
        >
          all students
        </li>
        {
          allGroups.map((group, index) => (
            <li
              className={`list-group-item ${group === currentGroup ? 'active' : ''}`}
              key={index}
              onClick={() => handleClick(group)}
            >
              {group}
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export default List;