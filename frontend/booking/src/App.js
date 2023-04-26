
import './App.css';
import Nav from './components/navbar';
import Middle  from './components/middle';
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

function App() {
  return (
    <div className="App">
        <Nav/>
        {/* <Login/> */}
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Login/>}/>
            <Route path='/home' element={<Homescreen/>}/>
            <Route path='/book/:roomid'element={<Booking/>}/>
            <Route path='/register' element={<Registration/>}/>
            {/* <Route path='/login' element={<Login/>}/> */}
          </Routes>
        </BrowserRouter>
        {/* <Registration /> */}
        {/* <Login/>
        <Nav/>
        <Home />


        <Middle/> */}
        {/* <Footer/> */}
       

    </div>
  );
}

export default App;
