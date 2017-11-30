import React, { Component } from 'react'; 
import { Text } from 'react-native'; 


class MultiColorText extends Component{
	
	constructor(props){
		super(props);
		this.state = { redText: true }; 
		setInterval(() => this.setState({
			redText: !redText
		}), 5000); 
	}


	componentDidMount(){

		alert(this.state.redText);
		

	}


	render(){

		let style = { color: this.state.redText ? 'purple' : 'blue'}; 
		return (
			<Text style={style}>Multi Color Text</Text>
		);
	}
}

export default MultiColorText;