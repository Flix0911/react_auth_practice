import './App.css';
// import react router
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './pages/homepage'
import LoginPage from './pages/LoginPage'
import Header from './components/Header'


function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Routes>
            {/* exact needs to be there, ensure when a user goes to login, doesn't render */}
            <Route element={<HomePage />} path="/" exact/>
            <Route element={<LoginPage />} path="/login"/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
