import React from 'react';
import ReactDOM from 'react-dom';
import EddieRoot from './eddie/views';

ReactDOM.render(
	<EddieRoot.Container> 
		<EddieRoot.Greeting/>
		<EddieRoot.Days />
	</EddieRoot.Container> , 
	document.getElementById('app')
);