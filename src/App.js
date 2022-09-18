import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";

import Dashboard from "./Components/Dashboard/Dashboard/Dashboard";
import Header from "./Components/Dashboard/Header/Header";
import Sidebar from "./Components/Dashboard/Sidebar/Sidebar";
import Maps from "./Components/Others/Maps";
import Menu from "./Components/Others/Menu";
import Message from "./Components/Others/Message";
import Setting from "./Components/Others/Setting";
import Help from "./Components/Others/Help";
import Account from "./Components/Others/Account";
import { useState } from "react";

function App() {
  const [show, setShow] = useState(true);
  return (
    <div className="App">
      
      <Router>
        <Header show={show} setShow={setShow} />
        <Sidebar />
        <Routes>
          
          <Route exact path="/dashboard" element={<Dashboard show={show} setShow={setShow} />} />
          <Route path="/maps" element={<Maps />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/message" element={<Message/>} />
          <Route path="/setting" element={<Setting/>} />
          <Route path="/account" element={<Account/>} />
          <Route path="/help" element={<Help/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
