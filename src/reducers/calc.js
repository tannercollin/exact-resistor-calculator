import * as types from '../actions/actionTypes';

const initialState = {
	target: {
		value: '',
		mult: '1',
		valid: true,
	},
	have: [
		{
			value: '',
			mult: '1',
			valid: true,
		},
		{
			value: '',
			mult: '1',
			valid: true,
		},
		{
			value: '',
			mult: '1',
			valid: true,
		},
	],
};

function isPosReal(n) {
	return n == '' || // Allowed to be blank
		!isNaN(parseFloat(n)) && // Has to be real
		isFinite(n) // Can't be infinite
		&& parseFloat(n) > 0; // Must be positive, non-zero
}

export default function calc(state = initialState, action = {}) {
	const {type, value, form, index, mult} = action;

	switch (type) {
		case types.UPDATEVALUE:
			const valid = isPosReal(value);

			if (form == "target") {
				return {
					...state,
					target: {
						...state.target,
						value: value,
						valid: valid,
					}
				};
			} else if (form == "have") {
				const newState = {
					...state,
					have: state.have.map((x,n) =>
						n == index ? {
							...x,
							value: value,
							valid: valid,
						} : x
					),
				};

				// If all values are full, add another resistor
				if (newState.have.every((x) => x.value)) {
					newState.have.push({
						value: '',
						mult: '1',
						valid: true,
					});
				}

				return newState;
			}
		case types.UPDATEMULT:
			if (form == "target") {
				return {
					...state,
					target: {
						...state.target,
						mult: mult,
					}
				};
			} else if (form == "have") {
				return {
					...state,
					have: state.have.map((x,n) =>
						n == index ? {
							...x,
							mult: mult,
						} : x
					),
				};
			}
		default:
			return state;
	}
}
