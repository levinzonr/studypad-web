import {createStore, applyMiddleware, combineReducers, compose} from 'redux'
import thunk from 'redux-thunk'
import userReducer from './data/user/reducer';
import unisReducer from './scenes/config/universities/reducer'
import topicReducer from  './scenes/config/topics/reducer'
const enhancers = [];
const middleware = [thunk];


const reducer = combineReducers({
    user: userReducer,
    unis: unisReducer,
    topics: topicReducer
});

if (process.env.NODE_ENV === 'development') {
    const devToolsExtension = window.devToolsExtension;

    if (typeof devToolsExtension === 'function') {
        enhancers.push(devToolsExtension());
    }
}


const composedEnhancers = compose(applyMiddleware(...middleware), ...enhancers);

const store = createStore(
    reducer,
    composedEnhancers,
);

export default store;
