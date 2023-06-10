import { Container, Nav, NavDropdown, Navbar } from "react-bootstrap";
import { pages } from "./pages";
import { Item } from "./item";

export const Navigation = () => {
  return (
    <Navbar bg="transparent">
      <Container>
        <Navbar.Brand> Test Task </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic navbar-nav" />
        <Navbar.Collapse>
          <Nav className="me-auto">
            <NavDropdown title="Бургер (вкусно?) " id="basic-navbar-nav">
              {pages.map(({ label, to }) => (
                <NavDropdown.Item>
                  <Item key={label} label={label} link={to} />
                </NavDropdown.Item>
              ))}
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
