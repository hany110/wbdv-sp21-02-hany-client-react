import React, {useEffect} from 'react'
import {connect} from "react-redux";
import EditableItem from "../editable-item";
import {useParams} from "react-router-dom";
import topicService from '../../services/topic-service'

const TopicTabs = (
    {
        topics=[
            {_id: "123", title: "Lesson A"},
            {_id: "123", title: "Lesson B"},
            {_id: "123", title: "Lesson C"}
        ],
        findTopics,
        createTopicForLesson,
        deleteTopic,
        updateTopic
    }) => {
    const {layout,courseId, moduleId, lessonId, topicId} = useParams();
    useEffect(() => {
        console.log("LOAD TOPICS FOR LESSON: " + lessonId)
        // if(lessonId !== "undefined" && typeof lessonId !== "undefined") {
        findTopics(lessonId)
        // }
    }, [lessonId])
    return(
        <div>
            {<h5>Topics</h5>}
            <ul className="nav nav-pills mt-5">
                {
                    topics.map(topic =>
                        <li className={`nav-item ml-1 set-pill-size ${topic._id === topicId ? 'active' : ''}`} key={topic._id}>
                            <EditableItem
                                active={topic._id === topicId}
                                to={`/courses/${layout}/edit/${courseId}/modules/${moduleId}/lessons/${lessonId}/topics/${topic._id}`}
                                deleteItem={deleteTopic}
                                updateItem={updateTopic}
                                item={topic}/>
                        </li>
                    )
                }
                <li className="nav-item ml-1">
                    <i onClick={() => createTopicForLesson(lessonId)} className="fas fa-plus float-right"></i>
                </li>
            </ul>
        </div>)}

const stpm = (state) => ({
    topics: state.topicReducer.topics
})
const dtpm = (dispatch) => ({
    findTopics: (lessonId) => {
        // console.log("LOAD TOPICS FOR LESSON:")
        // console.log(lessonId)
        topicService.findTopicsForLesson(lessonId)
            .then(topics => dispatch({
                type: "FIND_TOPICS",
                topics
            }))
    },
    createTopicForLesson: (lessonId) => {
        console.log("CREATE TOPIC FOR LESSON: " + lessonId)
        if(Object.is(lessonId,"undefined")||Object.is(lessonId,undefined)){
          alert("Select a Lesson")
        }
        else{
        topicService.createTopicForLesson(lessonId, {title: "New Topic"})
            .then(topic => dispatch({
                type: "CREATE_TOPIC",
                topic
            }))
        }
    },
    deleteTopic: (item) =>
        topicService.deleteTopic(item._id)
            .then(status => dispatch({
                type: "DELETE_TOPIC",
                topictoDelete: item
            })),
    updateTopic: (topic) =>
        topicService.updateTopic(topic._id, topic)
            .then(status => dispatch({
                type: "UPDATE_TOPIC",
                topic
            })),
})

export default connect(stpm, dtpm)(TopicTabs)