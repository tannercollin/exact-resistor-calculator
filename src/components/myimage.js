import React, {Component} from 'react';
import {Dimensions, Image, Text, View} from 'react-native';

export default class MyImage extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		const {view, data} = this.props;

		if (view.layout) {
			const maxHeight = view.layout.height * 0.8;
			const maxWidth = view.layout.width * 0.9;

			const aspectRatio = data.width / data.height;

			let setWidth = maxWidth;
			let setHeight = maxWidth / aspectRatio;

			if (setHeight > maxHeight) {
				setHeight = maxHeight;
				setWidth = setHeight * aspectRatio;
			}

			return (
				<View style={{paddingTop: 10, flex: 1, flexDirection: 'row', justifyContent: 'center'}}>
					<Image
						style={{
							width: setWidth,
							height: setHeight,
							borderColor: 'black',
							borderWidth: 1,
							borderRadius: 5,
						}}
						source={data.source}
					/>
				</View>
			);
		} else {
			return (
				<Text style={{alignSelf: 'center', padding: 20}}>Loading image...</Text>
			);
		}
	}
}



