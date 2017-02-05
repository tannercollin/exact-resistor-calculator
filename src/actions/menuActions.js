import * as types from './actionTypes';

export function menuopen() {
	return {
		type: types.MENUOPEN
	};
}

export function menuclose() {
	return {
		type: types.MENUCLOSE
	};
}

export function main() {
	return {
		type: types.MAIN
	};
}

export function chart() {
	return {
		type: types.CHART
	};
}

export function help() {
	return {
		type: types.HELP
	};
}

export function example() {
	return {
		type: types.EXAMPLE
	};
}

export function about() {
	return {
		type: types.ABOUT
	};
}
