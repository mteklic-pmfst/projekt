
import './App.css';
import Nav from './components/navbar';
import Middle  from './components/middle';
import {
  BrowserRouter,
  
  Route,
  Link,
} from 'react-router-dom';
import Home from './components/home_part';
import Footer from './components/footer';
import Registration from './components/registration';

import Login from './components/login';

function App() {
  return (
    <div className="App">
        
        {/* <Login /> */}
        <Nav/>
        <Home />
        
        
        <Middle/>
        {/* <Footer/>
        {/* <BrowserRouter>
          
              <Route path='/register' exact component={Registration}/>
              <Route path='/login' exact component={login}/>
        </BrowserRouter> */} 
        
    </div>
  );
}

export default App;
