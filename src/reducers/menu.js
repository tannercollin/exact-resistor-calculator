import React, {Component} from 'react';
import * as types from '../actions/actionTypes';

import CalcApp from '../containers/calcApp';
import HelpApp from '../containers/helpApp';

const initialState = {
	isOpen: false,
	refdrawer: null,
	page: <CalcApp />,
	subtitle: 'Calculator Page',
};

export default function menu(state = initialState, action = {}) {
  switch (action.type) {
    case types.MENUOPEN:
      return {
        ...state,
		isOpen: true,
      };
    case types.MENUCLOSE:
      return {
        ...state,
		isOpen: false,
      };
    case types.MAIN:
      return {
        ...state,
		isOpen: false,
        page: <CalcApp />,
		subtitle: 'Calculator Page',
      };
    case types.HELP:
      return {
        ...state,
		isOpen: false,
        page: <HelpApp />,
		subtitle: 'Help',
      };
    default:
      return state;
  }
}
