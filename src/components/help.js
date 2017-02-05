import React, {Component} from 'react';
import {ScrollView, View} from 'react-native';

import MyText from './mytext.js';
import Section from './section.js';

export default class Help extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<ScrollView>
				<View style={{padding: 20}}>
					<Section>
						<MyText>This app recommends resistors for you to combine in parallel to create a very precise resistance value. It works iteratively by calculating the best resistor value to add based on the measured values of resistors you’ve previously added. You can usually get within 1% of your target with 2 or 3 resistors.</MyText>
					</Section>
					<Section>
						<MyText>Enter the exact target resistance you wish to make in the first field.</MyText>
					</Section>
					<Section>
						<MyText>Next go find a resistor close to the recommended value (but not below the value) and then measure it. Enter the reading into the list of resistors that you have. Then keep doing this for all the resistor values that the app recommends.</MyText>
					</Section>
					<Section>
						<MyText>When the percent error between the current value and your target value is small enough, you are done!</MyText>
					</Section>
					<Section>
						<MyText>Combine the resistors you found in parallel and measure the total resistance to confirm.</MyText>
					</Section>
				</View>
			</ScrollView>
		);
	}
}

