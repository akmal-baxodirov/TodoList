import React from 'react';
import './App.css';
import Sidebar from './components/sidebar/Sidebar';
import Main from './components/main/Main';
import SidebarState from './context/sidebarcontext/SidebarState';


function App() {
  

  return (
    <SidebarState>
    <div className="App">
      <Sidebar />
      <Main />
    </div>
    </SidebarState>
  );
}
export default App;
