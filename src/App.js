import React from 'react';
import Switch from "./RoundSwitch"
import './App.css';

class App extends React.Component{
	constructor(props){
		super(props);
		this.state={
			currTime:"" ,
			currDate:"",
			showDate: "none"
		}
		this.showDate = this.showDate.bind(this);
	}

	componentDidMount(){
		setInterval(()=>{
			this.setState({
				currTime: new Date().toLocaleTimeString(),
				currDate: new Date().toDateString()
			})
		})
	}

	showDate(isChecked){
		var showDate = "none";
		if(isChecked)
			showDate = "block";
		this.setState({
			showDate
		})
	}

	render(){
		return(
		<div className="mainDiv">
			{/* <header>
			<h1>Basic Clock</h1>
			</header> */}
			<div className="mainBody">
				<div className="clock">
					<div className="showDate">
						<Switch a={this.showDate}/>
						<label id="dateLabel">Date</label>
					</div>
					<div className="time">
						{this.state.currTime}
					</div>
					<div className="date" style={{display:this.state.showDate}}>
						{this.state.currDate}
					</div>
				</div>
			</div>
		</div>
		)
	}
}

export default App;
