var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;

var Base = require('./components/base.jsx');
var PageOne = require('./components/pageone.jsx');
var PageTwo = require('./components/pageTwo.jsx');

var RouteOne = (
 <Router>
 <Route path="/PageOne" component= {PageOne}></Route>
 <Route path="/pageTwo" component= {PageTwo}></Route>
 </Router>
);

module.exports = RouteOne;