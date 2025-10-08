import { Col } from "react-bootstrap";

export default function EmptyTechnologyBlock() {
  return (
    <Col xs={3} sm={3} md={2} lg={1} className="mb-3">
      <div className="py-5 rounded shadow border-lion-light h-100 blocks" />
    </Col>
  );
}
