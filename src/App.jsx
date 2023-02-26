import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./routes/Home";
import WatchInstructor from './routes/WatchInstructor';
import Feedback from "./routes/Feedback";
import Critique from "./routes/Critique";
import Film from "./routes/Film";
import "./fonts/Designer.otf";
import "./fonts/Roboto-Regular.ttf";

function App() {
  return <div>
    <Router>
      <Routes>
        <Route exact path = "/" element={<Home />}/>
        <Route exact path = "/watch/sixstep" element={<WatchInstructor />}/>
        <Route exact path = "/feedback/sixstep" element={<Feedback />}/>
        <Route exact path = "/critique/sixstep" element={<Critique />}/>
        <Route exact path = "/film" element={<Film />}/>
      </Routes>
    </Router>
    </div>
}

export default App;
