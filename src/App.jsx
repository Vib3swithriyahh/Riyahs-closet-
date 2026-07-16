import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Home from "./pages/Home";
import Closet from "./pages/Closet";


function App() {

  return (

    <BrowserRouter>

      <nav className="navbar">

        <h1 className="logo">
          RIYAH'S CLOSET
        </h1>


        <div className="nav-links">

          <Link to="/">
            Home
          </Link>

          <Link to="/closet">
            Closet
          </Link>

        </div>

      </nav>


      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/closet" element={<Closet />} />

      </Routes>


    </BrowserRouter>

  );
}


export default App;
