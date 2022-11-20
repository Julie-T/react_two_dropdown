import React from 'react'
import PropTypes from 'prop-types'
import '../css/main.css'

const DropdownList = (props) => {

  const [choice, setChoice] = React.useState(false)

  const viewElements = props.isShow ? props.elements.map((item) => 
    <li className='listItem' key={2+item.id}>
      <button key={item.id} 
        className= {`droppedItem_${choice}`}
        onClick={() => {
            setChoice(!item.value)
            item.value = !item.value
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
