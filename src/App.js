
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import About from './aboutme.js';
import Portfolio from './portfolio.js'
import Contact from './contact.js'
import Resume from './resume.js'
import './App.css';

const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client= {client}>
    <Router>
      <div classname="App"></div>
      <Route exact path="/React_Portfolio" component={About} />
      <Route path="/Portfolio" component={Portfolio} />
      <Route path="/Contact" component={Contact} />
      <Route path="/Resume" component={Resume} />
    </Router>
    </ApolloProvider>
  );
}

export default App;
