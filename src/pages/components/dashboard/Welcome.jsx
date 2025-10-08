import logo from "@assets/lion-packages.svg";

export default function Welcome() {
  return (
    <main>
      <section id="hero">
        <a href="https://www.lion-packages.com" target="_blank">
          <img
            src={logo}
            alt="Lion-Packages Homepage"
            className="img-fluid"
            style={{ height: "70px", width: "auto" }}
          />
        </a>

        <h1 className="text-light">
          Build with PHP and take your application to the next level.
        </h1>

        <p className={"text-light"}>
          Lion-Framework is a modern backend that integrates with Vite, Astro,
          and Capacitor to create everything from APIs to mobile applications.
        </p>

        <div className="my-3" id="links">
          <a href={"#"} className="button">
            Read the docs
          </a>
        </div>
      </section>
    </main>
  );
}
