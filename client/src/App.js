import React, { useEffect, useState } from "react";

import {
	BrowserRouter as Router,
	Route,
  } from "react-router-dom";
  
import "./App.css";
import Homepage from "./components/Homepage"
import LandingPage from "./components/LandingPage";
import StudentProfile from "./components/StudentProfile"

export function App() {
return (
		<Router>
      <Route exact path="/" component={LandingPage} />
    <Route  path="/login" component={Homepage} />
    <Route path="/student" component={StudentProfile} />
  </Router>	
	)	
}

export default App;
