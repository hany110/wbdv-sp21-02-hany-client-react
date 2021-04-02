import './App.css';
import CourseManager from "./components/course-manager";
import CourseEditor from "./components/course-editor/course-editor";
import {BrowserRouter, Route} from "react-router-dom";
import Home from "./components/home"

function App() {
  return (
      <BrowserRouter>
        <div className="container-fluid">
          <Route path="/" exact={true}  component={Home}/>
          <Route path="/course" component={CourseManager}/>
          {/*<Route path="/editor" component={CourseEditor}/>*/}
          {/*<Route path="/editor" exact={true} render={(props) => <CourseEditor {...props}/>}/>*/}
            <Route path={[
                           "/courses/:layout/edit/:courseId",
                           "/courses/:layout/edit/:courseId/modules/:moduleId",
                           "/courses/:layout/edit/:courseId/modules/:moduleId/lessons/:lessonId",
                           "/courses/:layout/edit/:courseId/modules/:moduleId/lessons/:lessonId/topics/:topicId",
                           "/courses/:layout/edit/:courseId/modules/:moduleId/lessons/:lessonId/topics/:topicId/:widgetId"
                       ]}
                   exact={true}
                   render={(props) => <CourseEditor {...props}/>}/>
        </div>
      </BrowserRouter>
  );
}

export default App;
