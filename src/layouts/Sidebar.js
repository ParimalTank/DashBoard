import { Button, Nav, NavItem } from "reactstrap";
import { Link, useLocation } from "react-router-dom";

const navigation = [
  {
    title: "Hot Scoops",
    href: "#",
  },
  {
    title: "Earning",
    href: "#",
  },
  {
    title: "Awards",
    href: "#",
  },
  {
    title: "Expansion",
    href: "#",
  },
  {
    title: "Open Position",
    href: "#",
  },
  {
    title: "New Hire",
    href: "#",
  },
  {
    title: "Analytics & Reporting",
    href: "#",
  },
  {
    title: "Budgeting & Planning",
    href: "#",
  },
  {
    title: "Communication",
    href: "#",
  },
  {
    title: "Technology",
    href: "#",
  },
  {
    title: "Legal",
    href: "#",
  },
  {
    title: "Infrastructure",
    href: "#",
  },
  {
    title: "Marketing",
    href: "#",
  },
];

const Sidebar = () => {
  const showMobilemenu = () => {
    document.getElementById("sidebarArea").classList.toggle("showSidebar");
  };
  let location = useLocation();

  return (
    <div className="bg-light">
      <div className="d-flex">
        <Button
          color="black"
          className="ms-auto text-white d-lg-none"
          onClick={() => showMobilemenu()}
        >
          <i className="bi bi-x"></i>
        </Button>
      </div>
      <div style={{backgroundColor: "white", color: 'black'}} className="p-3 mt-2 text-black">
        <Nav vertical className="sidebarNav ">
          {navigation.map((navi, index) => (
            <NavItem key={index} className="sidenav-bg">
              <Link
                to={navi.href}
                className={
                  location.pathname === navi.href
                    ? "active nav-link py-3"
                    : "nav-link py-3"
                }
              >
                <i className={navi.icon}></i>
                <span className="ms-3 d-inline-block">{navi.title}</span>
              </Link>
            </NavItem>
          ))}
        </Nav>
      </div>
    </div>
  );
};

export default Sidebar;
