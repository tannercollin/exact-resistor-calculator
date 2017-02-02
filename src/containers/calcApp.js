'use strict';

import React, {Component} from 'react';
import Calc from '../components/calc';
import {connect} from 'react-redux';

class CalcApp extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		const {state} = this.props;
		console.log(this);

		return (
			<Calc state={state}/>
		);
	}
}

export default connect(state => ({
	state: state.calc
}))(CalcApp);
