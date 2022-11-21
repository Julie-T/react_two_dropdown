import React from 'react'
import PropTypes from 'prop-types'
import '../css/main.css'

const DropdownList = (props) => {

  const [elements, setElements] = React.useState(props.elements)
  const choiceHandle = (item) => {
    
    const newElements = elements.map(element => {
      if (item.name === element.name) {
        element.value = true;
      } else element.value = false; 
      return element;
    })

    setElements(newElements)
    console.log("asd", elements)
  }

  const viewElements = props.isShow ? elements.map((item) => 
    <li className={item.value ? 'list_item item_is_active' : 'list_item item_is_inactive'} key={item.id}>
      <a href='#'
        className= 'item'
        onClick={() => choiceHandle(item)}> 
        {item.name} 
      </a>
    </li>) : <></>
  return (
    <div className= { props.isShow ? 'list list_open' : 'list list_close'}>
      {viewElements} 
    </div>
  )
}

DropdownList.propTypes = {}

export default DropdownList 
