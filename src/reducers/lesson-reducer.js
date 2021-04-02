const initialState = {
    lessons: []
}

const lessonReducer = (state=initialState, action) => {
    switch (action.type) {
        case "CREATE_LESSON":
            return {
                ...state,
                lessons: [
                    ...state.lessons,
                    action.lesson
                ]
            }
        case "FIND_LESSONS":
            return {
                ...state,
                lessons: action.lessons
            }
        case "DELETE_LESSON":
            return {
                ...state,
                lessons: state.lessons.filter(lesson => {
                    if(lesson._id !== action.lessonToDelete._id) {
                        return true
                    } else {
                        return false
                    }
                })
            }
        case "UPDATE_LESSON":
            return {
                ...state,
                lessons: state.lessons.map(lesson => {
                    if(lesson._id === action.lesson._id) {
                        return action.lesson
                    } else {
                        return lesson
                    }
                })
            }
        default:
            return state
    }
}

export default lessonReducer