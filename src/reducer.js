import Constants from './Constants';

export default function(state = {}, action){
	switch (action.type){
		case Constants.SET_STATE:
			return state.merge(action.payload);
		return state;
	}
}