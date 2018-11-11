import {combineReducers} from 'redux';

import {routeReducer} from 'react-router-redux';

import {reducer as homepageReducer} from './pages/Homepage/reducer';
import {reducer as rpgReducer} from './pages/RPG/reducer';
import {reducer as resumerReducer} from './pages/Resume/reducer';

export default combineReducers({
	homepageReducer,
	rpgReducer,
	resumerReducer,
	routing: routeReducer,
});