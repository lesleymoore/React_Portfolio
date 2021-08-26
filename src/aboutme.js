import me from './me.jpg';
import './App.css';

function About() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={me} className="App-logo" alt="me" />
        <h1>
          About Me
        </h1>
        <p className="aboutme">
        A full stack web developer ready to enhance websites to have better functionality and web presence.
        </p>
        <p className="aboutme">
          I am from Lenoir, NC. I moved to Raleigh in 2012 to attend NC State University for Biological Sciences. However when I found the coding program at UNC I quickly decided it was my niche. I find myself wanting to learn more about coding everyday and I am ready to find a company to use and enhance my skills even more.
        </p>
      </header>
    </div>
  );
}

export default About;
