import React from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import './index.scss';
import User from './User';

const Users = ({ match }) => {
  return (
    <div className="page__content">
      <h1>Users</h1>
      <BrowserRouter>
        <ul className="navigation">
          <li className="navigation__item">
            <Link to={`${match.url}/github`}>Github</Link>
          </li>
          <li className="navigation__item">
            <Link to={`${match.url}/facebook`}>Facebook</Link>
          </li>
        </ul>
        <Switch>
          <Route exact path={match.url}>
            <span>Select a user please</span>
          </Route>
          <Route path={`${match.url}/:user_id`} component={User}></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default Users;
