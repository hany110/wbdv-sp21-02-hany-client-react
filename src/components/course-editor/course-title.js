import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";
import{connect} from 'react-redux';
import courseService from '../../services/course-service';

const CourseTitle=(
    {
        course_title={},
        findCourseTitleForCourseId
    })=>{
    const {layout, courseId, moduleId} = useParams();
    useEffect(()=>{
        findCourseTitleForCourseId(courseId)
    },[])
return(
    <>
        {course_title.title}
    </>
)
}
const stpm=(state) => {
    return{
        course_title: state.courseTitleReducer.course_title
    }
}
const dtpm=(dispatch) => {
    return{
        findCourseTitleForCourseId: (courseId) => {
            courseService.findCourseTitleForCourseId(courseId)
                .then(course_title => dispatch({
                        type: "FIND_COURSE_TITLE",
                        course_title: course_title
                    })
                )
        }
    }
}
export default connect(stpm,dtpm) (CourseTitle)