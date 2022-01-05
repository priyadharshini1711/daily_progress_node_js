import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import Preview from "./Preview";

class App extends Component {
  render() {
    return (
      <Router>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <Link class="navbar-brand" to="/">
            Daily Progress
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item active">
                <Link class="nav-link" to="/">
                  Home
                </Link>
              </li>
            </ul>
          </div>
        </nav>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/generate-pdf" element={<Preview />}></Route>
        </Routes>
      </Router>

      //  <Router>
      //      <div className="App">
      //       <ul className="App-header">
      //         <li>
      //           <Link to="/">Home</Link>
      //         </li>
      //         <li>
      //           <Link to="/generate-pdf">Preview</Link>
      //         </li>
      //       </ul>
      //      <Routes>
      //            <Route exact path='/' element={< Home />}></Route>
      //            <Route exact path='/generate-pdf' element={< Preview />}></Route>
      //     </Routes>
      //     </div>
      //  </Router>
    );
  }
}

export default App;
