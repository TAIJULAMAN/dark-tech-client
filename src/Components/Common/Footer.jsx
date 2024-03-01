const Footer = () => {
  return (
    <div className="bg-base-300">
      <footer className="footer bg-base-300 p-10 text-black-content">
        <nav>
          <h6 className="footer-title">Services</h6>
          <a className="link link-hover">Web Design</a>
          <a className="link link-hover">Web Development</a>
          <a className="link link-hover">Server Provider</a>
          <a className="link link-hover">SEO</a>
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About Us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Services</a>
          <a className="link link-hover">Our Team</a>
        </nav>
        <nav>
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover">Terms of Use</a>
          <a className="link link-hover">Privacy Policy</a>
          <a className="link link-hover">Cookie Policy</a>
        </nav>
      </footer>
      <aside className="text-center p-4">
        <p>Copyright © 2024 - All right reserved by Dark Tech.</p>
      </aside>
    </div>
  );
};

export default Footer;
