import {Routes,Route} from "react-router-dom";

import { Home } from "./pages/home/home";
import { Navbar } from "./components/navbar/navbar";
import './App.css';
import { Signup } from "./pages/signup/signup";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/signup" element={<Signup/>}/>
      </Routes>
    </div>
  );
}

export default App;
