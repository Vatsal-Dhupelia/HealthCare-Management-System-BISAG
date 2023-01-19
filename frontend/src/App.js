import React, { Component } from "react"
import { BrowserRouter as Router, Switch, Route, Link, Routes } from "react-router-dom"
import RootPage from "./components/landing/RootPage"
class App extends Component {
  render() {
    return (
      <>
        <Router>
          <Routes>
            <Route exact path="/" element={<RootPage />} />
          </Routes>
        </Router>
      </>
    );

  }
}

export default App;