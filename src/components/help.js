import React, {Component} from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';

export default class Help extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<View style={{flex: 1, alignItems: 'center', justifyContent: 'center' }}>
				<Text>This is a sample counter app.</Text>
				<Text>Press Increase to add 1 to the value.</Text>
				<Text>Press Decrease to subtract 1 from the value.</Text>
			</View>
		);
	}
}

