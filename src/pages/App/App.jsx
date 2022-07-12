import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
//CSS
import './App.css';
//Components
import Nav from '../../components/Nav/Nav'
import Footer from '../../components/Footer/Footer'
import SchoolDetails from '../../components/SchoolDetails/SchoolDetails'
import UpdateSchoolForm from '../../components/UpdateSchoolForm/UpdateSchoolForm'
//Pages
import Home from '../Home/Home'
import Login from '../Login/Login'
import SignUp from '../SignUp/SignUp'
import Schools from '../Schools/Schools'
import CreateSchool from '../CreateSchool/CreateSchool'
//Services
import * as usersService from '../../utilities/users-service'

const App = () => {
  const [user, setUser] = useState('')

  useEffect(() => {
    if (usersService.getToken()) setUser(usersService.getUser())
  }, [])

  return (
    <div className="App">
       <Nav user={user} setUser={setUser} logOut={usersService.logOut}/>
       <Route path='/login' element={<Login setUser={setUser} />} />
       <Route path='/signup' element={<SignUp setUser={setUser} />} />
        {
          user &&
          <>
            <Route path='/schools' element={<Schools />} />
            <Route path='/schools/create' element={<CreateSchool />} />
            <Route path='/schools/:id' element={<SchoolDetails />} />
            <Route path='/schools/:id/edit' element={<UpdateSchoolForm />} />
          </>
        }

       <Routes>
           <Route path='/' element={<Home />}/>
       </Routes>

       <Footer />
    </div>
  );
}

export default App;
