import React, {useEffect} from 'react'
import {Link, useParams} from "react-router-dom";
import moduleReducer from "../../reducers/modules-reducer";
import lessonReducer from "../../reducers/lesson-reducer";
import topicReducer from "../../reducers/topic-reducer";
import {combineReducers, createStore} from "redux";
import {Provider, connect} from "react-redux";
import ModuleList from "./module-list";
import LessonTabs from "./lesson-tabs";
import TopicPills from "./topic-pills";
import courseService from "../../services/course-service";
import WidgetList from "../widgets/widget-list";
import widgetReducer from "../../reducers/widget-reducer"
import CourseTitle from "./course-title";
import courseTitleReducer from "../../reducers/course-title-reducer";


const reducer = combineReducers({
    moduleReducer: moduleReducer,
    lessonReducer: lessonReducer,
    topicReducer: topicReducer,
    widgetReducer,
    courseTitleReducer: courseTitleReducer
})

const store = createStore(reducer)

const CourseEditor = ({history}) => {
    const {layout, courseId, moduleId} = useParams();
    return (
    <Provider store={store}>
        <div>
            <h3>
                <Link to={`/course/${layout}`}>
                    <i className="fas fa-times"></i>
                </Link>
                <CourseTitle/>
            </h3>
            <div className="row">
                <div className="col-4">
                    <ModuleList/>
                </div>
                <div className="col-8">
                    <LessonTabs/>
                    <div>
                        <TopicPills/>
                        <br/>
                        <WidgetList/>
                    </div>

                </div>
            </div>
        </div>
    </Provider>)
}
export default CourseEditor