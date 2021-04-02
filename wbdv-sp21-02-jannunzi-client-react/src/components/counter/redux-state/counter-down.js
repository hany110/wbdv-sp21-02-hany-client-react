import React from 'react'
import {connect} from 'react-redux'

const CounterDown = ({down}) =>
    <button onClick={down}>
        Down
    </button>

const stpm = (state) => {}
const dtpm = (dispatch) => {
    return {
        down: () => {
            dispatch({type: "DOWN"})
        }
    }
}

export default connect(stpm, dtpm)
                    (CounterDown)
