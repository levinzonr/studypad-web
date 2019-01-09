import * as types from './actionTypes'


const initState = {
    topics: [],
    newTopic: ""
};


export default (state = initState, payload) => {
    console.log(payload);
    switch (payload.type) {
        case types.TOPICS_LOADED:
            return Object.assign({}, state, {
                topics: payload.item
            });
        case types.TOPIC_NAME:
            return Object.assign({}, state, {
               newTopic: payload.item
            });

        case types.TOPIC_DELETED:
            return Object.assign({}, state, {
                topics: state.topics.filter((item) => item.id !== payload.item)
            });
        default:
            return state;
    }
}