import React, { FC } from 'react';
import { Menu, Icon } from 'antd';

type MenuBarProps = {
	lightMode: boolean;
};

const MenuBar: FC<MenuBarProps> = ({ lightMode }) => {
	const { Item } = Menu;

	const styles = {
		label: {
			color: lightMode ? '#333' : '#eee',
			letterSpacing: 1
		}
	};
	return (
		<Menu
			theme={lightMode ? 'light' : 'dark'}
			mode="horizontal"
			overflowedIndicator={<Icon type="menu" />}
			style={{
				lineHeight: '64px',
				backgroundColor: 'transparent',
				textAlign: 'center',
				zIndex: 1
			}}
		>
			<Item style={styles.label} key="1">
				react
			</Item>
			<Item style={styles.label} key="2">
				golang
			</Item>
			<Item style={styles.label} key="3">
				pytorch
			</Item>
		</Menu>
	);
};
export default MenuBar;
