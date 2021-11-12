import './App.css';
import { Route, Switch } from 'react-router-dom';
import Navbar from './components/navbar/navbar.component';
import HomePage from './pages/homepage/homepage.component';
import SignInPage from './pages/signin-signup/signInPage.component';
import SignUpPage from './pages/signin-signup/signUpPage.component';
import AllStudentsPage from './pages/studentspage/allStudentsPage.component';
import UpsentStudentsPage from './pages/upsentStudentsPage/upsentStudentsPage.component';
import AddStudentPage from './pages/addStudentPage/addStudentPage.component';

function App() {
  return (
    <div className="app">
      <Navbar />
      <Switch>
        <Route path='/signin' component={SignInPage} />
        <Route path='/signup' component={SignUpPage} />
        <Route path='/allStudents' component={AllStudentsPage} />
        <Route path='/addStudents' component={AddStudentPage} />
        <Route exact path='/:subject' component={UpsentStudentsPage} />
        <Route exact path='/' component={HomePage} />
      </Switch>
      {/* <HomePage /> */}
    </div>
  );
}

export default App;
