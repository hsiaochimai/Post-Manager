import React from 'react'

function PostList(props){
    console.log(props)
    const post=props.posts.map((post, index)=>
    <div className='post'>
        <h3>{post.title}</h3>
        <p>{post.body}</p>
        <button>Delete</button>
    </div>)
    return(
        <div className='post-list'>Post List
        {post}
        </div>
    )
}
export default PostList