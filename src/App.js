import './App.css';
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom';
import AuthPage from './AuthPage';
import Search from './Search';
import WatchList from './WatchList';
import { getUser, logout } from './services/SupabaseUtils';

function App() {
  const [user, setUser] = useState();
  const [token, setToken] = useState();

  useEffect(() => {
    async function getThisUser() {
      const user = await getUser();
      setUser(user);
    }
    getThisUser();
  }, []);

  async function handleLogout() {
    await logout();
    setToken('');
  }
  return (
    <Router>
      <div>
        {token || user ? (
          <nav className='App-header'>
            <ul>
              <li>
                <Link to="/search" style={{ textDecoration: 'none', color: 'white' }}>Search</Link>
              </li>
              <li>
                <Link to="/watch-list" style={{ textDecoration: 'none', color: 'white' }}>Watch List</Link>
              </li>
              <li>
                <button onClick={handleLogout}>Log Out</button>
              </li>
            </ul>
          </nav>
        ) : (
          <div></div>
        )}
        <Switch>
          <Route exact path="/">
            {token ? <Redirect to="/watch-list" /> : <AuthPage setToken={setToken} />}
          </Route>

          <Route exact path="/search">
            {token ? <Search /> : <Redirect to="/" />}
          </Route>

          <Route exact path="/watch-list">
            {token ? <WatchList /> : <Redirect to="/" />}
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
