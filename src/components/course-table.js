import React from 'react'
import CourseRow from "./course-row";
import {Link} from "react-router-dom";

export default class CourseTable extends
    React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div>
                <table className="table">
                    <thead>
                    <tr>
                        <th scope="col">Title</th>
                        <th scope="col" className="d-none d-sm-table-cell">Owned by</th>
                        <th scope="col" className="d-none d-sm-table-cell">Last modified Date <i
                            className="fa fa-caret-down" aria-hidden="true"></i>
                        </th>
                        <th scope="col" >
                            <i className="fas fa-folder "></i>
                        </th>
                        <th scope="col">
                                <i className="fas fa-sort-alpha-down  black-color" aria-hidden="true"></i>
                        </th>
                        <th scope="col">
                            <Link to="/courses/grid">
                                <i className="fas fa-th black-color"></i>
                            </Link>
                        </th>
                    </tr>

                    </thead>
                    <tbody>
                    {/*<CourseRow title="CS5610" owner="me"/>*/}
                    {/*<CourseRow title="CS3200" owner="you"/>*/}
                    {/*<CourseRow title="CS5200" owner="him"/>*/}
                    {/*<CourseRow title="CS4550" owner="she"/>*/}
                    {
                        this.props.courses.map(course =>
                            <CourseRow
                                key={course._id}
                                deleteCourse={this.props.deleteCourse}
                                updateCourse={this.props.updateCourse}
                                course={course}
                                title={course.title}
                                lastModified={course.lastModified}
                                owner={course.owner}/>)
                    }
                    </tbody>
                </table>
            </div>
        )
    }
}
