import React, {useState, useEffect, useRef} from 'react'

const Dropdown = ({options, selected, onSelectedChange, dropdownTitle}) => {
    const [open, setOpen] = useState(false)
    const ref = useRef()

    useEffect(()=> {
        console.log(open)
        const handler = (e) => {

            if (ref.current.contains(e.target)) {
                console.log("body")
                return
            }

            setOpen(false)
        }
        document.body.addEventListener('click', handler)
        return () => {
            document.body.removeEventListener('click', handler)
        }
    }, [])

    const renderedOptions = options.map((option) => {
        return (
            <div onClick = {() => {
                onSelectedChange(option)
                console.log("child")
                }} className = "item" key = {option.value}>
                {option.label}
            </div>
        )
    })

    
    return (

        <div ref = {ref} class = "ui form">
            <div className = "field">
                <label className = "label">{dropdownTitle ? dropdownTitle: 'Select a Color'}</label>
                <div onClick= {() => {
                    setOpen(!open) 
                    console.log("parent")
                    }}className = {`ui selection dropdown ${open ? 'visible active': ''}`}>
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