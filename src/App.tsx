import React from "react";
import { observer, inject } from 'mobx-react'
import { Layout } from 'antd'
import "antd/dist/antd.css";

// mobx
// import { observer } from "mobx-react";
// ui-ctx
// import { Mode } from 'models/ui-ctx'
// components 
import Navbar from "components/navbar";
import Body from "components/body";

type UIProps = {
  store?: any
}

const App: React.FC<UIProps> = props => {
  const { store } = props
  const { light, toggle } = store
  return (
    <Layout>
      <Navbar lightMode={light} toggle={toggle} />
      <Body lightMode={light} />
    </Layout>
  );
};

export default inject('store')(observer(App))
