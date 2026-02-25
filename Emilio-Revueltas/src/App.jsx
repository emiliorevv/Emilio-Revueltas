import {Container, Row, Col, Button} from 'react-bootstrap';
function App() {

  return (
    <div className='bg-dark text-white min-vh-100'>
      <Container className='d-flex flex-column justify-content-center min-vh-100'>
        <Row className='align-items-center'>
          <Col md={8} className='mx-auto text-center text-md-start'>
            <p className='text-secondary mb-2' style={{letterSpacing: '2px'}}>WHOAMI?</p>
            <h1 className='display-3 fw-bold mb-3'>Hi, im Emilio</h1>
            <h2 className='h4 text-light mb-4'> IT Engineer Student & Software Developer</h2>
            <Button variant= 'outline-light' size='lg' className='mt-3 px-4 rounded-0'>Contact Me</Button>
          </Col>
          </Row>
      </Container>
    </div>
  );
}

export default App
