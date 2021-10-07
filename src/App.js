import Welcome from "./Welcome"
import Contact from "./Contact"
import Blog from "./Blog"
import About from "./About"

import { Route, Switch, Redirect, NavLink } from "react-router-dom"
// TO DO: Add the Proper Routes to the components Listed Below!


import './App.css';


function App() {
  return (
    <div className="App">
      {/* TO DO: We'll add the Routes and eventually links below this line */}
      <nav className="App-nav" >
            <NavLink to='/welcome' activeClassName='active-link'>
              Home
            </NavLink>
            <NavLink to='/blog' activeClassName='active-link'>
              Blog
            </NavLink>
            <NavLink to='/about' activeClassName='active-link'>
              About
            </NavLink>
            <NavLink to='/contact' activeClassName='active-link'>
              Contact
            </NavLink>
      </nav>
      <Switch>
        <Route path='/' exact>
          <Redirect to='/welcome' />
        </Route>
        <Route path='/welcome'>
          <Welcome />
        </Route>
        <Route path='/blog'>
          <Blog />
        </Route>
        <Route path='/about'>
          <About />
        </Route>
        <Route path='/contact'>
          <Contact />
        </Route>
      </Switch>
  </div>
  );
}

export default App;
