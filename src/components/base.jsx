var React = require('react');


var Base = React.createClass({
	render : function(){
		initial={true}
		return (
				<div>{this.props.children}</div>
				
				
			)
	}
});

module.exports = Base;