import './App.css';
import { Routes, Route } from "react-router-dom";
import { Signup } from './pages/Signup.jsx';
import { Signin } from './pages/Signin.jsx';
import Home from './pages/Home.jsx';
import { Dashboard } from './pages/Dashboard.jsx';
import PageNotFound from './pages/PageNotFound.jsx';
function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/signin' element={<Signin />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='*' element={<PageNotFound />} />
      </Routes>
    </>
  )
}

export default App;