import React, {Component} from 'react'
import PostList from './PostList'

class UserList extends Component{
    constructor(){
        super()
        this.state={
            selectedUserPosts:[]
        }
    }
    getSelectedPosts(id){
        fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
        .then(res=>res.json())
        .then(resJson=>{
            this.setState({selectedUserPosts:resJson})
        })
this.setState({selectedId:id})
    }
    deletePost(id){
  const stateCopy={...this.state}
const newPosts= stateCopy.selectedUserPosts.filter(post=>post.id!==id)
this.setState({selectedUserPosts:newPosts})
  
    }
    render(){
        const userList=this.props.users.map((user, index)=>{
            return <div className='user'>
                <ul key={index}>
                    <li onClick={()=>this.getSelectedPosts(user.id)}>{user.name}</li>
                    </ul>
                    </div>
        })
        return(
            <div className='container'>
            <div className='user-list'>
                {userList}
            </div>
            <PostList
            posts={this.state.selectedUserPosts} 
            deletePost={(id)=>this.deletePost(id)}/>
            </div>
        )
    }

}

export default UserList