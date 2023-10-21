import React, { Component } from 'react'
import './AddItem.css'
export default class Additem extends Component {
  state = {
    name:'',
    age:''
  }
  handlechange = (event) =>{
    this.setState({
      [event.target.id] : event.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    if (e.target.name.vlue === '' && e.target.age.vlue === '') {
      return false
    } else {
      this.props.addItem(this.state);
      this.setState({
        name:'',
        age:''
      })
    }
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" placeholder='Enter Name.......' id='name' className='input-name' onChange={
            this.handlechange
          } value = {this.state.name} />
          <input type="number" placeholder='Enter Age.......' id='age' className='input' onChange={
            this.handlechange
          } value = {this.state.age} />
          <input type="submit" value= 'Add' className='add' />
        </form>
      </div>
    )
  }
}
