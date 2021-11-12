import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark" style={{}}>
      <Link to='/' className="navbar-brand" href="#">Study Center</Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarScroll">
        <ul className="navbar-nav mr-auto my-2 my-lg-0 navbar-nav-scroll" style={{ maxHeight: '200px' }}>
          <li className="nav-item active">
            <Link to='/allStudents' className="nav-link" href="#">Students<span className="sr-only">(current)</span></Link>
          </li>
          <li className="nav-item dropdown">
            <Link className="nav-link dropdown-toggle" href="#" id="navbarScrollingDropdown" role="button" data-toggle="dropdown" aria-expanded="false" to='/'>
              Contact
            </Link>
            <ul className="dropdown-menu" aria-labelledby="navbarScrollingDropdown">
              <li ><a className="dropdown-item" href='https://t.me/Temurbek_Xaydarov'>Telegram</a></li>
              <li ><a className="dropdown-item" href='https://www.instagram.com/mern_stack_devv'>Instagram</a></li>
            </ul>
          </li>
          <li className="nav-item">
            <Link to='/addStudents' className="nav-link">Add Student</Link>
          </li>
        </ul>
        {/* <form className="d-flex">
          <input className="form-control mr-2" type="search" placeholder="Search" aria-label="Search" />
          <button className="btn btn-outline-success" type="submit">Search</button>
        </form> */}
      </div>
    </nav>
  )
}

export default Navbar;