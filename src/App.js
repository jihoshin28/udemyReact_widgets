import React, {useState} from 'react'
import Accordion from './components/Accordion'
import Dropdown from './components/Dropdown'
import Search from './components/Search'
import axios from 'axios'

const items = [
    {
        title: "What is React?",
        content: "React is a front end javascript framework"
    },
    {
        title: "Why use React?",
        content: 'React is a favorite JS library among engineers'
    },
    {
        title: "How do you use React?",
        content: "You use React by creating components and manging their state"
    }
]

const options = [
    {
        label: "The Color Red",
        value: "red"
    },
    {
        label: "The Color Green",
        value: "green"
    },
    {
        label: "The Color Blue",
        value: "blue"
    }
]

const App = () => {
    const [selected, setSelected] = useState(options[0])
    const [dropdown, setDropdown] = useState(true)
    return (
        
        <div>
            <h1>Widgets App</h1>
            <button onClick={() => setDropdown(!dropdown)}>Toggle Dropdown</button>
            {
                dropdown ? <Dropdown options={options} selected={selected} onSelectedChange={setSelected} /> : null
            }
            
        </div>
    )
}

export default App