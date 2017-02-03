import * as types from './actionTypes';

export function updatevalue(form, index, value) {
	return {
		type: types.UPDATEVALUE,
		form,
		index,
		value,
	};
}

export function updatemult(form, index, mult) {
	return {
		type: types.UPDATEMULT,
		form,
		index,
		mult,
	};
}

export function clearall() {
	return {
		type: types.CLEARALL,
	};
}
