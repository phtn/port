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
