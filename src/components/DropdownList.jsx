import React, { useState} from 'react'
import PropTypes from 'prop-types'
import items from '../models/DropdownItem'

const DropdownList = (props) => {

  const [choice, setChoice] = React.useState(false)

  const viewElements = props.isShow ? props.elements.map((item) => 
    <li key={2+item.id}>
      <button key={item.id} 
        className= {`droppedItem_${choice}`} 
        isсhosen={choice} 
        onClick={() => {
            setChoice(!items.value)
            items.value = !items.value
          }}> 
        {item.name} 
      </button>
    </li>) : ''
  return (
    <div>
      {viewElements} 
    </div>
  )
}

DropdownList.propTypes = {}

export default DropdownList 
