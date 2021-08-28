
import { BrowserRouter as Router, Route } from 'react-router-dom';
import About from './aboutme.js';
import Portfolio from './portfolio.js'
import Contact from './contact.js'
import Resume from './resume.js'
import './App.css';


function App() {
  return (

    <Router>
      <div classname="App"></div>
      <Route exact path="/" component={About} />
      <Route path="/Portfolio" component={Portfolio} />
      <Route path="/Contact" component={Contact} />
      <Route path="/Resume" component={Resume} />
    </Router>
    
  );
}

export default App;
