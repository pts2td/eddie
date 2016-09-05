import React from 'react';
import Constants from '../../constants';
import moment from 'moment';

export default React.createClass({

	diffFormat: function(date, formats) {
		return formats.map((format) => (
			`${format}: ${moment().diff(date, format)}\n`
		));
	},
	render: function(){
		const diffStrings = this.diffFormat(Constants.BIRTHDAY, Constants.FORMATS)
		return (
			<div className="day-counter">
				{diffStrings}
			</div>
		);
	}
});