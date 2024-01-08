import React from 'react';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import ListPage from './ListPage';
import EditPage from './EditPage';
import './style.css';

const App = () => {
  return (
    <Router>
      <Switch>
        < Route exact path="/" component={ListPage}/>
        < Route path="/add" component={EditPage}/>
        < Route path="/edit/:id" component={EditPage}/>

      </Switch>
      </Router>
  
  );

    <Router>
      return(
      <div>
        <nav>
          <ul>
            <li>
              <Link to ="/">Contact List</Link>
            </li>
            <li><Link to="/add">Add Contacts</Link></li>
            </ul>
        </nav>

        <hr />

        <Route path = "/" exact component ={ListPage}/>
        <Route path = "/add" component ={EditPage}/>
      </div>
      );

      </Router>
    
  
}
export default App;
