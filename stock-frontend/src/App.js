import React, {useState} from 'react';
import { Routes, Route,Navigate } from "react-router-dom";
import './css/index.css'
import Dashboard from './components/Dashboard';
import Market from './components/Market';
import News from './components/News';
import Portfolio from './components/Portfolio';
import Settings from './components/Settings';
import Logout from './components/Logout';
import Navbar from './components/Navbar';
import StockDetails from './components/StockDetails';


function App() {
  const [navVisible, showNavbar] = useState(true);

  return (
    <>

    <div className="App">

      <Navbar visible={ navVisible } show={ showNavbar } />
      <Routes>
        <Route path="/" element={<Navigate to="/dashboard" />} />
        <Route path='/Dashboard' element={ <Dashboard navVisible={navVisible}/> } />
        <Route path='/Market' element={ <Market navVisible={navVisible}/> } />
        <Route path='/News' element={ <News navVisible={navVisible}/> } />
        <Route path='/Portfolio' element={ <Portfolio navVisible={navVisible}/> } />
        <Route path='/Settings' element={ <Settings navVisible={navVisible}/> } />
        <Route path='/Sign-out' element={ <Logout navVisible={navVisible}/> } />
        <Route path='/stock' element={<StockDetails navVisible={navVisible} />}/>
      </Routes>

		</div>
    
    </>
    
  );
}

export default App;
