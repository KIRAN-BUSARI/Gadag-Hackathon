import './App.css';
import { Routes, Route } from "react-router-dom";
import { Signup } from './pages/Signup.jsx';
import { Signin } from './pages/Signin.jsx';
import Home from './pages/Home.jsx';
import { Dashboard } from './pages/Dashboard.jsx';
import PageNotFound from './pages/PageNotFound.jsx';
import Layout from './components/Layout.jsx';
import HowToSave from './pages/HowToSave.jsx';
import SavingGuide from './pages/SavingGuide.jsx';
import ObjectDetection from './pages/ObjectDetection/ObjectDetection.jsx';
import InputDetection from './pages/InputDetection/InputDetection.jsx';
function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />} >
          <Route path='' element={<Home />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/signin' element={<Signin />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/how-to-save' element={<HowToSave />} />
          <Route path='/saving-guide' element={<SavingGuide />} />
          <Route path='/detection' element={<ObjectDetection />} />
          <Route path='/input' element={<InputDetection />} />
          <Route path='*' element={<PageNotFound />} />
        </Route>
      </Routes>
    </>
  )
}

export default App;