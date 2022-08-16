import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {Login} from './components/Login'
import { RoomNumber } from './components/RoomNumber';
import { RoomName } from './components/RoomName';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
      <Route  path="/" element={ <Login/>}/>
      <Route  path="/rooms" element={ <RoomNumber/>}/>
      <Route  path="/roomname" element={ <RoomName/>}/>



      </Routes>
      </BrowserRouter>
  
    </div>
  );
}

export default App;
