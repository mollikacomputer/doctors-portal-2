
import { Route, Routes } from 'react-router-dom';
import Appointments from './Pages/Appointment/Appointments';

import './App.css';
import About from './Pages/About/About';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import Navbar from './Pages/Shared/Navbar';
import Appointment from './Pages/Shared/Navbar';
import RequireAuth from './Pages/Login/RequireAuth';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element= {<Home/>} />
        <Route path='/about' element= {<About/>} />
        <Route path='/login' element= {<Login/>} />
        <Route path='/register' element= {<Register/>} />
        <Route path='/appointments' element= {
          <RequireAuth>
            <Appointments/>
          </RequireAuth>
        } />
      </Routes>
  
    </div>
  );
}

export default App;
