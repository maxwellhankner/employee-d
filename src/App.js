import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <div>
        <div>
          hello
        </div>
        <div>
          <Route exact path="/" component={Home} />
        </div>
      </div>
      
    </Router>
  );
}

export default App;
