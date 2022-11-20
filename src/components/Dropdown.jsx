import React from 'react'
import PropTypes from 'prop-types'
import DropdownList from './DropdownList'
import items from '../models/DropdownItem'
import '../css/main.css'

const Dropdown = (props) => {

    const [count, setCount] = React.useState(true)

    const handleClick = (e) => {
        setCount(!count)
        console.log(count)
    }

    return (
    <div className='container'>
    <div className='list_wrapper'>
        <button className='mainButton' onClick={() => handleClick()}>
        <span>Account Settings</span>
        <i className="material-icons">public</i>
        </button>
        
        <DropdownList className='list' isShow={count} elements={items}/>
        </div>
    </div>
  )
}

Dropdown.propTypes = {}

export default Dropdown
