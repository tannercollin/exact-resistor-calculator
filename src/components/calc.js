import React, {Component} from 'react';
import {Alert, ScrollView, StyleSheet, TouchableOpacity, View} from 'react-native';

import Resistor from './resistor';
import Section from './section';
import ClearAll from './clearall';
import MyText from './mytext'

function getUnit(n) {
	if (n >= 1000000) {
		return {unit: ' MΩ', mult: 1000000};
	} else if (n >= 1000) {
		return {unit: ' kΩ', mult: 1000};
	} else if (n >= 1) {
		return {unit: ' Ω', mult: 1};
	} else {
		return {unit: ' mΩ', mult: 0.001};
	}
}

function significantDigits(num) {
	// http://bateru.com/news/2011/04/code-of-the-day-javascript-significant-figures/
	var n = String(num).trim(),
		FIND_FRONT_ZEROS_SIGN_DOT_EXP = /^[\D0]+|\.|([e][^e]+)$/g,
		FIND_RIGHT_ZEROS = /0+$/g;

	if (!/\./.test(num)) {
		n = n.replace(FIND_RIGHT_ZEROS, "");
	}
	return n.replace(FIND_FRONT_ZEROS_SIGN_DOT_EXP, "").length;
};

const styles = {
	table: {
		borderBottomColor: 'lightgrey',
		borderBottomWidth: 1,
		padding: 3,
	},
};

export default class Calc extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		const {state} = this.props;

		const targetValid = state.target.valid;
		const targetNonEmpty = state.target.value ? true : false;

		const haveAllValid = state.have.every((x) => x.valid);
		const haveNonEmpty = state.have.some((x) => x.value);

		const sigDigs = targetValid && targetNonEmpty ?
			significantDigits(state.target.value) : 0;

		let precision = 3;
		if (sigDigs > 3) {
			// toPrecision() has a max of 20
			precision = sigDigs > 20 ? 20 : sigDigs;
		}

		const targetRes = state.target.value * state.target.mult;

		const reciprocalSum = state.have
			.filter((x) => x.value)
			.reduce((a,b) => a + 1.0 / (b.value * b.mult), 0.0);

		const sum = 1.0 / reciprocalSum;

		const percentError = Math.abs((sum - targetRes) / targetRes * 100);

		const nextRes = 1.0 / (1.0 / targetRes - reciprocalSum);

		const printSum = () => {
			if (haveAllValid && haveNonEmpty) {
				const {unit, mult} = getUnit(sum);
				const val = sum / mult;
				return val.toPrecision(precision) + unit;
			} else {
				return '---';
			}
		};

		const printPercentError = () => {
			if (targetValid && targetNonEmpty && haveAllValid && haveNonEmpty) {
				// Check if the 'overall resistor value' matches the target
				const {unit, mult} = getUnit(targetRes);
				if (printSum() === (targetRes / mult).toPrecision(precision) + unit) {
					return (0.0).toPrecision(precision);
				}
				return percentError.toPrecision(precision);
			} else {
				return '---';
			}
		};

		const printNextRes= () => {
			if (targetValid && targetNonEmpty && haveAllValid) {
				// Check if we are done because error is 0 or value's exact
				if (nextRes == Infinity || printPercentError() == 0.0) {
					return 'Done.';
				} else if (nextRes < 0) {
					return 'N/A.';
				}
				const {unit, mult} = getUnit(nextRes);
				const val = nextRes / mult;
				return val.toPrecision(precision) + unit;
			} else {
				return '---';
			}
		};

		const printInfo = () => {
			if (!haveAllValid) {
				return 'A parallel resistor is not valid.';
			} else if (!targetNonEmpty) {
				return 'No target resistor.';
			} else if (!targetValid) {
				return 'Target resistor not valid.';
			} else if (!haveNonEmpty) {
				return 'No resistors in parallel.';
			} else if (printNextRes() === 'N/A.') {
				return (
					<MyText>
						No solution exists. <MyText
							style={{color: '#3b6f73'}}
							onPress={() => {
								Alert.alert(
									'No Solution Exists',
									'This app recommends resistors to be added in parallel. It\'s impossible to increase resistance (to make it closer to the target) by adding another resistor in parallel.\n\nPlease remove the resistor and find a higher one if you wish to keep solving.',
									[{text: 'OK'}]
								);
							}}
						>
							Why?
						</MyText>
					</MyText>
				);
			} else if (printNextRes() === 'Done.') {
				return 'Target achieved.';
			} else {
				return 'Add the next resistor.';
			}
		};

		return (
			<ScrollView>
				<View style={{padding: 20}}>
					<Section>
						<MyText>
							Enter the exact resistance target:
						</MyText>
					</Section>
					<Section>
						<Resistor form="target" />
					</Section>
					<Section>
						<View style={{flexDirection: 'row'}}>
							<View>
								<MyText style={styles.table}>
									Overall parallel resistor value:
								</MyText>
								<MyText style={styles.table}>
									Error between this and target:
								</MyText>
								<MyText style={styles.table}>
									Next resistor value needed:
								</MyText>
							</View>
							<View>
								<MyText style={styles.table} selectable={true}>
									{printSum()}
								</MyText>
								<MyText style={styles.table} selectable={true}>
									{printPercentError()} %
								</MyText>
								<MyText style={styles.table} selectable={true}>
									{printNextRes()}
								</MyText>
							</View>
						</View>
						<MyText style={{padding: styles.table.padding}}>
							{printInfo()}
						</MyText>
					</Section>
					<Section>
						<MyText>
							Enter the resistors you have in parallel:
						</MyText>
					</Section>
					<Section>
						{state.have.map((x,n) => 
							<Resistor form="have" index={n} key={n} />
						)}
					</Section>
					<View style={{alignItems: 'center'}}>
						<ClearAll />
					</View>
				</View>
			</ScrollView>
		);
	}
}
