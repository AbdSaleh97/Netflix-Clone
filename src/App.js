import './App.css';
import NavBar from './componenets/Navbar/Navbar.js';
import FavList from './componenets/favList/favList.js';
import Home from './componenets/home/Home.js';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Routes, Route } from 'react-router-dom'


function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path='/favList' element={<FavList />}></Route>
      </Routes>
    </div>
  )
}

export default App;
