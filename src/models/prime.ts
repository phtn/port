import { types } from "mobx-state-tree";

const Car = types
  .model({
    model: types.optional(types.string, "cybertruck"),
    year: types.optional(types.number, 2022),
    fsd: types.optional(types.boolean, true)
  })
  .actions(self => ({
    increment() {
      self.year++;
    }
  }));

export { Car };
