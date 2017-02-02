import React, {Component} from 'react';
import {View} from 'react-native';

export default class Section extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<View style={{marginBottom: 15}}>
				{this.props.children}
			</View>
		);
	}
}


