import './App.css';
// import Login from './loginpage'
// import Topbar from './headbar';
import { Route,Routes,Link } from 'react-router-dom';
import Home from './Webpages/home';
import About from './Webpages/about';
import Contact from './Webpages/contact';
import Header from './Webpages/header';
import Login from './Webpages/login';
//import Register from './Webpages/register';
import RegistrationForm from './formValidation';
import ToDoListGenerator from './list';



function App() { 
  return (
    <div className='App'>
       <ToDoListGenerator/>
    {/* <Header/> */}
    {/* <RegistrationForm/>
    <Routes>
        <Route path="" element={<Home/>}></Route>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/home" element={<Home/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/register" element={<RegistrationForm/>}></Route>
    </Routes> */}
  
    
    </div>
    
  );
  }
export default App;