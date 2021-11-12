import React, { useState } from "react";
import { addStudent, getAllGroups } from "../../assets/students.data";
import CustomInput from "../../components/customInput/customInput.component";
const initalState = {
  fullName: '',
  group: '',
  abortedLessonsCount: {
    math: 0,
    physics: 0,
    english: 0,
    russian: 0,
    biology: 0
  }
}
const AddStudentPage = () => {
  const [inputValues, setInputValues] = useState(initalState);

  const groups = getAllGroups();

  const handleChange = e => {
    const { name, value } = e.target;
    const newInputValues = { ...inputValues };

    newInputValues[name] = value;

    setInputValues(newInputValues);
  }

  const handleLessonsChange = e => {
    const { name, value } = e.target;
    const newInputValues = { ...inputValues };

    newInputValues.abortedLessonsCount[name] = value;

    setInputValues(newInputValues);
  }

  const handleSubmit = e => {
    e.preventDefault();

    addStudent(inputValues);



    setInputValues(initalState);
  }

  return (
    <div style={{
      padding: '10px 16px',
      display: 'flex',
      flexDirection: 'column',
      maxWidth: '100vw',
      minHeight: '100vh',
      alignItems: 'center'
    }}>
      <h4 style={{
        textAlign: 'center'
      }}>Add Student To your DataBase</h4>
      <form onSubmit={handleSubmit} style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
        maxWidth: '450px'
      }}>
        <CustomInput
          label='Full Name'
          placeHolder='Full Name'
          type='text'
          name='fullName'
          onChange={handleChange}
          value={inputValues.fullName}
        />

        <select className="custom-select mt-3" name='group' onChange={(e) => handleChange(e)}>
          <option defaultValue>Select the Group</option>
          {
            groups.map((group, index) => {
              return (
                <option value={group} key={index}>{group}</option>
              )
            })
          }
        </select>

        {Object.keys(inputValues.abortedLessonsCount).map((name) => (
          <CustomInput
            key={name}
            label={`Enter number of missed ${name} lesson!`}
            placeHolder={name}
            type='number'
            name={name}
            onChange={handleLessonsChange}
            value={inputValues.abortedLessonsCount[name]}
          />
        ))}



        <button className='btn btn-primary mt-3' type='submit' style={{
          padding: '8px 45px'
        }}>Save</button>
      </form>
    </div>
  )
}

export default AddStudentPage;