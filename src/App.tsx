import React from "react";
import { Button } from "antd";
import "antd/dist/antd.css";

// mobx
import { observer } from "mobx-react";
import { Car } from "./models/prime";
const car = Car.create();

const App: React.FC = () => {
  return (
    <div className='App'>
      phtn-01
      <h1>Portfolio</h1>
      <Button onClick={car.increment}>{car.year * 12}</Button>
    </div>
  );
};

export default observer(App);
