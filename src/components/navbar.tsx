import React, { FC } from "react";
import { animated, useSpring } from 'react-spring'
import { Layout, Col, Row, Button, Icon } from "antd";

import MenuBar from "./menubar";
const { Header } = Layout;
const AnimatedHeader = animated(Header)

type NavbarProps = {
  lightMode?: any,
  toggle?: any
}

const Navbar: FC<NavbarProps> = ({ lightMode, toggle }) => {

  const anim = useSpring({
    backgroundColor: lightMode ? '#0099e5' : 'rgba(21, 32, 43, 1)', position: 'fixed', zIndex: 1, width: '100%'
  })

  const Logo: FC = () => (
    <svg width="3em" height="1em" fill={lightMode ? 'rgb(21, 32, 43)' : '#eee'} viewBox="0 -50 256 256">
      <path d="m482.28125.140625v15h-180.28125v21h-154v55h-118v-35h-30v100h30v-35h118v55h154v21h180.28125v15h30v-212zm-.28125 167h-150v-122h150zm-182-21h-122v-80h122zm0 0" />
    </svg>
  );



  return (
    <AnimatedHeader style={anim} data-testid='header'>
      <Row justify="center">
        <Col lg={3} xs={0} />
        <Col span={8}> <Icon component={Logo} /> <span style={{ color: lightMode ? '#333' : '#eee' }}>phtn458</span></Col>
        <Col lg={7} xs={10}>
          <MenuBar lightMode={lightMode} />
        </Col>
        <Col span={3}>
          <div style={{ float: "right" }}>
            <Button
              type={lightMode ? "default" : "primary"}
              onClick={toggle}
            >
              {lightMode ? "light" : "dark"}
            </Button>
          </div>
        </Col>
        <Col lg={3} xs={0} />
      </Row>
    </AnimatedHeader >
  );
};

export default Navbar;
