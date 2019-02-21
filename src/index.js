import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import {BrowserRouter} from 'react-router-dom';

import getRoutes from './routes';
import rootReducer from './reducer';

import Firebase, { FirebaseContext } from './Components/Firebase';


import './index.css';
import * as serviceWorker from './serviceWorker';

// const store = createStore();

const middleware = [thunk];

const store = createStore(
	rootReducer,
	applyMiddleware(...middleware),
	)

ReactDOM.render(
	<FirebaseContext.Provider value={new Firebase()}>
		<Provider store={store}>
			<BrowserRouter>
				{getRoutes(store)}
			</BrowserRouter>
		</Provider>
	 </FirebaseContext.Provider>,
	document.getElementById('root')
);

 // If you want your app to work offline and load faster, you can change
 // unregister() to register() below. Note this comes with some pitfalls.
 // Learn more about service workers: http://bit.ly/CRA-PWA
 serviceWorker.unregister();
