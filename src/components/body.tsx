import React, { FC } from 'react';
import { animated, useSpring, config } from 'react-spring';
import { Layout, Row, Col, Typography, Card, Icon, Avatar } from 'antd';

const { Content } = Layout;
const { Text } = Typography;
const { Meta } = Card;
const AnimatedRow = animated(Row);

type BodyProps = {
	lightMode?: boolean;
};

const Body: FC<BodyProps> = ({ lightMode }) => {
	const posterAnim = useSpring({
		backgroundColor: lightMode ? '#eee' : 'rgba(21, 32, 43, 0.7 )',
		delay: 150,
		config: config.gentle
	});

	const Poster: FC = () => {
		return (
			<Content style={{ marginTop: 64 }}>
				<AnimatedRow
					type="flex"
					justify="center"
					align="middle"
					style={Object.assign({}, posterAnim, { height: '600px' })}
				>
					<Row type="flex" justify="center">
						<Col lg={24} xs={24}>
							<Text
								type={lightMode ? 'secondary' : 'warning'}
								style={{ color: 'white' }}
							>
								Poster Body
							</Text>
							<C />
						</Col>
					</Row>
				</AnimatedRow>
			</Content>
		);
	};

	const centerPieceAnim = useSpring({
		backgroundColor: lightMode ? '#eee' : 'rgba(21, 32, 43, 0.60 )',
		delay: 300,
		config: config.stiff
	});

	const CenterPiece: FC = () => {
		return (
			<Content style={{ marginTop: 0 }}>
				<AnimatedRow
					type="flex"
					justify="center"
					align="middle"
					style={Object.assign({}, centerPieceAnim, { height: '600px' })}
				>
					<Row type="flex" justify="center">
						<Col lg={24} xs={24}>
							<Text>Center Piece</Text>
							<C />
						</Col>
					</Row>
				</AnimatedRow>
			</Content>
		);
	};

	const cardAnim = useSpring({
		width: lightMode ? 300 : 500
		// config: config.stiff
		// delay: 200
	});

	const CardAnimated = animated(Card);

	const C: FC = () => (
		<Card
			style={{ width: lightMode ? 200 : 250 }}
			// cover={
			// 	<img
			// 		alt="example"
			// 		src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
			// 	/>
			// }
			actions={[
				<Icon type="setting" key="setting" />,
				<Icon type="edit" key="edit" />,
				<Icon type="ellipsis" key="ellipsis" />
			]}
		>
			<Meta
				// avatar={
				// 	<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
				// }
				title="Card title"
				description="This is the description"
			/>
		</Card>
	);

	return (
		<div>
			<Row>
				<Poster />
			</Row>

			<Row>
				<CenterPiece />
			</Row>
		</div>
	);
};
export default Body;
