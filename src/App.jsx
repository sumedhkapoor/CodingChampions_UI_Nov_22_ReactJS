import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";

import TicTacToeContainer from "./components/TicTacToeContainer";

function App() {
  return (
    <div className="App">
      <h3>Welcome to Nov 2022 DX UI Coding Challenge</h3>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<TicTacToeContainer />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
