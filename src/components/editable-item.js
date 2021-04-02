import React, {useState} from 'react'
import {Link} from "react-router-dom";

const EditableItem = (
    {
        to="/somewhere/to/go",
        deleteItem,
        updateItem,
        item={title: "Some Title", _id:"ABC"},
        active
    }) => {
    const [editing, setEditing] = useState(false)
    const [cachedItem, setCahedItem] = useState(item)
    return (
        <>
            {
                !editing &&
                <>
                    <div>
                        <Link className={`nav-link black-color ${active?'active':''}`} to={to}>
                            {item.title}
                            {/*{JSON.stringify(active)}*/}
                            <i onClick={() => setEditing(true)} className="pl-1 fa fa-pen float-right"></i>
                        </Link>
                    </div>
                </>
            }
            {
                editing &&
                <>
                    <input
                        onChange={(e) =>
                            setCahedItem({
                                ...cachedItem,
                                title: e.target.value
                            })}
                        value={cachedItem.title}/>
                    <i onClick={() => {
                        setEditing(false)
                        updateItem(cachedItem)
                    }} className="fas fa-check green-color"></i>
                    <i onClick={() => {
                        setEditing(false)
                        deleteItem(item)
                    }
                    } className="fas fa-times red-color"></i>
                </>
            }
        </>
    )
}
export default EditableItem