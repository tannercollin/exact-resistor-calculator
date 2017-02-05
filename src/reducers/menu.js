import React, {Component} from 'react';
import * as types from '../actions/actionTypes';

const initialState = {
	isOpen: false,
	refdrawer: null,
	page: 'main',
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
				page: 'main',
				subtitle: 'Calculator Page',
			};
		case types.CHART:
			return {
				...state,
				isOpen: false,
				page: 'chart',
				subtitle: 'Color Chart',
			};
		case types.HELP:
			return {
				...state,
				isOpen: false,
				page: 'help',
				subtitle: 'Help',
			};
		case types.EXAMPLE:
			return {
				...state,
				isOpen: false,
				page: 'example',
				subtitle: 'Example Usage',
			};
		default:
			return state;
	}
}
