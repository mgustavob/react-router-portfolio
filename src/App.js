import React from 'react';
import './App.css';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import Home from './Home';
import About from './About';
import Blog from './Blog';
import Projects from './Projects'

let myProjects = [
  { name: 'Revenge of the Flower', link: "https://github.com/mgustavob/Revenge-of-the-Flower",
  descrip: "First Project, implimenting HTML, CSS and JavaScript in an classic game"},
  { name: 'Workout Bot', link: "https://github.com/mgustavob/project2",
  descrip: "Second Project, using and Axios call to get Data into a webside create a workout routine using NPM, Express, Routes and SQL " }
]

function App() {
  return (
    <Router>
    <div className="App">
      <nav>
        <Link to="/"><button>Home</button></Link>
        <Link to="/blog"><button>Blog</button></Link>
        <Link to="/about"><button>About</button></Link>
        <Link to="/projects"><button>Projects</button></Link>
      </nav>
      <Route exact path="/" component={Home} />
      <Route path="/blog" component={Blog} />
      <Route path="/about" component={About} />
      <Route path="/projects" render={(props)=> <Projects myProjects={myProjects} />}  />
    </div>
    </Router>
  );
}

export default App;
