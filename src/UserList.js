import React, {Component} from 'react'
import PostList from './PostList'

class UserList extends Component{
    constructor(){
        super()
        this.state={selectedId:null}
    }
    getSelectedUserId(id){
        console.log(id)
this.setState({selectedId:id})
    }
    render(){
        const userList=this.props.users.map((user, index)=>{
            return <div className='user'>
                <ul key={index}>
                    <li onClick={()=>this.getSelectedUserId(user.id)}>{user.name}</li>
                    </ul>
                    </div>
        })
        const selectedUserPosts=this.props.posts.filter(post=>post.userId===this.state.selectedId)
        return(
            <div className='container'>
            <div className='user-list'>
                {userList}
            </div>
            <PostList posts={selectedUserPosts}/>
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