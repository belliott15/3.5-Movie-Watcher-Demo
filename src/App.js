import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import AuthPage from './AuthPage';
import Search from './Search';
import WatchList from './WatchList';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
                renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/">
            <AuthPage />
          </Route>

          <Route path="/search">
            <Search />
          </Route>

          <Route path="/watch-list">
            <WatchList />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
