import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/Login/Login';
import Home from './components/Home/Home';
import NewUser from './components/NewUser/NewUser';
import Football from './components/Football/Football';
import SportsList from './components/SportsList/SportsList';

function App() {
  return (
    <BrowserRouter>
          <Routes>
            <Route path='/login' element={<Login/>} />
            <Route path='/home' element={<Home/>} />
            <Route path='/NewUser' element={<NewUser/>} />
            <Route path='/sportsList' element={<SportsList/>} />
            <Route path='/sports/football' element={<Football/>} />
            






          </Routes> 
    </BrowserRouter>


  );
}

export default App;
