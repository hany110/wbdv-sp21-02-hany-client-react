import React from 'react'
import CourseTable from "./course-table";
import CourseGrid from "./course-grid";
import {Link, Route} from "react-router-dom";
import courseService, {findAllCourses, deleteCourse} from "../services/course-service";

export default class CourseManager
    extends React.Component {
    state = {
        courses: [],
        newCourseName: ''
    }

    handleChange = event => {
        this.setState({ newCourseName : event.target.value });
        console.log(this.state.newCourseName)
    };

    componentDidMount() {
        courseService.findAllCourses()
            .then(courses => this.setState({courses}))
        // .then(courses => this.setState({courses: courses}))
    }

    updateCourse = (course) => {
        courseService.updateCourse(course._id, course)
            .then(status => {
                this.setState((prevState) => {
                    let nextState = {...prevState}
                    nextState.courses = prevState.courses.map(c => {
                        if(c._id === course._id) {
                            return course
                        } else {
                            return c
                        }
                    })
                    return nextState
                })
            })
    }

    deleteCourse = (course) => {
        // alert("delete course " + course._id)
        courseService.deleteCourse(course._id)
            .then(status => {
                // this.setState({
                //   courses: this.state.courses.filter(c => c._id !== course._id)
                // })
                this.setState((prevState) => ({
                    courses: prevState.courses.filter(c => c._id !== course._id)
                }))
            })
    }

    addCourse = () => {
        // alert('add course')
        const newCourse = {
            title: this.state.newCourseName,
            owner: "me",
            lastModified: "2/10/2021"
        }
        courseService.createCourse(newCourse)
            .then(actualCourse => {
                this.state.courses.push(actualCourse)
                this.setState(this.state)
            })
        this.setState({newCourseName : ''})

    }

    render() {
        return(
            <div className="container-fluid">
            <div className="row mt-2">
                <div className="col-12 col-md-12 col-lg-12 col-sm-12">
                    <nav className="navbar nav-fill">
                        <i className="fa fa-bars fa-2x black-color"></i>
                        <div className="col-2 col-md-2 d-none d-sm-table-cell">
                            <a className="navbar-brand black-color" href="#">Course Manager</a>
                        </div>
                        <div className="col-7 col-md-7 col-sm-10" id="navbarNav">
                            <ul className="navbar-nav navbar-nav nav-fill">
                                <li className="nav-item">
                                    <input className="form-control wbdv-newcourse-fld"
                                           type="text"
                                           placeholder="New Course"
                                           value={this.state.newCourseName} onChange={this.handleChange}
                                    />
                                </li>
                            </ul>
                        </div>
                        <div className="col-1 col-md-1 col-sm-1">
                            <button className="transparent-button" onClick={this.addCourse}>
                                <i className="fa fa-plus-circle fa-2x float-right red-color"></i>
                            {/*<Link to="/">*/}
                            {/*    <i className="fas fa-2x fa-home float-right black-color"></i>*/}
                            {/*</Link>*/}
                            </button>

                        </div>
                        {/*<div className="col-1 col-md-1 col-sm-1">*/}
                        {/*    /!*<i className="fa fa-plus-circle fa-2x float-right black-color"></i>*!/*/}
                        {/*    <Link to="/">*/}
                        {/*        <i className="fas fa-2x fa-home float-right black-color"></i>*/}
                        {/*    </Link>*/}
                        {/*</div>*/}
                    </nav>
                </div>
            </div>
                {/*<h1>Course Manager</h1>*/}
                {/*<Route path="/courses/table" component={CourseTable}/>*/}
                <Route path="/course/table" exact={true} >
                    <CourseTable
                        updateCourse={this.updateCourse}
                        deleteCourse={this.deleteCourse}
                        courses={this.state.courses}/>
                </Route>
                {/*<Route path="/courses/grid" component={CourseGrid}/>*/}
                <Route path="/course/grid" exact={true} >
                    <CourseGrid
                        updateCourse={this.updateCourse}
                        deleteCourse={this.deleteCourse}
                        courses={this.state.courses}/>
                </Route>
                {/*<CourseTable courses={this.state.courses}/>*/}
                {/*<CourseGrid courses={this.state.courses}/>*/}
                <button className="fixed-button transparent-button" onClick={this.addCourse}>
                    <i className="fa fa-plus-circle fa-4x red-color">
                    </i>
                </button>
            </div>
        )
    }
}
// export default CourseManager
