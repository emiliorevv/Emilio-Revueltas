import { Container, Row, Col } from 'react-bootstrap';
import { FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi';

function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer style={{ backgroundColor: 'var(--secondary-background)', padding: '30px 0', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
            <Container>
                <Row className="align-items-center">
                    <Col md={6} className="text-center text-md-start mb-3 mb-md-0">
                        <p style={{ color: 'var(--secondary-font)', margin: 0, fontSize: '0.9rem' }}>
                            &copy; {currentYear} Emilio Revueltas. All rights reserved.
                        </p>
                        <p style={{ color: 'var(--secondary-font)', margin: '10px 0 0 0', fontSize: '0.75rem', opacity: 0.7 }}>
                            <a href="https://www.flaticon.es/iconos-gratis/robot" title="robot iconos" target="_blank" rel="noreferrer" style={{ color: 'var(--secondary-font)', textDecoration: 'none' }}>Robot iconos creados por Muhammad Ali - Flaticon</a>
                        </p>
                    </Col>
                    <Col md={6} className="text-center text-md-end">
                        <a href="https://github.com/emiliorevv" target="_blank" rel="noreferrer" style={{ color: 'var(--secondary-font)', margin: '0 15px', transition: 'color 0.2s' }} onMouseOver={(e) => e.currentTarget.style.color = 'var(--subprincipal-font)'} onMouseOut={(e) => e.currentTarget.style.color = 'var(--secondary-font)'}>
                            <FiGithub size={24} />
                        </a>
                        <a href="https://www.linkedin.com/in/emilio-revueltas/" target="_blank" rel="noreferrer" style={{ color: 'var(--secondary-font)', margin: '0 15px', transition: 'color 0.2s' }} onMouseOver={(e) => e.currentTarget.style.color = 'var(--subprincipal-font)'} onMouseOut={(e) => e.currentTarget.style.color = 'var(--secondary-font)'}>
                            <FiLinkedin size={24} />
                        </a>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}

export default Footer;
