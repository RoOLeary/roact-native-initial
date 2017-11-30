import React from 'react';
import { StyleSheet, Text, View } from 'react-native'; 

import sharedStyles from './shared-styles';

class RunInfo extends React.Component{
	constructor(props){
		super(props); 
		this.state = { value: this.props.value };

	}
	render(){

		let value = this.state.value ? this.state.value: '='

		return(
			<View style={[sharedStyles.runInfoWrapper, {flex: 1, flexDirection: 'column-reverse'}]}>
				<Text style={sharedStyles.runInfoTitle}>{this.props.name.toUpperCase()}</Text>
				<Text style={sharedStyles.runInfoValue}>{this.props.value}</Text>		
			</View>
		);
	}
}

export default RunInfo;