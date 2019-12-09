import React, { FC, useReducer, useState } from 'react';
import { Menu, Icon } from 'antd';

type MenuBarProps = {
	lightMode: boolean;
};

const initialState = {
	one: false,
	two: false,
	three: false
};

function reducer(state?: object, action?: any): any {
	switch (action.type) {
		case 1:
			return { ...state, one: true, two: false, three: false };
		case 2:
			return { ...state, one: false, two: true, three: false };
		case 3:
			return { ...state, one: false, two: false, three: true };
		default:
			return { one: false, two: false };
	}
}

const MenuBar: FC<MenuBarProps> = ({ lightMode }) => {
	const [state, dispatch] = useReducer(reducer, initialState);

	const { Item } = Menu;

	const styles = {
		label: {
			color: lightMode ? '#333' : '#eee',
			letterSpacing: 0.5
		}
	};

	const itemKeys: object[] = [
		{ name: 'react' },
		{ name: 'golang' },
		{ name: 'pytorch' }
	];

	const getItemList = async () => {
		for (let i in itemKeys) {
			// console.log(state.one);
			// const p: any = itemKeys[i].name;
			console.log(typeof itemKeys[i]);
		}
	};

	useState(() => {
		getItemList();
		return 0;
	});

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
			<Item
				onMouseLeave={e => dispatch({ type: 0 })}
				onMouseEnter={e => dispatch({ type: 1 })}
				style={Object.assign({}, styles.label, {
					backgroundColor: lightMode
						? state.one
							? 'rgba(0,144,220, 1)'
							: 'rgba(0,0,0,0)'
						: !state.one
						? 'rgba(0,0,0,0)'
						: 'rgba(17, 28, 39, 1)'
				})}
				onClick={() => console.log('react clicked.')}
				key="1"
			>
				react
			</Item>

			<Item
				onMouseLeave={e => dispatch({ type: 0 })}
				onMouseEnter={e => dispatch({ type: 2 })}
				style={Object.assign({}, styles.label, {
					backgroundColor: lightMode
						? state.two
							? 'rgba(0,144,220, 1)'
							: 'rgba(0,0,0,0)'
						: !state.two
						? 'rgba(0,0,0,0)'
						: 'rgba(17, 28, 39, 1)'
				})}
				onClick={() => console.log('golang clicked.')}
				key="2"
			>
				golang
			</Item>

			<Item // ITEM 3 PYTORCH
				onMouseEnter={e => dispatch({ type: parseInt(e.key) })}
				onMouseLeave={e => dispatch({ type: 0 })}
				style={Object.assign({}, styles.label, {
					backgroundColor: lightMode
						? state.three
							? 'rgba(0,144,220, 1)'
							: 'rgba(0,0,0,0)'
						: !state.three
						? 'rgba(0,0,0,0)'
						: 'rgba(17, 28, 39, 1)',
					color: lightMode
						? state.three
							? '#eee'
							: '#333'
						: !state.three
						? '#eee'
						: 'rgba(0,153,229,1)'
					// textTransform: state.three ? 'uppercase' : 'lowercase'
				})}
				onClick={() => console.log('pytorch clicked.')}
				key="3"
			>
				<span>pytorch</span>
			</Item>
		</Menu>
	);
};
export default MenuBar;
