import React from 'react'
import CounterDisplay from "./counter-display";
import CounterUp from "./counter-up";
import CounterDown from "./counter-down";

export default class CounterReact extends React.Component {
    state = {
        count: 123
    }

    up = () => {
        this.setState((prevState) => {
            return {
                count: prevState.count + 1
            }
        })
    }
    down = () => {
        this.setState((prevState) => {
            return {
                count: prevState.count - 1
            }
        })
    }
    render() {
        return (
            <div>
                <CounterDisplay count={this.state.count}/>
                <CounterUp up={this.up}/>
                <CounterDown down={this.down}/>
            </div>
        );
    }
}
