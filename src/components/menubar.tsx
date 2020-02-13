import React, { FC, useReducer } from 'react';
import { Menu, Icon } from 'antd';

type MenuBarProps = {
	lightMode: boolean;
};

// eslint-disable-next-line
const initialState = {
	one: false,
	two: false,
	three: false
};

const initialState2 = [
	{ one: false, active: false },
	{ two: false, active: false },
	{ three: false, active: false }
];
function reducer(state?: object, action?: any): any {
	switch (action.type) {
		case 1:
			return { ...state, one: true, two: false, three: false };
		case 2:
			return { ...state, one: false, two: true, three: false };
		case 3:
			return { ...state, one: false, two: false, three: true };

		default:
			return { one: false, two: false, three: false };
	}
}

const MenuBar: FC<MenuBarProps> = ({ lightMode }) => {
	const [state, dispatch] = useReducer(reducer, initialState2);

	const { Item } = Menu;

	const styles = {
		label: {
			color: lightMode ? '#333' : '#eee',
			letterSpacing: 0.5
		}
	};

	// const itemKeys: object[] = [
	// 	{ name: 'react', key: 1 },
	// 	{ name: 'golang', key: 2 },
	// 	{ name: 'pytorch', key: 3 }
	// ];

	// const getItemList: FC = () => {
	// 	// for (let i in itemKeys) {
	// 	// 	// console.log(state.one);
	// 	// 	// const p: any = itemKeys[i].name;
	// 	// 	console.log(itemKeys[i].name);
	// 	// }
	// 	console.log(itemKeys[0]);

	// 	return <Item>{'test'}</Item>;
	// };

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
			<Item // ITEM 1 REACT
				onMouseEnter={e => dispatch({ type: parseInt(e.key) })}
				onMouseLeave={e => dispatch({ type: 0 })}
				style={Object.assign({}, styles.label, {
					backgroundColor: lightMode
						? state.one
							? 'rgba(0,144,220, 1)'
							: 'rgba(0,0,0,0)'
						: !state.one
						? 'rgba(0,0,0,0)'
						: 'rgba(17, 28, 39, 1)',
					color: lightMode
						? state.one
							? '#eee'
							: '#333'
						: !state.one
						? '#eee'
						: 'rgba(0,153,229,1)'
				})}
				onClick={e => console.log(e.key)}
				key="1"
			>
				<span>react</span>
			</Item>

			<Item // ITEM 2 GOLANG
				onMouseEnter={e => dispatch({ type: parseInt(e.key) })}
				onMouseLeave={e => dispatch({ type: 0 })}
				onSelect={() => console.log('item selected')}
				style={Object.assign({}, styles.label, {
					backgroundColor: lightMode
						? state.two
							? 'rgba(0,144,220, 1)'
							: 'rgba(0,0,0,0)'
						: !state.two
						? 'rgba(0,0,0,0)'
						: 'rgba(17, 28, 39, 1)',
					color: lightMode
						? state.two
							? '#eee'
							: '#333'
						: !state.two
						? '#eee'
						: 'rgba(0,153,229,1)'
				})}
				onClick={() => console.log('golang clicked.')}
				key="2"
			>
				<span>golang</span>
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
