import React from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Root from "./pages";

const App: React.FC = () => {
     return (
          <BrowserRouter>
               <Root />
          </BrowserRouter>
     );
};

export default App;
