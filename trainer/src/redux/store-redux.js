import { createStore, combineReducers, applyMiddleware} from "redux";
import { reducer as formRecuder } from "redux-form";
import thunk from "redux-thunk";

import reducerNav from "./reducers/reducer-nav";
import reducerUserInfo from "./reducers/reducer-userInfo";

let reducers = combineReducers({
    form: formRecuder,
    infoUser: reducerUserInfo,
    nav: reducerNav
});

let score = createStore(reducers, applyMiddleware(thunk));

export default score;