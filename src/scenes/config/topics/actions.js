import * as types from './actionTypes'
import * as api from  '../../../services/api'

export const receiveTopics = item => ({
    type: types.TOPICS_LOADED,
    item,
});

export const setNewTopicName = item =>({
   type: types.TOPIC_NAME,
   item
});

export const showTopicDeleted = item => ({
   type: types.TOPIC_DELETED,
   item,
});

export function loadTopics() {
    return (dispatch, getState) => {
        api.getTopics(getState().user.token).then((response) => {
            dispatch(receiveTopics(response.data))
        }).catch((error) => {
            console.log(error);
            dispatch(receiveTopics([{name: "First"}, {name: 'Second'}]))
        });
    }
}

export function createTopic() {
    return (dispatch, getState) => {
        if (getState().topics.newTopic.length > 0) {
            let payload = {
                name: getState().topics.newTopic
            };
            api.createTopic(getState().user.token, payload).then((response) => {
                dispatch(loadTopics())
            }).catch((error) => {
                console.log(error)
            })
        }
    }
}


export function deleteTopic(topic) {
    return (dispatch, getState) => {
        api.deleteTopic(getState().user.token, topic.id).then((r) => {
            dispatch(showTopicDeleted(topic.id))
        }).catch((e) => {
            console.log(e)
        })
    }
}