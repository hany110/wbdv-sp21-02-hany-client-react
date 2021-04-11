import React, {useState, useEffect} from 'react'
import HeadingWidget from "./heading-widget";
import ParagraphWidget from "./paragraph-widget";
import {useParams} from "react-router-dom";
import {connect} from "react-redux";
import widgetService from '../../services/widget-service'
import ListWidget from "./list-widget";
import ImageWidget from "./image-widget";

const WidgetList = ({
    widgets=[],
    findWidgetsForTopic, createWidgetForTopic, deleteWidget, updateWidget
}
) => {
    const {layout,courseId, moduleId, lessonId,topicId, widgetId} = useParams();
    // TODO: move all state handling to widgets-reducer.js
    // const [widgets, setWidgets] = useState([])
    // const [widget, setWidget] = useState({})
    // const [widget,setWidget] = useState({})
    useEffect(() => {
        // TODO: move all server communication to widgets-service.js
        // fetch(`http://localhost:8080/api/topics/${topicId}/widgets`)
        //     .then(response => response.json())
        //     .then(widgets => setWidgets(widgets))
        console.log("LOAD WIDGETS FOR TOPIC: " + topicId)
        findWidgetsForTopic(topicId)
    }, [topicId])
    return(
        <div className="mt-4">
            <i onClick={() => createWidgetForTopic(topicId)} className="fas fa-plus float-right fa-2x"></i>
            <h1>Widget List
                {/*{widgetId}*/}
            </h1>
            <ul className="list-group">
                {
                    widgets.map(_widget =>
                        <li key={_widget.id} className={`list-group-item ${widgetId === _widget.id ? 'active' : ''}`}>
                            {
                                _widget.type === "HEADING" &&
                                <HeadingWidget
                                    to={`/courses/${layout}/edit/${courseId}/modules/${moduleId}/lessons/${lessonId}/topics/${topicId}/widgets/${_widget.id}`}
                                    deleteItem={deleteWidget}
                                    updateItem={updateWidget}
                                    _widget={_widget}
                                />
                            }
                            {
                                _widget.type === "PARAGRAPH" &&
                                <ParagraphWidget
                                    to={`/courses/${layout}/edit/${courseId}/modules/${moduleId}/lessons/${lessonId}/topics/${topicId}/widgets/${_widget.id}`}
                                    deleteItem={deleteWidget}
                                    updateItem={updateWidget}
                                    _widget={_widget}
                                />
                            }
                            {
                                _widget.type === "LIST" &&
                                <ListWidget
                                    to={`/courses/${layout}/edit/${courseId}/modules/${moduleId}/lessons/${lessonId}/topics/${topicId}/widgets/${_widget.id}`}
                                    deleteItem={deleteWidget}
                                    updateItem={updateWidget}
                                    _widget={_widget}
                                />
                            }
                            {
                                _widget.type === "IMAGE" &&
                                <ImageWidget
                                    to={`/courses/${layout}/edit/${courseId}/modules/${moduleId}/lessons/${lessonId}/topics/${topicId}/widgets/${_widget.id}`}
                                    deleteItem={deleteWidget}
                                    updateItem={updateWidget}
                                    _widget={_widget}
                                />
                            }
                        </li>
                    )
                }
            </ul>
        </div>
    )
}
const stpm = (state) => ({
    widgets: state.widgetReducer.widgets
})

//findWidgetsForTopic, createWidgetForTopic, deleteWidget, updateWidget
const dtpm = (dispatch) => ({
    findWidgetsForTopic: (topicId) => {
        // console.log("LOAD TOPICS FOR LESSON:")
        // console.log(lessonId)
        widgetService.findWidgetsForTopic(topicId)
            .then(widgets => dispatch({
                type: "FIND_WIDGETS",
                widgets
            }))
    },
    createWidgetForTopic: (topicId) => {
        console.log("CREATE WIDGET FOR TOPIC: " + topicId)
        if(Object.is(topicId,"undefined")||Object.is(topicId,undefined)){
            alert("Please select a topic first to add a widget")
        }
        else{
            widgetService.createWidgetForTopic(topicId, {type: "HEADING", size: 2,
                text: "New Widget"})
                .then(widget => dispatch({
                    type: "CREATE_WIDGET",
                    widget
                }))
        }
    },
    deleteWidget: (item) =>
        widgetService.deleteWidget(item.id)
            .then(status => dispatch({
                type: "DELETE_WIDGET",
                widgetToDelete: item
            })),
    updateWidget: (widget) =>
        widgetService.updateWidget(widget)
            .then(status => dispatch({
                type: "UPDATE_WIDGET",
                widget
            })),
})

export default connect(stpm, dtpm)(WidgetList)