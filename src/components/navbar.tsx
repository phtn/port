import React, { FC } from 'react';
import { animated, useSpring, config } from 'react-spring';
import { Layout, Col, Row, Button, Icon } from 'antd';
import MenuBar from './menubar';
import L from '../assets/icons/logo';
import M from '../assets/icons/mode';

const { Header } = Layout;
const AnimatedHeader = animated(Header);

type NavbarProps = {
	lightMode: boolean;
	toggle: any;
};

const Navbar: FC<NavbarProps> = ({ lightMode, toggle }) => {
	const anim = useSpring({
		backgroundColor: lightMode ? '#0099e5' : 'rgba(21, 32, 43, 1)',
		position: 'fixed',
		zIndex: 1,
		width: '100%',
		config: config.gentle
	});

	const Logo = () => <L lightMode={lightMode} />;
	const Mode = () => <M lightMode={lightMode} />;

	return (
		<AnimatedHeader style={anim} data-testid="header">
			<Row justify="center">
				<Col lg={3} xs={0} />
				<Col lg={8} xs={6}>
					<Icon component={Logo} />
				</Col>
				<Col lg={0} xs={5} />
				<Col lg={7} xs={5}>
					<MenuBar lightMode={lightMode} />
				</Col>
				<Col lg={0} xs={1} />
				<Col lg={3} xs={7}>
					<div style={{ float: 'right' }}>
						<Button type="link" onClick={toggle} data-testid='toggle-mode'>
							<Icon component={Mode} />
						</Button>
					</div>
				</Col>
			</Row>
		</AnimatedHeader>
	);
};

export default Navbar;
