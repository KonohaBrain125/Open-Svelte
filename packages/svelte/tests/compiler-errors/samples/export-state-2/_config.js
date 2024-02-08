import { test } from '../../test';

export default test({
	error: {
		code: 'invalid-state-export',
		message:
			"Cannot export state if it is reassigned. Either export a function returning the state value or only mutate the state value's properties",
		position: [59, 99]
	}
});
