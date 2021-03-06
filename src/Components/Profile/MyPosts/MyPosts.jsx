import React from "react";
import s from './MyPosts.module.css'
import Post from "./Post/Post";
import {addPostActionCreator, onPostChangeActionCreator} from "../../../redux/state";

const MyPosts = (props)=> {

    let postsElements = props.postData.map(p=><Post message={p.postText} likeCount={p.likesCount}/>)

    let newPostElement = React.createRef()

    let addPost = () => {
        props.dispatch(addPostActionCreator())
    }

    let onPostChange = () => {
        let text = newPostElement.current.value
        props.dispatch(onPostChangeActionCreator(text))
    }


  return (
    <div className={s.postsItem}>
        <div>
            <h3> My posts</h3>
            <div >
                <div>
                    <textarea ref={newPostElement} value={props.newPostText} onChange={onPostChange}/>
                </div>
                <div><button onClick={addPost}>add post</button></div>
                <div><button>remove post</button></div>
                </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    </div>)
}
export default MyPosts