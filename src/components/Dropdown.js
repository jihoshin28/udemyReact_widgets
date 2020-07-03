import React, {useState, useEffect, useRef} from 'react'

const Dropdown = ({options, selected, onSelectedChange}) => {
    const [open, setOpen] = useState(false)
    const ref = useRef()

    useEffect(()=> {
        console.log(open)
        document.body.addEventListener('click', (e) => {
          
            if(ref.current.contains(e.target)){
                console.log("body")
                return
            }
                console.log(open, "body")
                
            setOpen(false)
        })
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

    console.log(ref.current, ref)
    
    return (

        <div ref = {ref} class = "ui form">
            <div className = "field">
                <label className = "label">Select a Color</label>
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