import React, {Component} from "react"



class Buttons extends Component {
    render () {
        return (
            <div className="button">
            <button onClick={this.props.handleClickMinus} >&lt; PREVIOUS</button>
            <button onClick={this.props.handleClickPlus}>NEXT &gt; </button>
            </div>
        )
    }
}

export default Buttons;