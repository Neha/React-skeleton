var React = require("react");
var List = require("./List.jsx");
var Error = require("./Error.jsx");
var ReactDOM = require("react-dom");

var ListManager = React.createClass({
	getInitialState : function(){
		return {items : [], newItemText : ''};
	},
	handleSubmit : function(e){
		e.preventDefault();
		
			var currentItems = this.state.items;
			if((this.state.newItemText) == ''){
				var ErrorMessage = "Please enter Valid info";
				ReactDOM.render(<Error title="Error" />, document.getElementById('error'));
			}
			else{
				
				currentItems.push(this.state.newItemText);
				this.setState({items : currentItems, newItemText:''});
			}
		},
	onChange : function(e){
		if(e.target.value == ''){
			console.log('error');
		}
		else{
			this.setState({newItemText : e.target.value});
		}
		
	},
	render : function(){
		var headingStyle = {}
		if(this.props.headerColor){
			headingStyle.background = this.props.headerColor;
		}
		return(
				<section className="main">
					<header style={headingStyle}>
						<h2>{this.props.heading}</h2>
					 </header>
				<div>
				<div class="content">
					<h3>{this.props.title}</h3>
					<form onSubmit={this.handleSubmit}>
						<input type="text" onChange= {this.onChange} value={this.state.newItemText} />
						<button>ADD</button>
					</form>
						<div id="error"></div>
					<List items = {this.state.items} />
				</div>
				</div>
				</section>

			);
	}
		

});

module.exports = ListManager;