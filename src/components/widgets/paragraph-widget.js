import React, {useState} from 'react'
import {Link} from "react-router-dom";

const ParagraphWidget = ({to, deleteItem, updateItem,_widget}) => {
    const [editing, setEditing] = useState(false)
    const [widget, setWidget] = useState(_widget)
    return (
        <div>
            {
                editing &&
                    <>
                        <i onClick={() => {
                            deleteItem(_widget)
                            setWidget({})
                            setEditing(false)
                        }
                        }
                           className="fas fa-trash float-right"></i>
                        <i onClick={() => {
                            updateItem(widget)
                            setWidget({})
                            setEditing(false)
                        }} className="fas fa-check float-right"></i>
                        <select onChange={(e) => setWidget(widget => ({...widget,
                            type: e.target.value}))} value={widget.type} className="form-control">
                            <option value={"HEADING"}>Heading</option>
                            <option value={"PARAGRAPH"}>Paragraph</option>
                               <option value={"LIST"}>List</option>
                                           <option value={"IMAGE"}>Image</option>
                        </select>
                        <textarea
                            onChange={(e) => setWidget({...widget, text: e.target.value})}
                            value={widget.text}
                            className="form-control"></textarea>
                    </>

            }
            {
                !editing &&
                <div>
                    <Link to={`#`} className="black-color no-hover" style={{ textDecoration: 'none' }}>
                        <i onClick={() => {setEditing(true)
                            setWidget(_widget)
                        }} className="fas fa-cog float-right"></i>
                        <h5>Paragraph Widget </h5>
                        <p>
                            {_widget.text}
                        </p>
                    </Link>

                </div>

            }
        </div>
    )
}

export default ParagraphWidget