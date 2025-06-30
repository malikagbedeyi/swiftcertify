import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./Page/Home";
import About from "./Page/About";
import Career from "./Page/Career";

function App() {
  return (
    <div className="App">
       <Router>
        <Routes>
          <Route path="/" element={<Home /> }/>
          <Route path="/about" element={<About /> }/>
          <Route path="/career" element={<Career /> }/>
         </Routes>
          </Router>
    </div>

  );
}

export default App;


// git add .
// git commit -m "Your commit message"
// git push