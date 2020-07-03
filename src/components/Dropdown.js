import React, {useState} from 'react'

const Dropdown = ({options, selected, onSelectedChange}) => {
    const [open, setOpen] = useState(false)
    const renderedOptions = options.map((option) => {
        return (
            <div onClick = {() => onSelectedChange(option)} className = "item" key = {option.value}>
                {option.label}
            </div>
        )
    })

    
    
    return (
        <div class = "ui form">
            <div className = "field">
                <label className = "label">Select a Color</label>
                <div onClick = {() => setOpen(!open)}className = {`ui selection dropdown ${open ? 'visible active': ''}`}>
                    <i className = "dropdown icon"></i>
                    <div className = "text"> {selected.label} </div>
                    <div className= {`menu ${ open ? 'visible transition': ''}`}>
                        {renderedOptions}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dropdown