import React, { Component } from 'react'
import './App.css'
import TodoItem from './Component/todoitem/TodoItem'
import AddItem from './Component/additem/AddItem'
export default class App extends Component {
  state = {
    items : [
      {id:1 , name : 'Ahmed' , age : 21},
      {id:2 , name : 'Mohamed' , age : 22},
      {id:3 , name : 'Ibrahim' , age : 24},
      {id:4 , name : 'Yasser' , age : 28},
      {id:5 , name : 'Hamza' , age : 5},
    ]
  }
  // deleteItem = (id) =>{
  //   let items = this.state.items;
  //   let i = items.find(item => item.id === id)
  //   items.splice(i,1)
  //   // items.setState({items:items})
  //   this.setState({items})
  // }  
  deleteItem = (id) => {
    let items = this.state.items.filter(item => {
      return item.id !== id
    })
    // items.setState({items:items})
    this.setState({items})
  }
  addItem = (item) => {
    item.id = Math.floor(Math.random()*100);
    if (item.age === '' && item.age === '') {
      return alert("Shoud Enter Valid Data and not Leave Inputs Empty")
    } else {
    let items =this.state.items;
    items.push(item)
    console.log(item)
    // this.setState({items:items})
    this.setState({items})
    }
  }
  render() {
    return (
      <div className='container'>
        <h1 className='text-Center'>To Do List</h1>
        <TodoItem items = {this.state.items} deleteItem = {this.deleteItem} />
        <AddItem  addItem = {this.addItem}/>
      </div>
    )
  }
}

