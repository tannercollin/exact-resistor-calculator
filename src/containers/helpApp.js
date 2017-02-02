'use strict';

import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import Help from '../components/help';
import { connect } from 'react-redux';

class HelpApp extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		const { state, actions } = this.props;
		return (
			<Help {...actions} />
		);
	}
}

export default connect(state => ({
	}), (dispatch) => ({
}))(HelpApp);
