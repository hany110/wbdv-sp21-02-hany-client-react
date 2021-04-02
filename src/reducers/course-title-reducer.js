const initialState = {
    course_title: ""

}
const courseTitleReducer = (state=initialState, action) => {
    switch (action.type) {
        case "FIND_COURSE_TITLE":
            return {
                course_title: action.course_title
            }
        default:
            return state
    }
}
export default courseTitleReducer