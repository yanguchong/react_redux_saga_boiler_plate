import {all, call, put, takeLatest} from "redux-saga/effects";
import ACTIONS from "./Actions";
import Api from "./Api";

function* helloWorldAction(action){
    try {
        const result = yield call(Api.test.testApiCall);
        const putAction = {
            "type": ACTIONS.HELLO_WORLD_SUCCESS,
            "payload": result
        };
        yield(put(putAction));
    }
    catch(e){
        const errPutAction = {
            type: ACTIONS.HELLO_WORLD_FAIL,
            payload: e
        };

        yield(put(errPutAction));
    }
}

function* helloWorldWatch() {
    yield takeLatest(ACTIONS.HELLO_WORLD, helloWorldAction);
}

const watches = [
    helloWorldWatch,
];

export default function* rootSaga(){
    yield all(watches.map(w => {
        return w()
    }));
}

