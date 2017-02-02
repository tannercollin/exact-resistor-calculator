import React, {Component} from 'react';
import {ScrollView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

import Resistor from './resistor';
import Section from './section';

const styles = StyleSheet.create({
	button: {
		width: 100,
		height: 30,
		padding: 10,
		backgroundColor: 'lightgray',
		alignItems: 'center',
		justifyContent: 'center',
		margin: 3
	}
});

export default class Calc extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		const {state} = this.props;

		const allValid = state.have.every((x) => x.valid);
		const nonEmpty = state.have.some((x) => x.value);

		const reciprocalSum = state.have
			.filter((x) => x.value)
			.reduce((a,b) => a + 1.0/(b.value * b.mult), 0.0);

		return (
			<ScrollView>
				<View style={{padding: 20}}>
					<Section>
						<Text>
							Enter the exact resistance target:
						</Text>
						<Resistor form="target" />
					</Section>
					<Section>
						<Text>
							Overall parallel resistor value:
							{allValid && nonEmpty ? ' ' + 1/reciprocalSum : ' ???'}
						</Text>
						<Text>
							Error between this and the target: {0}%
						</Text>
						<Text>
							Next recommended resistor value: {0}
						</Text>
					</Section>
					<Section>
						<Text>
							Enter the resistors you have in parallel:
						</Text>
						{state.have.map((x,n) => 
							<Resistor form="have" index={n} key={n} />
						)}
					</Section>
				</View>
			</ScrollView>
		);
	}
}
