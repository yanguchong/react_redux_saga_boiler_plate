import ACTIONS from './Actions';
import {Map} from 'immutable';

const initialState = Map({
    message: '',
    param1: ''
});

function reducer(state = initialState, action) {
    switch (action.type) {
        case ACTIONS.HELLO_WORLD_SUCCESS:
            return state.set('message', action.payload.body);
        case ACTIONS.LOAD_PARAM:
            return state.set('param1', action.payload.message);
        default:
            return state;
    }
}

export default reducer;
