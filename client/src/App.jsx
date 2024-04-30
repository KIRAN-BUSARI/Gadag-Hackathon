import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Signup from "./pages/Auth/Signup";
import PageNotFound from "./pages/PageNotFound";
import Signin from "./pages/Auth/Signin";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/about" element={<About />} />
        <Route path="/signin" element={<Signin />} />
        {/* <Route path="/about" element={<About />} /> */}
        <Route path="*" element={<PageNotFound />} />
      </Route>
    </Routes>
  )
}

export default App
