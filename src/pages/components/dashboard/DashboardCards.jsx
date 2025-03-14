import { Col, Row } from "react-bootstrap";
import { DiMysql } from "react-icons/di";
import {
  FaDocker,
  FaLightbulb,
  FaPhp,
  FaTasks,
  FaTerminal,
} from "react-icons/fa";
import { MdHttp } from "react-icons/md";
import { RiTestTubeFill } from "react-icons/ri";
import { TbArrowsLeftRight } from "react-icons/tb";

const iconList = [
  {
    title: "Instant Server Start",
    desc: "Start your server in a matter of milliseconds through the terminal by running a single command.",
    icons: [<FaLightbulb size={"2em"} title="PHP" />],
  },
  {
    title: "API",
    desc: "Build complete and robust applications in PHP using Lion-Framework and ReactJS. Or, let Lion-Framework work as a robust back-end API for your ViteJS app, mobile app, or other interface.",
    icons: [<FaPhp size={"2em"} title="PHP" />],
  },
  {
    title: "Routes",
    desc: "Create all the routes you want for your web application, protect your routes through Middleware, export collections to POSTMAN or call your API from (ReactJS - VueJS - Kotlin).",
    icons: [<MdHttp size={"2.2em"} title="HTTP" />],
  },
  {
    title: "Testing",
    desc: "Testing Lion-Framework integrates unit tests internally with PHPUnit, feel free to create the necessary tests to check the proper functioning of your web app.",
    icons: [<RiTestTubeFill size={"2em"} title="Test" />],
  },
  {
    title: "Docker",
    desc: "Create docker containers using Lion-Framework, where you can work with apache and MySQL databases.",
    icons: [<FaDocker size={"2em"} title="Docker" />],
  },
  {
    title: "Cron",
    desc: "Run necessary commands via SH files to perform your tasks via Lion-Framework.",
    icons: [<FaTasks size={"1.6em"} title="Tasks" className="my-1" />],
  },
  {
    title: "Database",
    desc: "Lion-Framework supports multiple connections to MySQL databases, Map all entities of your database and generate objects of the capsule classes through its static 'capsule()' method.",
    icons: [<DiMysql size={"1.8em"} title="MySQL" />],
  },
  {
    title: "Sockets",
    desc: "Create web applications in real time with Lion-Framework, Interact with Ratchet to establish bidirectional connections.",
    icons: [
      <TbArrowsLeftRight size={"1.8em"} className="my-1" title="Sockets" />,
    ],
  },
  {
    title: "Commands",
    desc: "Create your own commands with Lion-Framework, perform tasks using custom commands.",
    icons: [<FaTerminal size={"1.8em"} className="my-1" title="Command" />],
  },
];

export default function DashboardCards() {
  const AddIcons = ({ icons }) => {
    return (
      <Row>
        {icons.map((icon, index) => (
          <Col key={index} xs={4} sm={2} md={3} className="mb-3">
            <div className="bg-dark-logo text-center rounded-4 py-2 h-100">
              {icon}
            </div>
          </Col>
        ))}
      </Row>
    );
  };

  const AddColumns = ({ container }) => {
    return (
      <Col xs={12} sm={12} md={6} lg={6} xl={4} className="mx-auto mb-4">
        <div className="p-4 rounded-4 bg-dark h-100">
          <AddIcons icons={container.icons} />

          <h5>{container.title}</h5>

          <p className="text-secondary fs-6 fw-bold">{container.desc}</p>
        </div>
      </Col>
    );
  };

  return (
    <Row>
      {iconList.map((container, index) => (
        <AddColumns key={index} container={container} />
      ))}
    </Row>
  );
}
