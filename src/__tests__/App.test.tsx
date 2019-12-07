import React from "react";
import { Provider } from 'mobx-react'
import { UIStore } from '../models/ui-ctx'
import { render } from "@testing-library/react";
import App from "../App";

const store = UIStore.create()

test("it renders App component", () => {
  const { getByTestId } = render(<Provider store={store}><App /></Provider>);
  const layout = getByTestId('main-layout');
  expect(layout);
});

test("light mode initialized as true", () => {
  const { light } = store
  expect(light).toBe(true)
})

test("toggle as a function", () => {
  const { toggle } = store
  expect(typeof toggle).toBe('function')
})

