import { Row } from "react-bootstrap";
import EmptyTechnologyBlock from "./EmptyTechnologyBlock";

export default function EmptyTechnologyRow() {
  return (
    <Row>
      {[...Array(12)].map((_, index) => (
        <EmptyTechnologyBlock key={index} />
      ))}
    </Row>
  );
}
