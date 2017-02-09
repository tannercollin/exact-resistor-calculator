import React, {Component} from 'react';
import {ScrollView, View} from 'react-native';

import MyText from './mytext.js';
import MyLink from './mylink.js';
import Section from './section.js';

export default class About extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<ScrollView>
				<View style={{padding: 20}}>
					<Section>
						<MyText style={{textAlign: 'center'}}>
							Exact Resistor Calculator v1.0.0
						</MyText>
						<MyText style={{textAlign: 'center'}}>
							© 2017 Tanner Collin
						</MyText>
					</Section>
					<Section>
						<MyText>
							This app was written by <MyLink url="http://tannercollin.com">Tanner Collin</MyLink> and based off a spreadsheet he created in university to help him finish electronics labs faster.
						</MyText>
					</Section>
					<Section>
						<MyText>
							This app is free and open-source software licensed under the MIT License.
						</MyText>
						<MyText>
							That means you have the right to study, change, and distribute the software and source code to anyone and for any purpose.
						</MyText>
					</Section>
					<Section>
						<MyText>
							You can find the source code and report bugs here:
						</MyText>
						<MyText>
							<MyLink url="https://github.com/tannercollin/exact-resistor-calculator">https://github.com/tannercollin/exact-resistor-calculator</MyLink>
						</MyText>
					</Section>
					<Section>
						<MyText>
							Instead of donating to me, please give to the Electronic Frontier Foundation.
						</MyText>
					</Section>
					<Section>
						<MyText>
							Thanks to all the devs behind Node.js, React, React Native, and Redux.
						</MyText>
						<MyText>
							Thanks to K&E Imaging for providing the photography. All photographs are licensed CC-BY.
						</MyText>
						<MyText>
							Thanks to Jakub Jankiewicz for the circuit image. It and my derivatives are licensed CC-BY-SA.
						</MyText>
					</Section>
				</View>
			</ScrollView>
		);
	}
}

