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
        console.log(id)
        fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
        .then(res=>res.json())
        .then(resJson=>{
            console.log(resJson)
            this.setState({selectedUserPosts:resJson})
        })
this.setState({selectedId:id})
    }
    deletePost(id){
          console.log(`delete post was clicked`, id)
  const stateCopy={...this.state}
  console.log(stateCopy)
const newPosts= stateCopy.selectedUserPosts.filter(post=>post.id!==id)
console.log(newPosts)
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
// class UserList extends Component{
//     componentWillReceiveProps(){
//         console.log(this.props)
//     }
//     render(){
//         return(<div>hi</div>)
//     }
// }
export default UserList