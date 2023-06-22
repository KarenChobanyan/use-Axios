import { useContext, useEffect, useState } from "react"
import { API } from "../services/api"
import { HeaderNavContext } from "../contexts/headerNavContext"
import Post from "./Post"
import { Outlet } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { getPosts } from "../store/actions/postActions"

export default () => {
    const [headerNav, setHeaderNavState] = useContext(HeaderNavContext);
    const posts = useSelector(state => state.posts[0]);
    const dispatch = useDispatch();


    useEffect(() => {
        setHeaderNavState("Posts")
        if (!posts) {

            dispatch(getPosts())

        }

    }, [posts])




    return (
        <div className="postList">
            <Outlet></Outlet>
            {posts && posts.map((el, index) =>
                <Post
                    key={el.id + index}
                    userID={el.userId}
                    title={el.title}
                    postText={el.body}
                    postId={el.id}
                />
            )}

        </div>
    )
}