var React = require("react");
var ReactDOM = require("react-dom");
var ListManager = require('./components/ListManager.jsx');
var Routes = require('./routers.jsx');


ReactDOM.render(<ListManager title="Morning" heading="Health"/>, document.getElementById('Personal'));
ReactDOM.render(<ListManager title="Office" heading="Mon-Fri" headerColor ="#eee"/>, document.getElementById('data'));
ReactDOM.render(<ListManager title="Night" heading="Personal" headerColor ="#999"/>, document.getElementById('work'));
ReactDOM.render(Routes, document.getElementById('ght'));
