import { Fragment } from "react";
import { Col, Row } from "react-bootstrap";
import CodeBlock from "../CodeBlock";
import { FaTasks, FaTerminal } from "react-icons/fa";

export default function DashboardTaskInQueueAndCommands() {
  return (
    <div className="mb-5">
      <Row className="g-3">
        <Col xs={12} sm={12} md={5} lg={8} xl={8}>
          <div className="rounded shadow border-lion-light p-4">
            <FaTerminal
              size={"3.5em"}
              title="Terminal"
              className="float-end ms-3 text-light"
            />

            <hr className="text-light" />

            <h5 className="text-light">{"Commands"}</h5>

            <p className="text-light mb-3">
              Create your own commands with Lion-Framework, perform tasks using
              custom commands.
            </p>

            <CodeBlock
              language="bash"
              content="php lion new:command MyCustomCommand"
            />
          </div>
        </Col>

        <Col xs={12} sm={12} md={7} lg={4} xl={4}>
          <div className="p-4 h-100 shadow rounded border-lion-light">
            <FaTasks
              size={"3.5em"}
              title="Tasks"
              className="float-start me-3 text-light"
            />

            <hr className="text-light" />

            <Fragment>
              <h5 className="text-light">{"Task in Queue"}</h5>

              <p className="text-light">
                Add and run tasks in a queue with Redis. This creates a
                background process for all system processes that need to be run
                with PHP.
              </p>
            </Fragment>
          </div>
        </Col>
      </Row>
    </div>
  );
}
