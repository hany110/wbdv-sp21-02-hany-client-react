import React from 'react'
import {Link} from "react-router-dom";


const CourseEditor = ({history}) =>
{
return(
    <div className="container">
        <h3>
            <Link to="/courses/table">
                <i className="fas fa-arrow-left"></i>
            </Link>
            Course Editor
            <i className="fas fa-times float-right"
               onClick={() => history.goBack()}></i>
        </h3>
                    <div class="row">
                        <div class="col-4">
                            <ul class="list-group">
                                <li class="list-group-item">
                                    Unselected Module 1
                                    <i class="fas fa-pen float-right"></i>
                                </li>
                                <li class="list-group-item bd">Editing Module 2 <i class="fas fa-check float:right;"></i> <i class="fas fa-times position:absolute; right:50px;"> </i></li>
                                <li class="list-group-item">Unselected Module 3 <i class="fas fa-pen float:right;"></i> </li>
                                <li class="list-group-item">Unselected Module 4 <i class="fas fa-pen float:right;"></i> </li>
                                <li class="list-group-item active">Selected Module 5<i class="fas fa-pen float:right;"></i> </li>
                                <li class="list-group-item">
                                    <i class="fas fa-plus-circle"></i>
                                </li>
                            </ul>
                        </div>
                        <div class="col-8">
                            <ul class="nav nav-tabs">
                                <li class="nav-item">
                                    <a class="nav-link" aria-current="page" href="#">
                                        Lesson 1  <i class="fas fa-pen float:right;"></i>
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link active" href="#"> Selected Lesson 2 <i class="fas fa-pen float:right;"></i></a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">Lesson 3 <i class="fas fa-pen float:right;"></i></a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link bd" href="#" tabindex="-1" aria-disabled="true">Edit Lesson 4 <i class="fas fa-check float:right;"></i> <i class="fas fa-times position:absolute; right:190px;"> </i></a>
                                </li>

                                <li class="nav-item">
                                    <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">New Lesson</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">
                                        <i class="fas fa-plus-circle"></i>
                                    </a>
                                </li>
                            </ul>

                            <br/>

                            <ul class="nav nav-pills">
                                <li class="nav-item">
                                    <a class="nav-link active" aria-current="page" href="#">Selected Topic 1 <i class="fas fa-pen float:right;"></i></a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">Topic 2  <i class="fas fa-pen float:right;"></i></a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">Topic 3 <i class="fas fa-pen float:right;"></i></a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link disabled bd" href="#" tabindex="-1" aria-disabled="true">Editing Topic 4 <i class="fas fa-check float:right;"></i> <i class="fas fa-times position:absolute; right:230px;"> </i></a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">New Topic</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">
                                        <i class="fas fa-plus-circle"></i>
                                    </a>
                                </li>
                            </ul>
                                <br/>
                        </div>
                    </div>
                </div>

)
}
// const CourseEditor = () => {
//   return (
//     <h1>Course Editor</h1>
//   )
// }
export default CourseEditor
