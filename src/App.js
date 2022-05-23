
import './App.css';
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import AuthPage from './AuthPage';
import Search from './Search';
import WatchList from './WatchList';
import { getUser, logout } from './services/SupabaseUtils';

function App() {
  const [user, setUser] = useState();

  useEffect(() => {
    async function getThisUser(){
      const thisUser = await getUser(); 
      setUser(thisUser);
    }
    getThisUser();
  }, []);

  async function handleLogout(){
    await logout();

  }
  return (
    <Router>
      <div>
        {user && <nav>
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
            <AuthPage />
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
