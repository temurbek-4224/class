import React, { useState } from "react";
import CustomInput from "../../components/customInput/customInput.component";

const SignInPage = ({ history }) => {

  const [inputValues, setInputValues] = useState({
    email: '',
    password: ''
  });

  const handleChange = e => {
    const { name, value } = e.target;

    const newInputValues = { ...inputValues };

    newInputValues[name] = value;

    setInputValues(newInputValues);
  }

  const handleSubmit = e => {
    e.preventDefault();

    setInputValues({
      email: '',
      password: ''
    });

    history.push('/allStudents')
    // console.log(history)

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
      <h2 style={{
        textAlign: 'center'
      }}>Sign In width Email and PassWord</h2>
      <form onSubmit={handleSubmit} style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
        maxWidth: '450px'
      }}>
        <CustomInput
          placeHolder='Enter your Email'
          label='Email'
          name='email'
          type='email'
          value={inputValues.email}
          onChange={handleChange}
        />
        <CustomInput
          placeHolder='Enter your password'
          label='Password'
          name='password'
          type='password'
          value={inputValues.password}
          onChange={handleChange}
        />

        <button className='btn btn-primary mt-3' type='submit' style={{
          padding: '8px 45px'
        }}>Log In</button>
      </form>
    </div>
  );
}

export default SignInPage;