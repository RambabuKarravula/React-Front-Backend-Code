
import './App.css';
import Nav from './components/Nav';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Footer from './components/Footer';
import SignUp from './components/Signup';
import PrivateComponent from './components/PrivateComponents';
import Login from './components/Login';
import AddProfile from './components/Add-Profile';
import Profile from './components/Profile';
function App() {
  return (
    <div className="App">
      <h1>Ginger Media Groups</h1>
      <BrowserRouter>                       
      <Nav />
     <Routes>
      <Route element={<PrivateComponent />}>
      <Route path="/AddProfile" element={<AddProfile/>} />
      <Route path="/Profile" element={<Profile />} />
      </Route>
      <Route path="/Login" element={<Login />} />
      <Route path="/SignUp" element={<SignUp />} />
      

     </Routes>
      </BrowserRouter>   
    </div>
  );
}

export default App;
