import React from "react";
import Button from "antd/es/button";
import "antd/dist/antd.css";

// mobx
import { observer } from "mobx-react";
import { Car } from "./models/prime";
const car = Car.create();

const App: React.FC = () => {
  return (
    <div className='App'>
      <Button type='primary' onClick={car.increment}>
        phtn-01 {car.model} {car.year}
      </Button>
    </div>
  );
};

export default observer(App);
