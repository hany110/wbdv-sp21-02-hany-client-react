import React, {useState} from 'react'
import {Link} from "react-router-dom";
const CourseCard = ({
                        key,
                        deleteCourse,
                        updateCourse,
                        course,
                        lastModified,
                        owner
                    }) =>
{
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
    <div>
                    <div className="col col-sm-12 card" style={{width: "15rem", margin: "15px" }}>
                        <img src="https://www.valuecoders.com/blog/wp-content/uploads/2016/08/react.png"
                             className="card-img-top" alt="..."/>
                        <div className="card-body">
                            {
                                !editing &&
                                <h5 className="card-title">{course.title}</h5>
                            }
                            {
                                editing &&
                                <input
                                    className="form-control"
                                    onChange={(e) => setTitle(e.target.value)}
                                    value={title}/>
                            }
                            {
                                editing &&
                                <div>
                                    {/*<i onClick={() => setEditing(false)} className="fas fa-times red-color float-right"></i>*/}
                                    {/*<i onClick={() => deleteCourse(course)} className="fas fa-times red-color float-right"></i>*/}
                                    <i onClick={() => saveCourse()} className="fas fa-check green-color float-right"></i>
                                    <i className="bd">Tick to save</i>
                                </div>
                            }
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of
                                the card's content.</p>
                            <Link to="/editor" className="btn btn-primary">
                                {course.title}
                            </Link>
                            {
                                !editing &&
                                <div>
                                    <i onClick={() => setEditing(true)} className="fas fa-edit green-color float-right"></i>
                                    {<i onClick={() => deleteCourse(course)} className="fas fa-trash red-color float-right"></i>}
                                </div>
                            }
                        </div>
                    </div>


     </div>
)

            }


export default CourseCard
