import React, {Component} from 'react';
import {Dimensions, Image, ScrollView, StyleSheet, View, TouchableOpacity} from 'react-native';

import MyText from './mytext.js';
import MyImage from './myimage.js';
import Section from './section.js';

const images = {
	img1: {
		source: require('../images/example1.png'),
		width: 1857,
		height: 574,
	},
	img2: {
		source: require('../images/example2.png'),
		width: 1857,
		height: 574,
	},
	img3: {
		source: require('../images/example3.png'),
		width: 1857,
		height: 574,
	},
	img4: {
		source: require('../images/example4.png'),
		width: 1857,
		height: 574,
	},
	img5: {
		source: require('../images/example5.png'),
		width: 1857,
		height: 574,
	},
	img6: {
		source: require('../images/example6.png'),
		width: 1857,
		height: 574,
	},
	img7: {
		source: require('../images/example7.png'),
		width: 1857,
		height: 574,
	},
};

export default class Example extends Component {
	constructor(props) {
		super(props);
		this.state = {
			viewInfo: {},
		};
	}

	render() {
		const {viewInfo} = this.state;

		return (
			<ScrollView>
				<View onLayout={(event) => this.setState({
					viewInfo: event.nativeEvent,
				})} style={{padding: 20}}>
					<Section>
						<MyText>Suppose our design calls for an 863 Ω resistance. First, we enter 863 Ω into the top field:</MyText>
						<MyImage view={viewInfo} data={images.img1} />
					</Section>
					<Section>
						<MyText>The calulator will recommend 863 Ω, but we don't have anything close to that in our bin of scrap resistors. We find a 1 kΩ resistor and measure it to be 992 Ω. We enter this into the calculator:</MyText>
						<MyImage view={viewInfo} data={images.img2} />
					</Section>
					<Section>
						<MyText>You will see the calculator now recommends we add a 6.64 kΩ resistor, and is telling us we are 14.9% away from our 863 Ω target:</MyText>
						<MyImage view={viewInfo} data={images.img3} />
					</Section>
					<Section>
						<MyText>The closest we can find is 6.8 kΩ, which we measure to be 6740 Ω. We now enter this value too:</MyText>
						<MyImage view={viewInfo} data={images.img4} />
					</Section>
					<Section>
						<MyText>Now it recommends 432 kΩ, and we are 0.2% away from the target (pretty good for two resistors):</MyText>
						<MyImage view={viewInfo} data={images.img5} />
					</Section>
					<Section>
						<MyText>If we wanted to get even closer, we can keep going. We find a 470 kΩ resistor that reads 489.3 kΩ and enter it:</MyText>
						<MyImage view={viewInfo} data={images.img6} />
					</Section>
					<Section>
						<MyText>The calculator is now telling us we are right on our target with 0.00% error:</MyText>
						<MyImage view={viewInfo} data={images.img7} />
					</Section>
				</View>
			</ScrollView>
		);
	}
}

