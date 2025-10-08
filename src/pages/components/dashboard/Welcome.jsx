import frameworkLts from "@hooks/versionLts";
import { Link } from "react-router-dom";

export default function Welcome() {
  return (
    <main>
      <section id="hero">
        <h1 className="text-light">
          Build with PHP and take your application to the next level.
        </h1>

        <p className={"text-light"}>
          Lion-Framework is a modern backend that integrates with Vite, Astro,
          and Capacitor to create everything from APIs to mobile applications.
        </p>

        <div className="my-3" id="links">
          <Link
            to={`/docs/framework/${frameworkLts}/getting-started/about-as`}
            className="button"
          >
            Read the docs
          </Link>
        </div>
      </section>
    </main>
  );
}
