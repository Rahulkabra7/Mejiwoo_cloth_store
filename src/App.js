import './App.css';
import Navbar from './Views/Navbar';
import Get_50_Off from './Views/Get_50%_Off.jsx';
import OurProduct from './Views/OurProduct.jsx';
import Home from './Views/Home.jsx';
import{ BrowserRouter as Router, Route, Routes} from 'react-router-dom'

function App() {
  return (
    <Router>
    <div className="App">
      <Navbar/>
      <Home/>
        <Routes>
          <Route path='/Home' element={<Home/>}/>
          <Route path='/Product' element={<OurProduct/>}/>
          <Route path='/Categories' element={<OurProduct/>}/>
          <Route path='/SALE' element={<Get_50_Off/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;

// https://www.figma.com/design/jeRUJrALJ8v4cqpIpjRol9/MEJIWOO-Fashion---E-commerce-Website-Landing-Page-(Community)?node-id=1-2&t=AYrVNu7bppGdeLBw-1