import React, { Component } from 'react';
import './App.css';
import Sidebar from './components/sidebar'
import Introduction from './components/introduction'
import About from './components/about'
import Timeline from './components/timeline'
import Projects from './components/projects'
import Skills from './components/skills'
import Education from './components/education'
class App extends Component {
  render() {
    return (
      <div id="colorlib-page">
        <div id="container-wrap">
         	<Sidebar></Sidebar>
          <div id="colorlib-main">
            <Introduction></Introduction>
            <About></About>
            <Education></Education>
            <Timeline></Timeline>
            <Projects></Projects>
            <Skills></Skills>
          </div>
      	</div>
      </div>
    );
  }
}

export default App;
