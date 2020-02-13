import { types } from 'mobx-state-tree';

const UIStore = types
	.model('ui', {
		light: types.optional(types.boolean, true),
		// menubarInitState: types.optional([{}])
	})
	.actions(self => ({

		toggle() { // light | dark
			self.light = !self.light;
		}
	}));

export { UIStore };
