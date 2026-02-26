import { Container, Row, Col } from 'react-bootstrap';
import accenturePic from '../assets/accenture_pic.jpg';

function About() {
    return (
        <div id="whoami" style={{ backgroundColor: 'var(--secondary-background)', padding: '100px 0' }}>
            <Container>
                <Row className="align-items-center">
                    <Col md={6} className="mb-5 mb-md-0">
                        <h2 style={{
                            color: 'var(--principal-font)',
                            fontWeight: 'bold',
                            fontSize: '2rem',
                            letterSpacing: '2px',
                            textTransform: 'uppercase',
                            marginBottom: '30px'
                        }}>
                            WHOAMI?
                        </h2>
                        <p style={{ color: 'var(--secondary-font)', lineHeight: '1.8', marginBottom: '40px' }}>
                            Hi, I'm Emilio, a Software Developer and Engineering student. My passion is
                            to explore different technologies and develop digital solutions that have a real
                            impact. I am eager to learn, build and contribute to modern spaces.
                        </p>

                        <h3 style={{
                            color: 'var(--principal-font)',
                            fontSize: '1rem',
                            fontWeight: 'bold',
                            marginBottom: '20px',
                            borderBottom: '2px solid var(--subprincipal-font)',
                            display: 'inline-block',
                            paddingBottom: '5px'
                        }}>
                            Technologies I've worked with:
                        </h3>

                        <Row style={{ color: 'var(--secondary-font)', fontSize: '0.9rem' }}>
                            <Col xs={6}>
                                <ul style={{ listStyleType: 'none', paddingLeft: 0 }}>
                                    <li className="mb-2"><span style={{ color: 'var(--subprincipal-font)', marginRight: '10px' }}>&gt;</span>Java</li>
                                    <li className="mb-2"><span style={{ color: 'var(--subprincipal-font)', marginRight: '10px' }}>&gt;</span>Golang</li>
                                    <li className="mb-2"><span style={{ color: 'var(--subprincipal-font)', marginRight: '10px' }}>&gt;</span>TypeScript</li>
                                    <li className="mb-2"><span style={{ color: 'var(--subprincipal-font)', marginRight: '10px' }}>&gt;</span>Python</li>
                                    <li className="mb-2"><span style={{ color: 'var(--subprincipal-font)', marginRight: '10px' }}>&gt;</span>JavaScript</li>
                                </ul>
                            </Col>
                            <Col xs={6}>
                                <ul style={{ listStyleType: 'none', paddingLeft: 0 }}>
                                    <li className="mb-2"><span style={{ color: 'var(--subprincipal-font)', marginRight: '10px' }}>&gt;</span>Spring Boot</li>
                                    <li className="mb-2"><span style={{ color: 'var(--subprincipal-font)', marginRight: '10px' }}>&gt;</span>React</li>
                                    <li className="mb-2"><span style={{ color: 'var(--subprincipal-font)', marginRight: '10px' }}>&gt;</span>PostgreSQL</li>
                                    <li className="mb-2"><span style={{ color: 'var(--subprincipal-font)', marginRight: '10px' }}>&gt;</span>Docker</li>
                                    <li className="mb-2"><span style={{ color: 'var(--subprincipal-font)', marginRight: '10px' }}>&gt;</span>Git</li>
                                </ul>
                            </Col>
                        </Row>
                    </Col>

                    <Col md={6} className="text-center d-flex justify-content-center">
                        <img
                            src={accenturePic}
                            alt="Accenture"
                            style={{
                                width: '350px',
                                height: '350px',
                                objectFit: 'cover',
                                borderRadius: '50%',
                                border: '10px solid var(--secondary-font)',
                                boxShadow: '0 10px 30px rgba(0,0,0,0.3)'
                            }}
                        />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default About;
