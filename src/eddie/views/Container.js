import React from 'react';


export default React.createClass({
	render: function(){
		return (
			<div className="container">
				{this.props.children}
			</div>
		);
	}
});