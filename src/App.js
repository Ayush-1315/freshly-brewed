import {Routes,Route} from "react-router-dom";

import { Home } from "./pages/home/home";
import { Navbar } from "./components/navbar/navbar";
import './App.css';
import { Signup } from "./pages/signup/signup";
import { SignIn } from "./pages/signin/signin";
import { SignUpDetails } from "./pages/signupDetails/signUpDetails";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/signin" element={<SignIn/>}/>
        <Route path="/signup-details" element={<SignUpDetails/>}/>
      </Routes>
    </div>
  );
}

export default App;
