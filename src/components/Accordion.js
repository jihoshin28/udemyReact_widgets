import React, {useState} from 'react'

const Accordion = ({items}) => {

    const [activeIndex, setActiveIndex] = useState(null);
    const titleClick = (index) => {
        setActiveIndex(index)
    }

    const renderedItems = items.map ((item, index) => {
        return (
            <React.Fragment key = {item.title}>
                <div
                    className="title active"
                    onClick = {()=> titleClick(index)}
                >
                    <i className = "dropdown icon"></i>
                    {item.title}
                </div>
                <div className="content active">
                    <p>{item.content}</p>
                </div>
            </React.Fragment>
        )
    })
    return (
        <div>
            <div className = "ui styled accordion">
                {renderedItems}
            </div>
            <div>
                <h1>{activeIndex}</h1>
            </div>
        </div>
    )
}

export default Accordion