
import './App.css';
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import AuthPage from './AuthPage';
import Search from './Search';
import WatchList from './WatchList';
import { getUser, logout } from './services/SupabaseUtils';

function App() {
  const [user, setUser] = useState();
  const [token, setToken] = useState();

  useEffect(() => {
    async function getThisUser(){
      const user = await getUser(); 
      setUser(user);
    }
    getThisUser();
  }, []);

  async function handleLogout(){
    await logout();

  }
  return (
    <Router>
      <div>
        {token && <nav>
          <ul>
            <li>
              <Link to="/search">Search</Link>
            </li>
            <li>
              <Link to="/watch-list">Watch List</Link>
            </li>
            <li>
              <button onClick={handleLogout}>Log Out</button>
            </li>
            
          </ul>
        </nav>
        }
        <Switch>
          <Route exact path="/">
            <AuthPage setToken={setToken}/>
          </Route>

          <Route exact path="/search">
            <Search />
          </Route>

          <Route exact path="/watch-list">
            <WatchList />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
