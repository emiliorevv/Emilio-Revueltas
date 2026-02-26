import { Navbar, Nav, Container } from 'react-bootstrap';

function Navigation() {
    return (
        <Navbar expand="lg" variant="dark" style={{ backgroundColor: 'transparent', paddingTop: '20px', paddingBottom: '20px' }}>
            <Container>
                <Navbar.Brand href="#home" style={{ color: 'var(--subprincipal-font)', fontWeight: 'bold' }}>Emilio</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                    <Nav>
                        <Nav.Link href="#whoami" className="text-white text-uppercase" style={{ fontSize: '0.85rem', marginLeft: '1rem' }}>whoami?</Nav.Link>
                        <Nav.Link href="#portfolio" className="text-white text-uppercase" style={{ fontSize: '0.85rem', marginLeft: '1rem' }}>portfolio</Nav.Link>
                        <Nav.Link href="#cv" className="text-white text-uppercase" style={{ fontSize: '0.85rem', marginLeft: '1rem' }}>cv</Nav.Link>
                        <Nav.Link href="#contact" className="text-white text-uppercase" style={{ fontSize: '0.85rem', marginLeft: '1rem' }}>contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Navigation;
