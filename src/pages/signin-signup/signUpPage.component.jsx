import React, { useState } from "react";
import CustomInput from "../../components/customInput/customInput.component";

const SignUpPage = ({ history }) => {

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
      firstName: '',
      lastName: '',
      email: '',
      password: ''
    });

    history.push('/signin')
    // console.log(history)

  }

  return (
    <div style={{
      padding: '10px 16px',
      display: 'flex',
      flexDirection: 'column',
      maxWidth: '100vw',
      minHeight: '100vh',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <h2 style={{
        textAlign: 'center'
      }}>Sign Up Please</h2>
      <form onSubmit={handleSubmit} style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
        maxWidth: '450px'
      }}>
        <CustomInput
          placeHolder='Enter your firstname'
          label='firstName'
          name='firstName'
          type='text'
          value={inputValues.firstName}
          onChange={handleChange}
        />
        <CustomInput
          placeHolder='Enter your lastName'
          label='lastName'
          name='lastName'
          type='text'
          value={inputValues.lastName}
          onChange={handleChange}
        />
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
  )
}

export default SignUpPage;