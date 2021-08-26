import './App.css';
import traveler from './images/website.png';
import Project1 from './images/Project1.png';
import password from './images/Password.png';
import workday from './images/Work Day.png';
import team from './images/terminal.png';
import ecommerce from './images/ecommerce.png'

function Portfolio() {
  return (
    <div className="App">
    
    <div className="box">
    <a className="test2" target="_blank" rel="noreferrer" href="https://github.com/CSS-Crocodiles/Project_2/tree/main">Traveler's Landing</a>
    <a target="_blank" rel="noreferrer" href="https://dream-vacation2021.herokuapp.com/"><img className="images" src={ traveler } alt="TL"></img></a>

    <a target="_blank" rel="noreferrer" href="https://anthonyplanisek.github.io/Project-1/"><img className="images" src={ Project1 } alt="P1"></img></a>
    <a className="test2" target="_blank" rel="noreferrer" href="https://github.com/AnthonyPlanisek/Project-1">Inspired Meals</a>
    </div>
    <div className="box">
    <a className="test2" target="_blank" rel="noreferrer" href="https://github.com/lesleymoore/Work-Day-Scheduler">Work Day Scheduler </a>
    <a target="_blank" rel="noreferrer" href="https://lesleymoore.github.io/Work-Day-Scheduler/"><img className="images" src={ workday } alt="wd"></img></a>
    
    <a target="_blank" rel="noreferrer" href="https://lesleymoore.github.io/Password-Generator/"><img className="images" src={ password } alt="pw"></img></a>
    <a className="test2" target="_blank" rel="noreferrer" href="https://github.com/lesleymoore/Password-Generator">Password Generator</a>
    </div>
    <div className="box">
    <a className="test2" target="_blank" rel="noreferrer" href="https://github.com/lesleymoore/Team-Profile-Generator">Team-Profile Generator</a>
    <img className="images" src={ team } alt="tpg"></img>
    
    <img className="images" src={ ecommerce } alt="ec"></img>
    <a className="test2" target="_blank" rel="noreferrer" href="https://github.com/lesleymoore/ECommerce">ecommerce</a>
    </div>
   
    </div>
  );
}

export default Portfolio;