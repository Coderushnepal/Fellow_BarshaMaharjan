import { combineReducers} from "redux";
// import counterReducer from "./counterReducer";
import favouriteBeerReducer from "./favouriteBeerReducer";

const rootReducer = combineReducers({ 
favouriteBeerReducer,
});
export default rootReducer;