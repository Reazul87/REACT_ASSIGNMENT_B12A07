import Container from "./Container";

const Navbar = () => {
  return (
    <div className="bg-base-100 shadow-sm">
      <Container>
        <div className="navbar flex flex-col md:flex-row">
          <div className="flex-1">
            <h4 className="text-xl font-bold cursor-pointer">CS — Ticket System</h4>
          </div>
          <div className="flex flex-col md:flex-row gap-2.5 justify-center items-center">
            <ul className="menu justify-center menu-horizontal px-1">
              <li>
                <a>Home</a>
              </li>
              <li>
                <a href="#">FAQ</a>
              </li>
              <li>
                <a href="#">Changelog</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="#">Download</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
            <button
              type="button"
              className="btn-primary btn bg-gradient-to-r from-[#632EE3] to-[#9F62F2]"
            >
              <span className="mr-1">+</span>New Ticket
            </button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
