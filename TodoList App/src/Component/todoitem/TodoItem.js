import React from 'react'
import './TodoItem.css'
export default function TodoItem(props) {
  const {items , deleteItem} = props;
  let length = items.length;
  const listItem = length ? (items.map((item) => {
    return (
        <tr key={item.id}>
          <td className='name'>{item.name}</td>
          <td className='age'>{item.age}</td>
          <td className='action' onClick={ () => deleteItem(item.id)}>&times;</td>
        </tr>
    )
    })
  ):(
    <tr>
      <td colSpan={3} className='pargraph'>There is no Item to Show</td>
    </tr>
  )
  return (
    <div>
      <table className='listItem'>
        <thead className='head'>
          <tr>
            <th className='name-title'>Name</th>
            <th className='age-title'>Age</th>
            <th className='action-title'>Action</th>
          </tr>
        </thead>
        <tbody className='tbody'>
          {listItem}  
        </tbody>      
      </table>
      
      </div>
  )
}

