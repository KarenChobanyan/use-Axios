import { GET_POSTS, SET_POSTS } from "../types/posttypes";

function getPosts(){
    return{
        type:GET_POSTS,
        payload:{
            path:"/posts"
        }
    }
};

function setPosts(payload){
    return {
        type:SET_POSTS,
        payload
    }
}

export {
    getPosts,
    setPosts
}