import React from "react"
import "./RoundSwitch.css"

class RoundSwitch extends React.Component{

    constructor(props){
        super(props);
        this.state={
            checked : "true"
        }
    }

    render(){
        return (
            <label className="switch">
                <input type="checkbox" onChange={(e)=>this.props.a(e.target.checked)}/>
                <span className="slider round"></span>
            </label>
        )
    }
}

export default RoundSwitch