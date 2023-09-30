import { Route, Routes, } from 'react-router-dom';
import Home from './Routes/Home';
import Car from './Routes/Car';
import About from './Routes/About';
import Contact from './Routes/Contact';

const App = () => {
 

  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/car' element={<Car />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </div>
  );
};

export default App;
