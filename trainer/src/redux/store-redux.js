import { createStore, combineReducers, applyMiddleware} from "redux";
import { reducer as formRecuder } from "redux-form";
import thunk from "redux-thunk";

import reducerCommon from "./reducers/reducer-common";
import reducerUserInfo from "./reducers/reducer-userInfo";
import reducerTasks from "./reducers/reducer-tasks";

let reducers = combineReducers({
    form: formRecuder,
    infoUser: reducerUserInfo,
    common: reducerCommon,
    tasks: reducerTasks
});

let score = createStore(reducers, applyMiddleware(thunk));

export default score;