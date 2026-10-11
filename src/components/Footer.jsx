import "../styles/Footer.css";

function Footer() {
  return (
    <footer className="site-footer">

      {/* Main footer */}
      <div className="footer-main">
        <div className="footer-brand">
          <a href="/" aria-label="Bakewell Street home">
            <img
              src="/logo.jpg"
              alt="Bakewell Street Bakery and Coffee"
            />
          </a>

          <h2>See you on the Street.</h2>
          <p className="brand-caption">BAKERY AND COFFEE</p>
        </div>

        <div className="footer-navigation">
          <h3>COME ON IN</h3>
          <a href="/">Home</a>
          <a href="/about">About Us</a>
          <a href="/menu">Menu</a>
          <a href="/branches">Branches</a>
          <a href="/franchise">Franchise Enquiry</a>
        </div>

        <div className="footer-social">
          <h3>THE EVERYDAY EDIT</h3>
          <p>
            Pastries, coffee and moments from
            <br className="desktop-break" /> the neighbourhood.
          </p>

          <div className="social-links">
            <p>
              bakewellstreet2026@gmail.com ↗
            </p>

            <a
              href="https://www.facebook.com/bakewellstreetbakeryandcoffee"
              target="_blank"
              rel="noreferrer"
            >
              Facebook ↗
            </a>
          </div>
        </div>
      </div>

      {/* Bottom footer */}
      <div className="footer-bottom">
        <p>© Bakewell Street · Bakery and Coffee 2026</p>

        <p className="footer-disclaimer">
          Design concept · Menu, prices, locations and business details
          are illustrative.
        </p>

        <div className="footer-legal">
          <a href="/privacy">Privacy</a>
          <span>·</span>
          <a href="/cookies">Cookies</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
