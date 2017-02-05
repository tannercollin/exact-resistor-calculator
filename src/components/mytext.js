import React, {Component} from 'react';
import {Text} from 'react-native';

const styles = {
	mytext: {
		color: 'black',
	},
};

export default class MyText extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<Text {...this.props} style={[styles.mytext, this.props.style]}>
				{this.props.children}
			</Text>
		);
	}
}



