import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Collapse, Nav, NavItem, NavbarBrand, DropdownToggle, DropdownMenu, DropdownItem, Dropdown,Button} from "reactstrap";
import Logo from "./Logo";
import { ReactComponent as LogoWhite } from "../assets/images/logos/adminprowhite.svg";
import user1 from "../assets/images/users/user4.jpg";

const Header = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const [dropdownOpen, setDropdownOpen] = React.useState(false);

  const toggle = () => setDropdownOpen((prevState) => !prevState);
  const Handletoggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Navbar color="white" light expand="md" className="fix-header">
      <div className="d-flex align-items-center">
        <div className="d-lg-block d-none me-5 pe-3">
          <Logo />
        </div>
        <NavbarBrand href="/">
          <LogoWhite className="d-lg-none" />
        </NavbarBrand>
      </div>
      <div className="hstack gap-2">
        <Button
          color="primary"
          size="sm"
          className="d-sm-block d-md-none"
          onClick={Handletoggle}
        >
          {isOpen ? (
            <i className="bi bi-x"></i>
          ) : (
            <i className="bi bi-three-dots-vertical"></i>
          )}
        </Button>
      </div>

      <Collapse navbar isOpen={isOpen}>
        <Nav className="me-auto" navbar>
          <NavItem>
            <Link to="#" className="nav-link">
              Feed
            </Link>
          </NavItem>
          <NavItem>
            <Link to="#" className="nav-link">
              Dashboard
            </Link>
          </NavItem>

          <NavItem>
            <Link to="#" className="nav-link">
              Lookup
            </Link>
          </NavItem>

          <NavItem>
            <Link to="#" className="nav-link">
              List
            </Link>
          </NavItem>

          <NavItem>
            <Link to="#" className="nav-link">
              Team
            </Link>
          </NavItem>
                   
        </Nav>
        <Dropdown isOpen={dropdownOpen} toggle={toggle}>
          <DropdownToggle color="transparent">
            <img
              src={user1}
              alt="profile"
              className="rounded-circle"
              width="30"
            ></img>
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem header>Info</DropdownItem>
            <DropdownItem>My Account</DropdownItem>
            <DropdownItem>Edit Profile</DropdownItem>
            <DropdownItem divider />
            <DropdownItem>My Credits</DropdownItem>
            <DropdownItem>Inbox</DropdownItem>
            <DropdownItem>Logout</DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </Collapse>

      <Button>Upgrade</Button>
    </Navbar>
  );
};

export default Header;
