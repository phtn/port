import React, { FC } from 'react';
import { animated, useSpring } from 'react-spring';
import { Layout, Row, Col, Typography } from 'antd';

const { Content } = Layout;
const { Text } = Typography;
const AnimatedRow = animated(Row);

type BodyProps = {
	lightMode?: boolean;
};

const Body: FC<BodyProps> = ({ lightMode }) => {
	const anim = useSpring({
		backgroundColor: lightMode ? '#eee' : 'rgba(21, 32, 43, 0.7 )',
		delay: 150
	});

	return (
		<Content style={{ marginTop: 64 }}>
			<AnimatedRow style={Object.assign({}, anim, { height: '500px' })}>
				<Col lg={3} xs={0}></Col>
				<Col lg={18} xs={24}>
					<Text>test body</Text>
				</Col>
				<Col lg={3} xs={0}></Col>
			</AnimatedRow>
		</Content>
	);
};
export default Body;
