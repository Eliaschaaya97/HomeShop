

function Footer() {
  return (
    <footer className="bg-dark text-white text-center py-3">
      <div className="container">
        <p>&copy; {new Date().getFullYear()} Twins Tech</p>
        <div className="d-flex justify-content-center">
          <ul className="list-inline">
            <li className="list-inline-item">
              <a href="/contact">Contact Us</a>
            </li>
            <li className="list-inline-item">|</li>
            <li className="list-inline-item">
              <a href="/about">About Us</a>
            </li>
            <li className="list-inline-item">|</li>
            <li className="list-inline-item">
              <a href="/services">Services</a>
            </li>
            <li className="list-inline-item">|</li>
            <li className="list-inline-item">
              <a href="/blog">Blog</a>
            </li>
            <li className="list-inline-item">|</li>
            <li className="list-inline-item">
              <a href="/career">Career</a>
            </li>
            <li className="list-inline-item">|</li>
            <li className="list-inline-item">
              <a href="/faq">FAQ</a>
            </li>
            <li className="list-inline-item">|</li>
            <li className="list-inline-item">
              <a href="#">
                <i className="fab fa-instagram"></i> Instagram
              </a>
            </li>
            <li className="list-inline-item">|</li>
            <li className="list-inline-item">
              <a href="#">
                <i className="fab fa-facebook"></i> Facebook
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
