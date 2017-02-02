import React, {Component} from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';

const styles = StyleSheet.create({
	main: {
		backgroundColor: '#ffffff',
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
});

export default class Menu extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		const { main, help } = this.props;

		return (
			<View style={styles.main}>
				<Text onPress={main}>Calculator</Text>
				<Text onPress={help}>Help</Text>
				<Text>Link 4</Text>
			</View>
		);
	}
}
