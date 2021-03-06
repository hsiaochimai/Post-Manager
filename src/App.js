import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import UserList from './UserList'
import { conditionalExpression } from '@babel/types';


class App extends Component{
constructor(){
  super()
  this.state=
  {users: []}
}
getUsers(){
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(res=>res.json())
  .then(resJson=>{
    this.setState({users:resJson}, ()=>{})
  })
}
getPosts(){
  fetch('https://jsonplaceholder.typicode.com/posts')
  .then(res=>res.json())
  .then(resJson=>{
    this.setState({posts:resJson}, ()=>{})
  })
}

componentWillMount(){
  this.getUsers()
  }
  render(){
   const {users, posts}= this.state
    return (
      <div className="App">
        <header className="App-header">
         <h2>Post Manager</h2>
         <UserList users={users}
          posts={posts}
          />
        </header>
      </div>
    );
  }
  
}

export default App;
