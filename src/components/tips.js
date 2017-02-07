import React, {Component} from 'react';
import {ScrollView, View} from 'react-native';

import MyText from './mytext.js';
import MyImage from './myimage.js';
import Section from './section.js';

const images = {
	img4: {
		source: require('../images/tips4.png'),
		width: 1857,
		height: 1016,
	},
};

export default class Tips extends Component {
	constructor(props) {
		super(props);
		this.state = {
			viewInfo: {},
		};
	}

	render() {
		const {viewInfo} = this.state;

		return (
			<View onLayout={(event) => this.setState({
				viewInfo: event.nativeEvent,
			})}>
				<ScrollView>
					<View style={{padding: 20}}>
						<Section>
							<MyText style={{fontWeight: 'bold'}}>Don't hold both resistor leads while measuring</MyText>
							<MyText>The resistance of your body added in parallel is enough to effect the measurement of higher valued resistors. Since the purpose of this app is to help you create a precise resistance value, doing so is counterproductive.</MyText>
						</Section>
						<Section>
							<MyText style={{fontWeight: 'bold'}}>Don't press the resistor leads against an ESD mat</MyText>
							<MyText>Most ESD mats are slightly conductive to allow static charges to dissipate. This also has the problem of affecting the resistance measurement of higher valued resistors.</MyText>
						</Section>
						<Section>
							<MyText style={{fontWeight: 'bold'}}>Use only one hand to hold the resistor</MyText>
							<MyText>When measuring the resistors, use only one hand to hold the resistor to a multimeter lead. Grip the other multimeter lead by only the plastic part with your other hand. Then use the tension in the resistor's remaining lead to bring the two together and form a circuit.</MyText>
						</Section>
						<Section>
							<MyText style={{fontWeight: 'bold'}}>Increase precision by adding significant figures</MyText>
							<MyText>You can increase the precision of the calculations shown by the app by adding more significant figures to your target resistance. This way you can make your solution as precise as you need.</MyText>
							<MyImage view={viewInfo} data={images.img4} />
						</Section>
					</View>
				</ScrollView>
			</View>
		);
	}
}

