import { Container, Row, Col } from 'react-bootstrap';
import profilePic from '../assets/ProfilePic.jpg';

function Hero() {
    return (
        <div style={{ backgroundColor: 'var(--principal-background)', minHeight: '100vh', display: 'flex', alignItems: 'center' }}>
            <Container>
                <Row className="align-items-center">
                    <Col md={6} className="text-center text-md-start mb-5 mb-md-0">
                        <h1 style={{ color: 'var(--principal-font)', fontWeight: 'bold', fontSize: '4rem', lineHeight: '1.2' }}>
                            Hi,<br />
                            I'm <span className="highlight">Emilio</span>,<br />
                            IT Engineer<br />
                            Student
                        </h1>
                        <p className="mt-4 mb-4" style={{ color: 'var(--secondary-font)' }}>
                            Software Developer focused on building clean and functional web apps.
                        </p>
                        <button className="btn-custom-outline">
                            View Portfolio
                        </button>
                    </Col>
                    <Col md={6} className="text-center">
                        <img
                            src={profilePic}
                            alt="Emilio Profile"
                            style={{
                                width: '100%',
                                maxWidth: '400px',
                                borderRadius: '20px',
                                margin: '0 auto',
                                boxShadow: '0 10px 30px rgba(0,0,0,0.5)'
                            }}
                        />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Hero;
