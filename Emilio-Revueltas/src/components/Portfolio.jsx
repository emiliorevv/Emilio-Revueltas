import { Container, Row, Col } from 'react-bootstrap';
import { FiFolder, FiGithub, FiExternalLink } from 'react-icons/fi';

function Portfolio() {
    const projects = [
        {
            id: 1,
            title: 'CreditAI',
            description: 'An AI-powered system to analyze credit benefits and provide insights based on financial data and promotions.',
            tech: 'TypeScript, React, Node.js, Supabase, Vite',
            github: 'https://github.com/emiliorevv/CreditAI',
            demo: ''
        },
        {
            id: 2,
            title: 'MoneyMissint',
            description: 'scalable RESTful API designed for personal finance management. It implements a clean architecture and is secured by token-based authentication.',
            tech: 'Java, Spring Boot, PostgreSQL, JWT, Docker',
            github: 'https://github.com/emiliorevv/MoneyMissint',
            demo: ''
        },
        {
            id: 3,
            title: 'API Gateway',
            description: 'A robust API Gateway implementation for routing, authentication and rate limiting. This project implements the Token Bucket Algorithm to control traffic flow, ensuring reliability and preventing abuse.',
            tech: 'Go, Docker, Redis, Lua',
            github: 'https://github.com/emiliorevv/api-gateway',
            demo: ''
        },
        {
            id: 4,
            title: 'AI Sales Assistant',
            description: 'Automated sales assistant using n8n, OpenAI, Meta Business and Google Sheets for lead management.',
            tech: 'n8n, OpenAI API, Meta Business API, Google Sheets',
            github: 'https://github.com/emiliorevv/AI-Sales-Assistant-n8n-OpenAI-Google-Sheets',
            demo: ''
        },
        {
            id: 5,
            title: 'QR Code Reader to XLSX',
            description: 'Utility tool that scans QR codes and automatically exports the decoded data to an Excel spreadsheet.',
            tech: 'Python, OpenCV, OpenPyXL',
            github: 'https://github.com/emiliorevv/qrcode_reader_to_xlsx',
            demo: ''
        }
    ];

    return (
        <div id="portfolio" style={{ backgroundColor: 'var(--principal-background)', padding: '100px 0' }}>
            <Container>
                <h2 style={{
                    color: 'var(--principal-font)',
                    fontWeight: 'bold',
                    fontSize: '2rem',
                    letterSpacing: '2px',
                    marginBottom: '50px'
                }}>
                    Portfolio
                </h2>

                <Row className="mb-5">
                    {projects.map((project) => (
                        <Col xs={12} md={6} lg={4} className="mb-4" key={project.id}>
                            <div
                                style={{
                                    backgroundColor: 'var(--secondary-background)',
                                    borderRadius: '8px',
                                    padding: '30px 25px',
                                    height: '100%',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                                    cursor: 'pointer'
                                }}
                                onMouseOver={(e) => {
                                    e.currentTarget.style.transform = 'translateY(-5px)';
                                    e.currentTarget.style.boxShadow = '0 10px 30px -15px rgba(0,0,0,0.5)';
                                }}
                                onMouseOut={(e) => {
                                    e.currentTarget.style.transform = 'translateY(0)';
                                    e.currentTarget.style.boxShadow = 'none';
                                }}
                            >
                                <div className="d-flex justify-content-between align-items-center mb-4">
                                    <FiFolder size={40} color="var(--subprincipal-font)" />
                                    <div>
                                        {project.github && (
                                            <a href={project.github} target="_blank" rel="noreferrer" style={{ color: 'var(--secondary-font)', marginLeft: '15px', transition: 'color 0.2s' }} onMouseOver={(e) => e.currentTarget.style.color = 'var(--subprincipal-font)'} onMouseOut={(e) => e.currentTarget.style.color = 'var(--secondary-font)'}>
                                                <FiGithub size={22} />
                                            </a>
                                        )}
                                        {project.demo && (
                                            <a href={project.demo} target="_blank" rel="noreferrer" style={{ color: 'var(--secondary-font)', marginLeft: '15px', transition: 'color 0.2s' }} onMouseOver={(e) => e.currentTarget.style.color = 'var(--subprincipal-font)'} onMouseOut={(e) => e.currentTarget.style.color = 'var(--secondary-font)'}>
                                                <FiExternalLink size={22} />
                                            </a>
                                        )}
                                    </div>
                                </div>

                                <h3 style={{ color: 'var(--principal-font)', fontSize: '1.3rem', fontWeight: 'bold', marginBottom: '15px' }}>
                                    {project.title}
                                </h3>

                                <p style={{ color: 'var(--secondary-font)', fontSize: '0.95rem', lineHeight: '1.6', flexGrow: 1 }}>
                                    {project.description}
                                </p>

                                <div style={{ color: 'var(--secondary-font)', fontSize: '0.8rem', opacity: 0.8, marginTop: '20px' }}>
                                    {project.tech}
                                </div>
                            </div>
                        </Col>
                    ))}
                </Row>

                <div className="text-center">
                    <a href="https://github.com/emiliorevv" target="_blank" rel="noreferrer" style={{ textDecoration: 'none' }}>
                        <button className="btn-custom-outline">
                            View More on GitHub
                        </button>
                    </a>
                </div>
            </Container>
        </div>
    );
}

export default Portfolio;
