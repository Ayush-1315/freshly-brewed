import {Routes,Route} from "react-router-dom";

import { Home } from "./pages/home/home";
import { Navbar } from "./components/navbar/navbar";
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
      </Routes>
    </div>
  );
}

export default App;
