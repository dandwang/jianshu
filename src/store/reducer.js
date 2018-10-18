import {combineReducers} from 'redux-immutable'

import {reducer as headerReaducer}  from '../common/header/store'
const reducer = combineReducers({
	header:headerReaducer
})
export default reducer;