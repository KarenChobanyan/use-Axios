import { ADD_COMMENT, GET_COMMENTS, POST_COMMENT, SET_COMMENTS } from "../types/commentTypes"

const getCommnets = () => {
    return {
        type: GET_COMMENTS,
        payload: {
            path: "/comments"
        }
    }
};


const setComments = (payload) => {
    return {
        type: SET_COMMENTS,
        payload
    }
};

const postComment = (payload) => {
    return {
        type: POST_COMMENT,
        payload
    }
};

const addComment = (payload) => {
    return {
        type: ADD_COMMENT,
        payload
    }
}

export {
    getCommnets,
    setComments,
    postComment,
    addComment
}