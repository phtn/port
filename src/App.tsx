import React, { FC } from "react";
import { observer, inject } from 'mobx-react'
import { Layout } from 'antd'
import "antd/dist/antd.css";

// components 
import Navbar from "components/navbar";
import Body from "components/body";

type UIProps = {
  store?: any
}

const App: FC<UIProps> = ({ store }) => {
  const { light, toggle } = store
  return (
    <Layout data-testid='main-layout'>
      <Navbar data-testid='navbar' lightMode={light} toggle={toggle} />
      <Body lightMode={light} />
    </Layout>
  );
};

export default inject('store')(observer(App))
