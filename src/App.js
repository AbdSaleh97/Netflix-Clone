import './App.css';
import Home from './componenets/home/Home.js';
import 'bootstrap/dist/css/bootstrap.min.css'
import {Routes, Route} from 'react-router-dom'


function App () {
  return (
    <div>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
    </Routes>
  </div>
  )
}

export default App;
