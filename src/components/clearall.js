import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {
	Alert,
	StyleSheet,
	View,
	Text,
	TouchableOpacity,
} from 'react-native';

import * as calcActions from '../actions/calcActions';

const styles = {
	clearbutton: {
		height: 30,
		width: 100,
		padding: 10,
		backgroundColor: 'lightgray',
		alignItems: 'center',
		justifyContent: 'center',
		margin: 3,
	},
};

class ClearAll extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		const {actions} = this.props;

		return (
			<TouchableOpacity
				onPress={() => {
					Alert.alert(
						'Clear all resistors?',
						'',
						[
							{text: 'CANCEL'},
							{text: 'OK', onPress: actions.clearall},
						]
					)
				}}
				style={styles.clearbutton} activeOpacity={1}
			>
				<Text>Clear all</Text>
			</TouchableOpacity>
		);
	}
}

export default connect(null, (dispatch) => ({
	actions: bindActionCreators(calcActions, dispatch)
}))(ClearAll);

