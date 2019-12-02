import React, { FC } from 'react'
import { animated, useSpring } from 'react-spring'
import { Layout, Row, Col, Carousel } from 'antd'
const { Content } = Layout

const AnimatedRow = animated(Row)

type BodyProps = {
  lightMode?: boolean
}


const Body: FC<BodyProps> = ({ lightMode }) => {

  const anim = useSpring({
    height: '100vh', backgroundColor: lightMode ? '#eee' : 'rgba(21, 32, 43, 0.7 )', delay: 150
  })

  return (
    <Content style={{ marginTop: 64 }}>
      <AnimatedRow style={anim}>
        <Col lg={3} xs={0}></Col>
        <Col lg={18} xs={24}>
          <Carousel dotPosition='bottom'>
            <div>1 {lightMode ? 'light' : 'dark'}</div>
            <div>2</div>
            <div>3</div>
          </Carousel>
        </Col>
        <Col lg={3} xs={0}></Col>
      </AnimatedRow>
    </Content >
  )
}
export default Body