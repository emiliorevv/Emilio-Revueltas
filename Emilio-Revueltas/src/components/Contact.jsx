import { Container, Row, Col, Form } from 'react-bootstrap';
import { FiMapPin } from 'react-icons/fi';

function Contact() {
    return (
        <div id="contact" style={{ backgroundColor: 'var(--principal-background)', padding: '100px 0 50px 0' }}>
            <Container>
                <h2 style={{
                    color: 'var(--principal-font)',
                    fontWeight: 'bold',
                    fontSize: '2rem',
                    letterSpacing: '2px',
                    marginBottom: '60px',
                    textAlign: 'center'
                }}>
                    Contact Me
                    <div style={{ width: '40px', height: '3px', backgroundColor: 'var(--subprincipal-font)', margin: '10px auto 0 auto' }}></div>
                </h2>

                <Row className="justify-content-center">
                    <Col md={5} className="mb-5 mb-md-0">
                        <h3 style={{ color: 'var(--principal-font)', fontSize: '1.5rem', marginBottom: '30px' }}>Let's talk!</h3>
                        <p style={{ color: 'var(--secondary-font)', marginBottom: '40px', lineHeight: '1.6' }}>
                            I am interested in learning about new opportunities.
                            Whether you have a question or just want to say hi, I will try my best to get back to you!
                        </p>

                        <div className="d-flex align-items-center mb-4">
                            <div style={{ backgroundColor: 'var(--subprincipal-font)', padding: '12px', borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center', marginRight: '20px' }}>
                                <FiMapPin color="var(--principal-background)" size={20} />
                            </div>
                            <p style={{ color: 'var(--principal-font)', margin: 0 }}>Mexico, Mérida</p>
                        </div>
                    </Col>

                    <Col md={6} className="offset-md-1">
                        <Form action={import.meta.env.VITE_FORMSPREE_URL} method="POST" style={{ backgroundColor: 'var(--secondary-background)', padding: '40px', borderRadius: '10px', boxShadow: '0 10px 30px rgba(0,0,0,0.2)' }}>
                            <Form.Group className="mb-4" controlId="name">
                                <Form.Control type="text" name="name" placeholder="Your Name" required style={{ backgroundColor: 'var(--principal-background)', border: 'none', color: 'var(--principal-font)', padding: '15px' }} />
                            </Form.Group>

                            <Form.Group className="mb-4" controlId="email">
                                <Form.Control type="email" name="email" placeholder="Your Email" required style={{ backgroundColor: 'var(--principal-background)', border: 'none', color: 'var(--principal-font)', padding: '15px' }} />
                            </Form.Group>

                            <Form.Group className="mb-4" controlId="message">
                                <Form.Control as="textarea" name="message" rows={5} placeholder="Your Message" required style={{ backgroundColor: 'var(--principal-background)', border: 'none', color: 'var(--principal-font)', padding: '15px' }} />
                            </Form.Group>

                            <button
                                type="submit"
                                className="btn-custom-outline w-100 py-3 mt-2"
                                style={{ fontSize: '1.1rem' }}
                            >
                                Send Message
                            </button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Contact;
