import {HashRouter,Routes,Route} from "react-router-dom"
import Home from "./Page/Home";
import About from "./Page/About";
import Career from "./Page/Career";
function App() {
  return (
    <div className="App">
      <HashRouter>
        <Routes>
          <Route path="/" element={<Home /> }/>
          <Route path="/about" element={<About /> }/>
          <Route path="/career" element={<Career /> }/>

        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
