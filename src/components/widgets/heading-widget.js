import React, {useState} from 'react';
import {Link, useParams} from "react-router-dom";


const HeadingWidget = ({to, deleteItem, updateItem,_widget}) =>
{
    const [editing, setEditing] = useState(false)
    const [widget, setWidget] = useState(_widget)
    // const {layout,courseId, moduleId, lessonId, topicId,widgetId} = useParams();
return(
    <div>
        {
            editing &&
            // widgetId===widget.id &&
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
                <div>
                    <select onChange={(e) => setWidget(widget => ({...widget,
                        type: e.target.value}))} value={widget.type} className="form-control">
                        <option value={"HEADING"}>Heading</option>
                        <option value={"PARAGRAPH"}>Paragraph</option>
                    </select>
                    <input onChange={(e) => setWidget(widget => ({...widget, text: e.target.value}))}
                           value={widget.text} className="form-control"/>
                    <select onChange={(e) => setWidget(widget => ({...widget,
                        size: parseInt(e.target.value)}))} value={widget.size} className="form-control">
                        <option value={1}>Heading 1</option>
                        <option value={2}>Heading 2</option>
                        <option value={3}>Heading 3</option>
                        <option value={4}>Heading 4</option>
                        <option value={5}>Heading 5</option>
                        <option value={6}>Heading 6</option>
                    </select>
                </div>

            </>
        }
        {
            // parseInt(widgetId)!==widget.id &&
            !editing &&
            <div>
                <Link to={`#`} className="black-color" style={{ textDecoration: 'none' }}>
                    <i onClick={() => {setEditing(true)
                        setWidget(_widget)
                    }} className="fas fa-cog float-right"></i>
                    <h5>Heading Widget </h5>
                    { _widget.size ===1 && <h1>{_widget.text}</h1>}
                    { _widget.size ===2 && <h2>{_widget.text}</h2>}
                    { _widget.size ===3 && <h3>{_widget.text}</h3>}
                    { _widget.size ===4 && <h4>{_widget.text}</h4>}
                    { _widget.size ===5 && <h5>{_widget.text}</h5>}
                    { _widget.size ===6 && <h6>{_widget.text}</h6>}
                </Link>
            </div>
        }
    </div>
)
}
export default HeadingWidget