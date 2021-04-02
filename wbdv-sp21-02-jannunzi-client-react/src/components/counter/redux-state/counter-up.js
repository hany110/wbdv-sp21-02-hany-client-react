import React from 'react'
import {connect} from 'react-redux'

const CounterUp = ({up}) =>
    <button onClick={up}>
        Up
    </button>

const stpm = (state) => {}
const dtpm = (dispatch) => {
    return {
        up: () => {
            dispatch({type: "UP"})
        }
    }
}

export default connect(stpm, dtpm)(CounterUp)
