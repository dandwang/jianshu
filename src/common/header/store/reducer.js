import {actionTypes} from'./index.js'
import {fromJS} from 'immutable'
const defaultState=fromJS({
	focused:false
})

export default (state=defaultState,action)=>{
	if(action.type===actionTypes.SEARCH_FOCUSED){
		return state.set('focused',true);
	}else if(action.type===actionTypes.SEARCH_BLUR){
		return state.set('focused',false);
	}

	return state;
}