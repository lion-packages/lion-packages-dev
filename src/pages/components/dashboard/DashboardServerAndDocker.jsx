import { Fragment } from "react";
import { Col, Placeholder, Row } from "react-bootstrap";
import { FaDocker } from "react-icons/fa";
import CodeBlock from "../CodeBlock";

export default function DashboardServerAndDocker() {
  return (
    <div className="mb-4">
      <div className="text-center mb-5">
        <h1 className="text-light">Multiple Tools</h1>

        <p className="text-light">
          Lion-Framework allows you to carry out an entire development with
          simple tools
        </p>
      </div>

      <Row className="g-3">
        <Col xs={12} sm={12} md={5} lg={4} xl={4}>
          <div className="rounded p-4 border-lion-light shadow">
            <div className="mb-3">
              <Placeholder animation="wave">
                <Placeholder xs={10} className="text-lion-orange" size="lg" />

                <Placeholder xs={8} className="text-lion-orange" size="lg" />
              </Placeholder>
            </div>

            <label className="text-light">
              {"Lion-Framework ready in "}
              <span className="text-lion-orange">{"0.040 ms"}</span>
            </label>

            <hr className="text-light" />

            <Fragment>
              <h5 className="text-light">{"Instant Server Start"}</h5>

              <p className="text-light mb-3">
                Start your server in a matter of milliseconds through the
                terminal by running a single command.
              </p>

              <CodeBlock language={"bash"} content={"php lion serve"} />
            </Fragment>
          </div>
        </Col>

        <Col xs={12} sm={12} md={7} lg={8} xl={8}>
          <div className="p-4 h-100 rounded border-lion-light shadow">
            <div className="mb-3">
              <FaDocker
                size={"4em"}
                title="Docker"
                className="me-3 text-light"
              />

              <Placeholder animation="wave">
                <Placeholder xs={10} className="text-lion-orange" size="lg" />

                <Placeholder xs={8} className="text-lion-orange" size="lg" />
              </Placeholder>
            </div>

            <hr className="text-light" />

            <Fragment>
              <h5 className="text-light">{"Docker"}</h5>

              <p className="text-light">
                Create Docker containers using Lion-Framework, where you can
                work with MySQL, PostgreSQL and other databases.
              </p>
            </Fragment>
          </div>
        </Col>
      </Row>
    </div>
  );
}
