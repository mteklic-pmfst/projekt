
import './App.css';
import Nav from './components/navbar';
import Middle from './components/middle';
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from 'react-router-dom';
import Home from './components/home_part';
import Footer from './components/footer';
import Registration from './components/registration';

import Login from './components/login';
import Homescreen from './components/homescreen';
import Booking from './components/book';
import Part_all from './Part_all';
import Profile from './components/profile';
import Admin from './components/Admin';
import Landing from './Landing';



function App() {
  return (
    <div className="App">
      <Nav/>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Landing />} />
          <Route path='/login' element={<Login />} />
          <Route path='/home' element={<Homescreen />} />
          <Route path='/book/:roomid/:fromDate/:toDate' element={<Booking />} />
          <Route path='/register' element={<Registration />} />
          <Route path='/firstpage' element={<Part_all />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/admin' element={<Admin />} />

        </Routes>
      </BrowserRouter>


    </div>
  );
}

export default App;
