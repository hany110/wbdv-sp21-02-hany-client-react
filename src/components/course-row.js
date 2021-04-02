import React, {useState} from 'react'
import {Link} from "react-router-dom";

const CourseRow = (
    {
        course,
        lastModified="1/1/2021",
        owner="who knows?",
        deleteCourse,
        updateCourse
    }) => {
    const [editing, setEditing] = useState(false)
    const [title, setTitle] = useState(course.title)

    const saveCourse = () => {
        setEditing(false)
        const newCourse = {
            ...course,
            title: title
        }
        updateCourse(newCourse)
    }

    return(
        <tr>
            <td>
                {
                    !editing &&
                    <div>
                    <i className="fa fa-file blue-color pr-1"></i>
                        <Link to={`/courses/table/edit/${course._id}`} className="black-color">
                    {/*<Link to="/editor" className="black-color">*/}
                            {course.title}
                        </Link>
                    </div>
                }
                {
                    editing &&
                    <input
                        className="form-control"
                        onChange={(e) => setTitle(e.target.value)}
                        value={title}/>
                }
            </td>
            <td className="d-none d-sm-table-cell">{course.owner}</td>
            <td className="d-none d-sm-table-cell">{course.lastModified}</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>

                {/*<i onClick={() => setEditing((prevEditing) => !prevEditing)} className="fas fa-edit"></i>*/}

                {
                    editing &&
                        <div>
                            {/*<i onClick={() => setEditing(false)} className="fas fa-times red-color"></i>*/}
                            <i onClick={() => saveCourse()} className="fas fa-check green-color"></i>
                            <i onClick={() => deleteCourse(course)} className="fas fa-times red-color"></i>
                        </div>
                }

                {
                    !editing &&
                    <div>
                        <i onClick={() => setEditing(true)} className="fas fa-edit blue-color"></i>
                    </div>
                }


            </td>
        </tr>)
}

export default CourseRow

