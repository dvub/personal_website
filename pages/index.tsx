import type { NextPage } from 'next'
import { Canvas, useThree } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import CSS from 'csstype'
import Sphere from '../components/sphere'
import { EffectComposer, Vignette, DepthOfField } from '@react-three/postprocessing'
import { Container, Col, Row } from 'react-bootstrap'

// SET CANVAS EL WIDTH AND HEIGHT INSIDE OF DIV

// work on readme

const Home: NextPage = () => {
  return (
    <div>
      <div>
        <Container> 
          <Row xs={1} md={2}>
          <Col>
            <div>
              <h1 className='animate'>I&#39;m dvub, a</h1>
              <h1 className='mono animate' style={{animationDelay: '1s'}}>
                  new developer();
                </h1>
              <h1 style={{animationDelay: '2s'}} className='animate'>Welcome.</h1>
              <hr />
              <p className='animate' style={{animationDelay: '2.5s'}}>
                I&#39;m a student who enjoys building projects and just <b>making cool stuff</b>. 
                I also love <b>opportunities to learn</b> new and interesting things. 
                One day I hope to be a <b>professional developer</b> and make an <b>impact on the world</b> using technology.
                <br/>
                If you want to read about some of my projects, you can look <a href='posts'>here.</a>
              </p>
            </div>
          </Col>
          <Col>
          <div>
            <p>hover over me</p>
            <Canvas camera={{ position: [-35, 0, 0]}} className='animate' style={{animationDelay: '2.5s', height: '25rem'}}>
              <Sphere />
            </Canvas>
            </div>
          </Col>
          </Row>
        </Container>


      </div>
    </div>
  );
}

export default Home
