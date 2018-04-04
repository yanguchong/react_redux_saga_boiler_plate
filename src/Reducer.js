import ACTIONS from './Actions';

const initialState = {
    message: '',
    param1: ''
};

function reducer(state = initialState, action) {
    switch (action.type) {
        case ACTIONS.HELLO_WORLD_SUCCESS:
            return Object.assign({}, state, {
                message: action.payload.body
            });
        case ACTIONS.LOAD_PARAM:
            return Object.assign({}, state, {
                param1: action.payload.message
            });

        default:
            return state;
    }
}

export default reducer;
