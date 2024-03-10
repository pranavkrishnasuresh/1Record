import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Input from "./pages/Input";
import Query from "./pages/Query";
import Result from "./pages/Result";

import "./index.css"


function App() {

  return (
      <div className="hi">
        <BrowserRouter>
          <Routes>
            <Route path="/Input" element={<Input />} />
            <Route path="/Query" element={<Query />} />
            <Route path="/Result" element={<Result />} />
          </Routes>
        </BrowserRouter>
        </div>
  );
}

export default App;