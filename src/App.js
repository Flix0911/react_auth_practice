import './App.css';
// import react router
import { Outlet } from 'react-router-dom'

import Header from './components/Header'



function App() {
  return (
    <div className="App">
        <Header/>
        <Outlet/>
        
    </div>
  );
}

export default App;
