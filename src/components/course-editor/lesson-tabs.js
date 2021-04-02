import React, {useEffect} from 'react'
import {connect} from "react-redux";
import EditableItem from "../editable-item";
import {useParams} from "react-router-dom";
import lessonService from '../../services/lesson-service'

const LessonTabs = (
    {
        lessons=[
            {_id: "123", title: "Lesson A"},
            {_id: "123", title: "Lesson B"},
            {_id: "123", title: "Lesson C"}
        ],
        findLessonsForModule,
        createLessonForModule,
        deleteLesson,
        updateLesson
    }) => {
    const {layout, courseId, moduleId, lessonId} = useParams();
    useEffect(() => {
        console.log("LOAD LESSONS FOR MODULE: " + moduleId)
         if(moduleId !== "undefined" && typeof moduleId !== "undefined") {
            findLessonsForModule(moduleId)
         }
    }, [courseId,moduleId])
    return(
    <div>
        {<h5>Lessons</h5>}
        <ul className="nav nav-pills mt-2">
            {
                lessons.map(lesson =>
                    <li className={`nav-item ${lesson._id === lessonId ? 'active' : ''} ml-1 set-pill-size`} key={lesson._id}>
                        <EditableItem
                            active={lesson._id === lessonId}
                            to={`/courses/${layout}/edit/${courseId}/modules/${moduleId}/lessons/${lesson._id}`}
                            deleteItem={deleteLesson}
                            updateItem={updateLesson}
                            item={lesson}/>
                    </li>
                )
            }
            <li className="nav-item ml-1">
                <i onClick={() => createLessonForModule(moduleId)} className="fa fa-plus float-right"></i>
            </li>
        </ul>
    </div>)}

const stpm = (state) => ({
    lessons: state.lessonReducer.lessons
})
const dtpm = (dispatch) => ({
        findLessonsForModule: (moduleId) => {
        if(Object.is(moduleId,"undefined")||Object.is(moduleId,undefined))
                    {
                         console.log("LOAD LESSONS FOR MODULE:")
                                console.log(moduleId)
                    }
        else{ lessonService.findLessonsForModule(moduleId)
            .then(lessons => dispatch({
                type: "FIND_LESSONS",
                lessons
            }))
    }
    },
    createLessonForModule: (moduleId) => {
        console.log("CREATE LESSON FOR MODULE: " + moduleId)
        // if(moduleId==="undefined" || typeof moduleId !== "undefined")
        if(Object.is(moduleId,"undefined")||Object.is(moduleId,undefined))
        {
            alert("Select a module")
        }
        else{
        lessonService.createLessonForModule(moduleId, {title: "New Lesson"})
            .then(lesson => dispatch({
                type: "CREATE_LESSON",
                lesson
            }))
        }
    },
    deleteLesson: (item) =>
        lessonService.deleteLesson(item._id)
            .then(status => dispatch({
                type: "DELETE_LESSON",
                lessonToDelete: item
            })),
    updateLesson: (lesson) =>
        lessonService.updateLesson(lesson._id, lesson)
            .then(status => dispatch({
                type: "UPDATE_LESSON",
                lesson
            })),
})

export default connect(stpm, dtpm)(LessonTabs)