import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {
	Alert,
	Picker,
	StyleSheet,
	View,
	Text,
	TextInput,
	TouchableOpacity,
} from 'react-native';

import * as calcActions from '../actions/calcActions';

const styles = {
	resistorinput: {
		flex: 1,
		height: 40,
		maxWidth: 80,
		borderWidth: 1,
		textAlign: 'right',
	},
	clearbutton: {
		height: 30,
		padding: 10,
		backgroundColor: 'lightgray',
		alignItems: 'center',
		justifyContent: 'center',
		margin: 3,
	},
};

class Resistor extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		const {data, actions} = this.props;

		// Curry the update functions to make them simpler
		const updatevalue = (x) => actions.updatevalue(
			this.props.form, this.props.index, x
		);
		const updatemult = (x) => actions.updatemult(
			this.props.form, this.props.index, x
		);

		const clear = () => {
			updatevalue('');
			updatemult('1');
		}

		return data ? (
			<View style={{flex: 1, flexDirection: 'row', justifyContent: 'center', margin: 3}}>
				<TextInput
					value={data.value || ''}
					onChangeText={(x) => updatevalue(x)}
					style={Object.assign({}, styles.resistorinput, {
						borderColor: data.valid ? '#3f7d20' : 'red',
					})}
					underlineColorAndroid={'transparent'}
					autoCorrect={false}
					keyboardType={'numeric'}
				/>
				<Picker 
					ref={(x) => this._picker = x}
					selectedValue={data.mult}
					onValueChange={(x) => updatemult(x)}
					style={{height: 40, width: 100}}
					mode={'dropdown'}
				>
						<Picker.Item label="  MΩ" value="1000000" />
						<Picker.Item label="  kΩ" value="1000" />
						<Picker.Item label="  Ω" value="1" />
						<Picker.Item label="  mΩ" value="0.001" />
				</Picker>
				<TouchableOpacity
					onPress={() => {
						data.value ? Alert.alert(
							'Clear resistor value?',
							data.value + 
							// I created this kludge for fun (so don't hate on me):
								this._picker.props.children
									.map((x) => x.props)
									.filter((x) => x.value == data.mult)[0]
									.label,
							[
								{text: 'CANCEL'},
								{text: 'OK', onPress: clear},
							]
						) : null ;
					}}
					style={styles.clearbutton} activeOpacity={1}
				>
					<Text>Clear</Text>
				</TouchableOpacity>
			</View>
		) : null;
	}
}

//Redux stuff
function mapStateToProps(state, ownProps) {
	if (ownProps.form == "target") {
		return {
			data: state.calc.target,
		};
	} else if (ownProps.form == "have") {
		return {
			data: state.calc.have[ownProps.index],
		};
	} else {
		return {};
	}
}

export default connect(mapStateToProps, (dispatch) => ({
	actions: bindActionCreators(calcActions, dispatch)
}))(Resistor);
