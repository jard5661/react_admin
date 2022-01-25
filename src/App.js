import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import Home from './pages/home/Home';
import './App.css'
import React from "react";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import UserList from "./components/userList/UserList";
import User from "./components/user/User";

function App() {
  return (
    <BrowserRouter>
    
    <Topbar></Topbar>
        <div className="container">
          <Sidebar></Sidebar>
            <Routes>
              <Route path="/" element={<Home></Home>}></Route>
             <Route path="/users" element={<UserList></UserList>}></Route> 
             <Route path="/users/:userId" element={<User></User>}></Route>
            </Routes>
          
        </div>
     
    </BrowserRouter>
  );
}

export default App;
