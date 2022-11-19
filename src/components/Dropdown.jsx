import React, { useState} from 'react'
import PropTypes from 'prop-types'
import DropdownList from './DropdownList'
import items from '../models/DropdownItem'

const Dropdown = (props) => {

    const [count, setCount] = React.useState(true)

    const handleClick = (e) => {
        setCount(!count)
        console.log(count)
    }

    return (
    <>
        <button onClick={() => handleClick()}>Account settings</button>
        <DropdownList isShow={count} elements={items}/>
    </>
  )
}

Dropdown.propTypes = {}

export default Dropdown
