import "@assets/css/navbar.css";
import logo from "@assets/lion-packages.svg";
import { useState } from "react";
import { Image } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { FaDiscord, FaGithub, FaLinkedin, FaYoutube } from "react-icons/fa";
import { LinkContainer } from "react-router-bootstrap";
import NavigationLinks from "@tools/NavigationLinks";
import frameworkLts from "@hooks/versionLts";

function NavbarNavigation() {
  const [expanded, setExpanded] = useState(false);

  const FrameworkLink = () => {
    return (
      <LinkContainer to={`/docs/framework/${frameworkLts}/getting-started/about-as`}>
        <Nav.Link className='fw-bold d-flex align-items-center justify-content-center'>
          Framework
        </Nav.Link>
      </LinkContainer>
    );
  };

  return (
    <Navbar
      expanded={expanded}
      variant={'dark'}
      expand={'lg'}
      className={'p-0 navbar-blur'}
      style={{ '--bs-border-opacity': '.4' }}
    >
      <Container fluid>
        <LinkContainer to='/'>
          <Navbar.Brand onClick={() => setExpanded(false)}>
            <Image src={logo} width={200} className={'img-fluid'} />
          </Navbar.Brand>
        </LinkContainer>

        <Navbar.Toggle
          aria-controls={'basic-navbar-nav'}
          onClick={() => setExpanded(!expanded)}
        />

        <Navbar.Collapse id="basic-navbar-nav" in={expanded}>
          <Nav className="ms-auto">
            <FrameworkLink />

            <Nav.Link href="#" className="d-none d-xl-block">
              <div className="vr h-100"></div>
            </Nav.Link>

            {NavigationLinks.map((link, index) =>
              link.type === "link" ? (
                <LinkContainer to={link.url} key={index}>
                  <Nav.Link
                    className="fw-bold d-flex align-items-center justify-content-center"
                  >
                    {link.display_name}
                  </Nav.Link>
                </LinkContainer>
              ) : (
                <NavDropdown
                  key={index}
                  title={link.display_name}
                  menuVariant="blur"
                  align={"end"}
                  className="fw-bold d-flex align-items-center justify-content-center"
                >
                  {link.childs.map((child, indexChild) => (
                    <LinkContainer to={child.url} key={indexChild}>
                      <NavDropdown.Item>{child.display_name}</NavDropdown.Item>
                    </LinkContainer>
                  ))}
                </NavDropdown>
              )
            )}

            <Nav.Link href="#" className="d-none d-xl-block">
              <div className="vr h-100"></div>
            </Nav.Link>

            <Nav.Link
              href={"https://youtube.com/@lionpackages?si=sJ1s5wmIHpo-QTzq"}
              className="text-center"
              target="_blank"
            >
              <FaYoutube size={"1.8em"} className="text-lion-orange" />
            </Nav.Link>

            <Nav.Link
              href={
                "https://www.linkedin.com/company/101856499/admin/feed/posts/"
              }
              className="text-center"
              target="_blank"
            >
              <FaLinkedin size={"1.8em"} className={'text-lion-orange'} />
            </Nav.Link>

            <Nav.Link
              href={"https://github.com/lion-packages"}
              className="text-center"
              target="_blank"
            >
              <FaGithub size={"1.8em"} />
            </Nav.Link>

            <Nav.Link
              href={"https://discord.gg/r8aNT8YtUy"}
              className="text-center"
              target="_blank"
            >
              <FaDiscord size={"1.8em"} className={'text-lion-orange'} />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarNavigation;
