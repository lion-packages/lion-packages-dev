import { Fragment } from "react";
import { Container } from "react-bootstrap";
import DashboardRoutesAndApiAndTest from "./components/dashboard/DashboardRoutesAndApiAndTest";
import DashboardServerAndDocker from "./components/dashboard/DashboardServerAndDocker";
import DashboardTaskInQueueAndCommands from "./components/dashboard/DashboardTaskInQueueAndCommands";
import DashboardTecnologies from "./components/dashboard/DashboardTecnologies";
import DashboardViteAndDatabase from "./components/dashboard/DashboardViteAndDatabase";
import Welcome from "./components/dashboard/Welcome.jsx";

export default function DashboardContent() {
  return (
    <Fragment>
      <Welcome />

      <Container>
        <DashboardServerAndDocker />

        <DashboardRoutesAndApiAndTest />

        <DashboardViteAndDatabase />

        <DashboardTaskInQueueAndCommands />

        <DashboardTecnologies />
      </Container>
    </Fragment>
  );
}
