import logo from "@assets/lion-packages.svg";

function FooterNavigation() {
  return (
    <div
      className="mt-auto"
      style={{
        borderTop: "1px solid rgba(255, 255, 255, 0.1)",
        borderRight: "none",
        borderBottom: "none",
        borderLeft: "none",
      }}
    >
      <footer id="footer" className="pt-5 pb-4">
        <div className="container text-center text-md-start">
          <div className="row">
            <div className="col-md-8 mb-4 text-center text-md-start">
              <a href={"https://www.lion-packages.com/"} role="button">
                <img
                  src={logo}
                  alt="Lion-Parking"
                  className="fluid mb-3"
                  style={{ height: "60px", width: "auto" }}
                />
              </a>

              <p className="footer-desc text-light">
                Lion-Framework is a modern backend that integrates with Vite,
                Astro, and Capacitor to create everything from APIs to mobile
                applications.
              </p>
            </div>

            <div className="col-md-4 mb-4">
              <h5 className="fw-bold footer-title text-light">Síguenos</h5>

              <div className="d-flex justify-content-center justify-content-md-start gap-3">
                <a
                  href="https://www.facebook.com/profile.php?id=61573988267082"
                  className="footer-social text-lion-orange"
                >
                  <i className="bi bi-facebook"></i>
                </a>

                <a
                  href="https://www.instagram.com/lion_packages/"
                  className="footer-social text-lion-orange"
                >
                  <i className="bi bi-instagram"></i>
                </a>

                <a
                  href="https://linkedin.com/company/lion-packages"
                  className="footer-social text-lion-orange"
                >
                  <i className="bi bi-linkedin text-lion-orange"></i>
                </a>

                <a
                  href="https://www.tiktok.com/@lion_packages"
                  className="footer-social"
                >
                  <i className="bi bi-tiktok text-lion-orange"></i>
                </a>

                <a
                  href="https://www.youtube.com/@LionPackages"
                  className="footer-social"
                >
                  <i className="bi bi-youtube text-lion-orange"></i>
                </a>
              </div>
            </div>
          </div>

          <hr className="my-4 border-light" />

          <div className="text-center text-light small copyright">
            © {new Date().getFullYear()}{" "}
            <span className="text-lion-orange">Lion-Packages</span>.{" "}
            <span className="text-lion-orange">Lion-Packages</span> develops and
            maintains this framework and its ecosystem of libraries for building
            modern, scalable applications.
          </div>
        </div>
      </footer>
    </div>
  );
}

export default FooterNavigation;
