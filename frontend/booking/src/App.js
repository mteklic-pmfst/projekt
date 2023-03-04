
import './App.css';
import Nav from './components/navbar';
import Middle  from './components/middle';

import Home from './components/home_part';
import Booking from './components/book';
import Footer from './components/footer';

function App() {
  return (
    <div className="App">
      
        <Nav />
        

        {/* <Booking />  */}
        <Home />
        
        <Middle/>
        <Footer/>
        
    </div>
  );
}

export default App;
