import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./routes/Home";
import WatchInstructor from './routes/WatchInstructor';
import Search from "./routes/Search";
import FilmVideo from "./routes/FilmVideo";
import "./fonts/Designer.otf";
import "./fonts/Roboto-Regular.ttf";

function App() {
  return <div>
    <Router>
      <Routes>
        <Route exact path = "/" element={<Home />}/>
        <Route exact path = "/search/house" element={<Search />}/>
        <Route exact path = "/watch/sixstep" element={<WatchInstructor />}/>
        <Route exact path = "/film/house" element={<FilmVideo />}/>
      </Routes>
    </Router>
    </div>
}

export default App;
