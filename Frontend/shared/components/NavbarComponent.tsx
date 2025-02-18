
import { Navbar } from "flowbite-react";
import { useLocation } from "react-router-dom";

export function NavbarComponent() {
  const location = useLocation(); // Get current route

  // Function to open Register page in a new window
  const openRegisterPage = () => {
    window.open("/register", "_blank");
  };

  // Function to open Login page in a new window
  const openLoginPage = () => {
    window.open("/login", "_blank");
  };

  return (
    <Navbar fluid rounded>
      <Navbar.Brand href="/">
        <img src="src/assets/images.png" className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">IISC</span>
      </Navbar.Brand>
      <div className="flex md:order-2 space-x-4">
        {/* Always render Register and Login buttons */}
        <button onClick={openRegisterPage} className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
          Register
        </button>
        <button onClick={openLoginPage} className="w-full bg-green-500 text-white p-2 rounded hover:bg-green-600">
          Login
        </button>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link href="/" active={location.pathname === "/"}>Home</Navbar.Link>
        <Navbar.Link href="/about" active={location.pathname === "/about"}>About</Navbar.Link>
        <Navbar.Link href="/setup-guide" active={location.pathname === "/setup-guide"}>Setup Guide</Navbar.Link>
        <Navbar.Link href="/contact" active={location.pathname === "/contact"}>Contact</Navbar.Link>
        <Navbar.Link href="/dashboard" active={location.pathname === "/dashboard"}>Dashboard</Navbar.Link> {/* New Dashboard Link */}
      </Navbar.Collapse>
    </Navbar>
  );
}
