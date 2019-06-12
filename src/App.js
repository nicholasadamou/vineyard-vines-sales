import React from 'react';
import './App.scss';

import { BrowserRouter as Router } from 'react-router-dom'

import Provider from './context/Provider'
import Routes from './Routes'

const App = () => {
	return (
		<Provider>
			<Router>
				<Routes />
			</Router>
		</Provider>
	)
}


export default App;
