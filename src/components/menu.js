import React, {Component} from 'react';
import {Image, ScrollView, StyleSheet, View, TouchableOpacity} from 'react-native';

import MyText from './mytext.js';

const styles = {
	main: {
		backgroundColor: '#ffffff',
		flex: 1,
	},
	menutable: {
		borderBottomColor: '#96b885',
		borderBottomWidth: 1,
		padding: 15,
		fontSize: 16,
	},
};

export default class Menu extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		const { main, help } = this.props;

		return (
			<View style={styles.main}>
				<ScrollView>
					<Image style={{alignSelf: 'flex-start', height: 121.30401, width: 250}} source={require('../images/menulogo.png')} resizeMode={'contain'} />
					<MyText style={styles.menutable} onPress={main}>Calculator</MyText>
					<MyText style={styles.menutable} onPress={help}>Help</MyText>
					<MyText style={styles.menutable} onPress={null}>Tips</MyText>
					<MyText style={[styles.menutable, {borderBottomWidth: 0}]} onPress={null}>About</MyText>
				</ScrollView>
				<Image style={{alignSelf: 'flex-end', height: 20, width: 116}} source={require('../images/menulogobottom.png')} resizeMode={'contain'} />
			</View>
		);
	}
}
