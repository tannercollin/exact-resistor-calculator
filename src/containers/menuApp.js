'use strict';

import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import Menu from '../components/menu';
import * as menuActions from '../actions/menuActions';
import { connect } from 'react-redux';

class MenuApp extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { state, actions } = this.props;
    return (
      <Menu {...actions} />
    );
  }
}

export default connect(state => ({
    state: state
  }),
  (dispatch) => ({
    actions: bindActionCreators(menuActions, dispatch)
  })
)(MenuApp);


