import React, {Component} from 'react';
import {Linking, Text} from 'react-native';

const styles = {
	mylink: {
		color: 'cornflowerblue',
		textDecorationLine: 'underline',
	},
};

export default class MyLink extends Component {
	constructor(props) {
		super(props);
	}

	handleClick = () => {
		Linking.canOpenURL(this.props.url).then(supported => {
			if (supported) {
				Linking.openURL(this.props.url);
			} else {
				console.log('Don\'t know how to open URI: ' + this.props.url);
			}
		});
	};

	render() {
		return (
			<Text
				{...this.props}
				style={[styles.mylink, this.props.style]}
				onPress={this.handleClick}
			>
				{this.props.children}
			</Text>
		);
	}
}



