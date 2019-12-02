import React, { FC } from "react";
import { Menu } from "antd";


type MenuBarProps = {
  lightMode: boolean
}

const MenuBar: FC<MenuBarProps> = ({ lightMode }) => {
  const { Item } = Menu;

  const styles = {
    label: {
      color: lightMode ? '#333' : '#eee'
    }
  }
  return (
    <Menu
      theme="light"
      mode="horizontal"
      style={{
        lineHeight: "64px",
        backgroundColor: "transparent",
        textAlign: "center",
        zIndex: 1
      }}
    >
      <Item style={styles.label} key="1">react</Item>
      <Item style={styles.label} key="2">golang</Item>
      <Item style={styles.label} key="3">pytorch</Item>
    </Menu>
  );
};
export default MenuBar;
