import React from 'react'
import PropTypes from 'prop-types'
import '../css/main.css'

const DropdownList = (props) => {

  const [choice, setChoice] = React.useState(false)
  const [elements, setElements] = React.useState(props.elements)
  const choiceHandle = (item) => {
    // setChoice(!item.value)
    const newElements = elements.map(element => {
      if (item.name === element.name) {
        element.value = true;
      } else element.value = false; 
      
      return element;
    })

    // item.value = !item.value
    setElements(newElements)
    console.log("asd", elements)
  }

  const viewElements = props.isShow ? elements.map((item) => 
    <li className='listItem' key={item.id}>
      <button 
        className= {item.value ? 'item_is_active' : 'item_is_inactive'}
        onClick={() => choiceHandle(item)}> 
        {item.name} 
      </button>
    </li>) : <></>
  return (
    <div>
      {viewElements} 
    </div>
  )
}

DropdownList.propTypes = {}

export default DropdownList 
