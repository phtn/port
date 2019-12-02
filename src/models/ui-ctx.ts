import { types } from "mobx-state-tree";

const Mode = types
  .model('ui', {
    light: types.optional(types.boolean, true)
  })
  .actions(self => ({
    toggle() {
      self.light = !self.light;
    }
  }));

export { Mode };
