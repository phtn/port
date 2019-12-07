import { types } from 'mobx-state-tree';

const UIStore = types
	.model('ui', {
		light: types.optional(types.boolean, true)
	})
	.actions(self => ({
		toggle() {
			self.light = !self.light;
		}
	}));

export { UIStore };
