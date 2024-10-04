import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Error402 from './pages/Error402';
import About from './pages/About';
import User from './pages/User';
import Contact from './pages/Contact';
import Navication from './components/NavBar/Navication';
import UserProvider from './context/UserProvider';
import Footer from './components/footer/Footer';
function App() {
  return (
    <BrowserRouter>
      <UserProvider>
        <Navication />
        <Routes>
          <Route path='/' element={<Home />}></Route>        
          <Route path='/about' element={<About />}></Route>        
          <Route path='/user' element={<User />}></Route>
          <Route path='/contact' element={<Contact />}></Route>  
          <Route path='*' element={<Error402 />}></Route>
        </Routes>
        <Footer />
      </UserProvider>
    </BrowserRouter>
  );
}

export default App;
