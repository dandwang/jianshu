import {actionTypes} from './index.js'
export const searchFocused=()=>{
	return {
		type:actionTypes.SEARCH_FOCUSED
	}
}
export const searchBlur=()=>{
	return {
		type:actionTypes.SEARCH_BLUR
	}
}
