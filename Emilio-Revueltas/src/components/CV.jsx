import { Container, Row, Col } from 'react-bootstrap';
import cvImage from '../assets/cv.png';
import cvSpanishPdf from '../assets/CurriculumEspañol copy.pdf';
import cvEnglishPdf from '../assets/CVEnglish copy.pdf';

function CV() {
    return (
        <div id="cv" style={{ backgroundColor: 'var(--secondary-background)', padding: '100px 0' }}>
            <Container>
                <h2 style={{
                    color: 'var(--principal-font)',
                    fontWeight: 'bold',
                    fontSize: '2rem',
                    letterSpacing: '2px',
                    marginBottom: '60px'
                }}>
                    CV
                    <div style={{ width: '40px', height: '3px', backgroundColor: 'var(--subprincipal-font)', marginTop: '10px' }}></div>
                </h2>

                <Row className="justify-content-center">
                    <Col md={5} className="mb-5 mb-md-0 d-flex justify-content-center">
                        <div style={{ width: '100%', maxWidth: '300px', textAlign: 'left' }}>
                            <p style={{ color: 'var(--principal-font)', fontSize: '0.9rem', marginBottom: '20px' }}>
                                Curriculum (Español)
                            </p>

                            <a href={cvSpanishPdf} download="Curriculum-Emilio-ES.pdf" style={{ display: 'block' }}>
                                <div style={{ cursor: 'pointer', transition: 'transform 0.2s' }} onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-5px)'} onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
                                    <img
                                        src={cvImage}
                                        alt="CV in Spanish"
                                        style={{
                                            width: '100%',
                                            maxWidth: '220px',
                                            display: 'block'
                                        }}
                                    />
                                </div>
                            </a>

                            <p style={{ color: 'var(--secondary-font)', fontSize: '0.75rem', marginTop: '30px' }}>
                                Ultima vez actualizado: Febrero de 2026
                            </p>
                        </div>
                    </Col>

                    <Col md={5} className="d-flex justify-content-center">
                        <div style={{ width: '100%', maxWidth: '300px', textAlign: 'left' }}>
                            <p style={{ color: 'var(--principal-font)', fontSize: '0.9rem', marginBottom: '20px' }}>
                                CV (English)
                            </p>

                            <a href={cvEnglishPdf} download="Curriculum-Emilio-EN.pdf" style={{ display: 'block' }}>
                                <div style={{ cursor: 'pointer', transition: 'transform 0.2s' }} onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-5px)'} onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
                                    <img
                                        src={cvImage}
                                        alt="CV in English"
                                        style={{
                                            width: '100%',
                                            maxWidth: '220px',
                                            display: 'block'
                                        }}
                                    />
                                </div>
                            </a>

                            <p style={{ color: 'var(--secondary-font)', fontSize: '0.75rem', marginTop: '30px' }}>
                                Last Updated: February 2026
                            </p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default CV;
