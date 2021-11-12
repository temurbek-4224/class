import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div style={{
      position: 'relative',
      width: '100%',
      minHeight: '100vh',
      backgroundImage: "url('https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260')",
      backgroundPosition: 'center center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }}
    >
      <div style={{
        position: 'absolute',
        // top: '250px',
        width: '450px',
        display: 'flex',
        justifyContent: 'space-between'
      }}>
        <Link to='/signin'>
          <button className='btn btn-warning btn-lg' style={{ padding: '15px 65px', color: '#fff' }}>SIGN IN</button>
        </Link>
        <Link to='/signup'>
          <button className='btn btn-info btn-lg' style={{ padding: '15px 65px' }}>SIGN UP</button>
        </Link>
      </div>
    </div >
  )
}

export default HomePage;