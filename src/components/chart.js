import React, {Component} from 'react';
import {ScrollView, Text, View} from 'react-native';

import MyText from './mytext.js';
import Section from './section.js';

const rowData = [
	{
		bgColor: 'white',
		textColor: 'black',
		cells: ['Color', '1st', '2nd', 'Multiplier', 'Tolerance'],
	},
	{
		bgColor: 'black',
		textColor: 'white',
		cells: ['Black', '0', '0', '1', ' '],
	},
	{
		bgColor: 'brown',
		textColor: 'white',
		cells: ['Brown', '1', '1', '10', '±1%'],
	},
	{
		bgColor: 'red',
		textColor: 'white',
		cells: ['Red', '2', '2', '100', '±2%'],
	},
	{
		bgColor: 'orange',
		textColor: 'black',
		cells: ['Orange', '3', '3', '1k', ' '],
	},
	{
		bgColor: 'yellow',
		textColor: 'black',
		cells: ['Yellow', '4', '4', '10k', ' '],
	},
	{
		bgColor: 'green',
		textColor: 'white',
		cells: ['Green', '5', '5', '100k', '±0.5%'],
	},
	{
		bgColor: 'blue',
		textColor: 'white',
		cells: ['Blue', '6', '6', '1M', '±0.25%'],
	},
	{
		bgColor: 'violet',
		textColor: 'black',
		cells: ['Violet', '7', '7', '10M', '±0.1%'],
	},
	{
		bgColor: 'gray',
		textColor: 'black',
		cells: ['Gray', '8', '8', ' ', '±0.05%'],
	},
	{
		bgColor: 'white',
		textColor: 'black',
		cells: ['White', '9', '9', ' ', ' '],
	},
	{
		bgColor: 'gold',
		textColor: 'black',
		cells: ['Gold', ' ', ' ', '0.10', '±5%'],
	},
	{
		bgColor: 'silver',
		textColor: 'black',
		cells: ['Silver', ' ', ' ', '0.01', '±10%'],
	},
];


export default class Chart extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<ScrollView>
				<View style={{padding: 20}}>
					<Section>
						<View style={{flexDirection: 'row'}}>
							{rowData[0].cells.map((x, col) =>
								<View style={{flex: 1}} key={col}>
									{rowData.map((row, n) =>
										<View
											key={n}
											style={{
												backgroundColor: row.bgColor,
												paddingTop: 4,
												paddingBottom: 4,
												borderBottomColor: 'white',
												borderBottomWidth: 1,
											}}
										>
											<MyText
												key={n}
												style={{
													color: row.textColor,
													textAlign: 'center',
													fontWeight: n ? 'normal' : 'bold',
												}}
											>
												{row.cells[col]}
											</MyText>
										</View>
									)}
								</View>
							)}
						</View>
					</Section>
					<Section>
						<MyText>
							A mnemonic to help you remember the colors:
						</MyText>
						<MyText style={{textAlign: 'center'}}>
							Bad Booze Rots Our Young
						</MyText>
						<MyText style={{textAlign: 'center'}}>
							Guts But Vodka Goes Well
						</MyText>
					</Section>
				</View>
			</ScrollView>
		);
	}
}

