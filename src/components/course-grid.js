import React from 'react'
import CourseCard from "./course-card";
import {Link} from "react-router-dom";
import MetaTags from 'react-meta-tags';


export default function CourseGrid(props){
    let mappedCourses;
    return(
            <div className="container-fluid">
                <MetaTags>
                    <meta name="viewport" content="width=device-width, initial-scale=1"/>
                </MetaTags>
                    <div className="row">
                    <div className="col-4">
                        <p className="d-none d-sm-table-cell make-bold">Recent Documents</p>
                    </div>
                    <div className="col-3">
                        <p className="d-none d-sm-table-cell make-bold">Owned by me
                            <i className="fa fa-caret-down"></i></p>
                    </div>
                    <div className="col-1">
                        <i className="fas fa-folder black-color float-right"></i>
                    </div>
                    <div className="col-1">
                        <i className="fas fa-sort-alpha-down float-right"></i>
                    </div>
                    <div className="col-1">
                        <Link to="/course/table">
                            <i className="fas fa-list black-color float-right"></i>
                        </Link>
                    </div>
                </div>
                <div className="row">
                    {
                        mappedCourses=props.courses.map(course =>
                            <CourseCard
                                key={course._id}
                                deleteCourse={props.deleteCourse}
                                updateCourse={props.updateCourse}
                                course={course}
                                title={course.title}
                                lastModified={course.lastModified}
                                owner={course.owner}/>
                        // return(console.log(course._id),
                        // deleteCourse=props.deleteCourse,
                        // updateCourse=props.updateCourse,
                        // console.log(course),
                        // console.log(course.title),
                        // console.log(course.lastModified),
                        // console.log(course.owner))
                    )

                    }
                </div>
            </div>
        );

}
