import { Fragment } from "react";
import { Col, Placeholder, Row } from "react-bootstrap";
import { FaDatabase, FaDocker } from "react-icons/fa";
import { SiPostgresql, SiVite } from "react-icons/si";
import CodeBlock from "../CodeBlock";
import { DiMysql } from "react-icons/di";
import { GrMysql } from "react-icons/gr";

export default function DashboardViteAndDatabase() {
  return (
    <div className="mb-4">
      <div className="text-center mb-5">
        <h2 className="text-light">Structure compatible with everything</h2>
      </div>

      <Row className="g-3">
        <Col xs={12} sm={12} md={5} lg={4} xl={4}>
          <div className="rounded shadow border-lion-light p-4">
            <div className="mb-3">
              <Placeholder animation="wave">
                <Placeholder xs={10} className="text-lion-orange" size="lg" />
              </Placeholder>
            </div>

            <SiVite
              size={"3.5em"}
              title="Vite"
              className="float-start me-3 text-light"
            />

            <hr className="text-light" />

            <Fragment>
              <h5 className="text-light">{"Vite"}</h5>

              <p className="text-light mb-3">
                The Build Tool for the Web. Vite is a blazing fast frontend
                build tool powering the next generation of web applications.
              </p>

              <CodeBlock language="bash" content="php npm init" />
            </Fragment>
          </div>
        </Col>

        <Col xs={12} sm={12} md={7} lg={8} xl={8}>
          <div className="p-4 h-100 shadow rounded border-lion-light">
            <div className="mb-3">
              <FaDatabase
                size={"3.5em"}
                title="Database"
                className="float-end ms-2 text-light"
              />

              <Placeholder animation="wave">
                <Placeholder xs={9} className="text-lion-orange" size="lg" />
              </Placeholder>
            </div>

            <hr className="text-light" />

            <Fragment>
              <h5 className="text-light">{"Databases"}</h5>

              <p className="text-light mb-3">
                Compatible with any database engine, if you use Docker compose
                you can implement any database service to your project.
              </p>

              <div className="text-center">
                <GrMysql
                  size={"3.2em"}
                  title="MySQL"
                  className="me-3 text-light"
                />

                <SiPostgresql
                  size={"3.2em"}
                  title="PostgreSQL"
                  className="text-light"
                />
              </div>
            </Fragment>
          </div>
        </Col>
      </Row>
    </div>
  );
}
