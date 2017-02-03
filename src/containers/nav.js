'use strict'; 
import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Drawer from 'react-native-drawer';

import * as menuActions from '../actions/menuActions';
import MenuApp from '../containers/menuApp';

class Nav extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		const { state, actions } = this.props;

		const drawerStyles = {
			drawer: {shadowColor: '#000000', shadowOpacity: 0.8, shadowRadius: 3},
			main: {paddingLeft: 3},
		}
		const styles = StyleSheet.create({
			toolbar: {
				backgroundColor: '#e9eaed',
				height: 56,
			},
		});

		return (
			<Drawer
				open={state.isOpen}
				type="overlay"
				content={<MenuApp />}
				tapToClose={true}
				openDrawerOffset={(viewport) => viewport.width - 250}
				captureGestures={true}
				panCloseMask={0.3}
				closedDrawerOffset={-3}
				styles={drawerStyles}
				tweenHandler={(ratio) => ({
					main: { opacity: 1, },
					mainOverlay: { opacity: ratio/2, backgroundColor: 'black', },
				})}
			>
				<Ionicons.ToolbarAndroid
					navIconName={"md-menu"}
					onIconClicked={actions.menuopen}
					style={styles.toolbar}
					subtitle={state.subtitle}
					title="Exact Resistor Calculator"
				/>
				<View style={{flex: 1}}>
					{state.page}
				</View>
			</Drawer>
		);
	}
}

export default connect(state => ({
	state: state.menu
}), (dispatch) => ({
	actions: bindActionCreators(menuActions, dispatch)
}))(Nav);
