import { useRef } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { IoIosArrowDown } from "react-icons/io";
import Counter from './Counter';
import Servicesect from './ServiceSect';
import { Color } from 'antd/es/color-picker';
import CounterComponent from './CounterComponent';

function BasicExample() {
  const ref = useRef(null);

  const handleClick = () => {
    ref.current?.scrollIntoView({behavior: 'smooth'});
  };
    
  return (
    <>
      <Navbar collapseOnSelect expand="lg" data-bs-theme="light" style={{backgroundColor: '#fff'}}>
        <Container fluid style={{backgroundColor: '#fff'}}>
          <Navbar.Brand href="#home"><img alt='Client Logo' src='right_career_home1.webp' /></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#link">Link</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div className="bg-img">
        <div></div>
        <h1 className="ms-2 text-white">Empowering Talent, <br />Transforming Futures Together</h1>
        <div className="text-center custom-icon"><IoIosArrowDown onClick={handleClick} className='custom-typography' /></div>
      </div>
      <section ref={ref} style={{backgroundColor: '#ef8f22'}} className='p-5 w80 sect-overview'>
        <p className='container pb-2 over-text'>
          Right Careers is a global IT and Non-IT Talent & Skills Management leader, connecting top talent with industry-leading organizations across the US, UK, UAE, India, and New Zealand.<br /><br />
          We specialize in providing immediate access to highly skilled professionals in in-demand tech domains such as Microsoft, SAP, Salesforce, Oracle, and Cybersecurity.
        </p> 
        <button style={{backgroundColor: '#bcc4c9'}} className='px-4 py-2 d-flex sbmt-btn border-0'>Read More</button><br />
      </section>
      <Counter />
      <Servicesect />
      <CounterComponent />
      <Servicesect />
      <Servicesect />
    </>
  );
}

export default BasicExample;