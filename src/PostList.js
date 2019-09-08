import React from 'react'

function PostList(props){
    const post=props.posts.map((post, index)=>
    <div key={index}className='post'>
        <h3>{post.title}</h3>
        <p>{post.body}</p>
        <button onClick={()=>props.deletePost(post.id)}>Delete</button>
    </div>)
    return(
        <div className='post-list'>Post List
        {post}
        </div>
    )
}
export default PostList