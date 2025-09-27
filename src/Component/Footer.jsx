import Container from "./Container";

const Footer = () => {
  return (
    <footer className="bg-black">
      <Container>
        <div className="footer-box">
          <div>
            <h1 className="title">CS — Ticket System</h1>
            <p className="text-[#A1A1AA]">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>
          <div>
            <h1 className="title">Company</h1>
            <ol className="links">
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Our Mission</a>
              </li>
              <li>
                <a href="#">Contact Saled</a>
              </li>
            </ol>
          </div>
          <div>
            <h1 className="title">Services</h1>
            <ol className="links">
              <li>
                <a href="#">Products & Services</a>
              </li>
              <li>
                <a href="#">Customer Stories</a>
              </li>
              <li>
                <a href="#">Download Apps</a>
              </li>
            </ol>
          </div>
          <div>
            <h1 className="title">Information</h1>
            <ol className="links">
              <li>
                <a href="#">Privacy Policy</a>
              </li>
              <li>
                <a href="#">Terms & Conditions</a>
              </li>
              <li>
                <a href="#">Join Us</a>
              </li>
            </ol>
          </div>
          <div>
            <h1 className="title">Social Links</h1>
            <ol className="links">
              <li>
                <a className="line" href="https://x.com/?lang=en">
                  <img
                    className="social"
                    src="/fi_5969020.png"
                    alt="fi_5969020.png"
                  />
                  @CS — Ticket System
                </a>
              </li>
              <li>
                <a className="line" href="https://www.linkedin.com/">
                  <img
                    className="social"
                    src="/fi_145807.png"
                    alt="fi_145807.png"
                  />
                  @CS — Ticket System
                </a>
              </li>
              <li>
                <a className="line" href="https://www.facebook.com/">
                  <img
                    className="social"
                    src="/fi_5968764.png"
                    alt="fi_5968764.png"
                  />
                  @CS — Ticket System
                </a>
              </li>
              <li>
                <a
                  className="line"
                  href="https://mail.google.com/support-zine@gmail.com"
                  target="_blank"
                >
                  <img
                    className="social"
                    src="/Vector (3).png"
                    alt="Vector (3).png"
                  />
                  support@cst.com
                </a>
              </li>
            </ol>
          </div>
        </div>
        <div className="pb-7 text-white text-center">
          <p>© 2025 CS — Ticket System. All rights reserved.</p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
