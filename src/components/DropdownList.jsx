import React from 'react'
import PropTypes from 'prop-types'

const DropdownList = (props) => {

  const viewElements = props.isShow ? props.elements.map((item) => <li><button className='droppedItem' key={item.id} isChosen={item.value}> {item.name} </button></li>) : props.elements.map((item) => <li><button className='hiddenItem' key={item.id}> {item.name} </button></li>)
  return (
    <div>
      {viewElements} 
    </div>
  )
}

DropdownList.propTypes = {}

export default DropdownList 
