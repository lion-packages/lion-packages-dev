import "@assets/css/dashboard.css";
import { Col, Row } from "react-bootstrap";
import { technologies } from "./data";
import EmptyTechnologyRow from "./EmptyTechnologyRow";
import TechnologyBlock from "./TechnologyBlock";

export default function DashboardTechnologies() {
  const totalColumns = 12;

  const normalizedRows = technologies.map((row) => {
    const diff = totalColumns - row.length;

    if (diff <= 0) return row;

    const leftPad = Math.floor(diff / 2);

    const rightPad = diff - leftPad;

    return [
      ...Array(leftPad).fill(null),
      ...row,
      ...Array(rightPad).fill(null),
    ];
  });

  return (
    <div className="text-center mb-5">
      <div className="mb-5">
        <h2 className="text-light">
          Compatibility with your favorite technologies
        </h2>
      </div>

      {/* Top spacing */}
      <EmptyTechnologyRow />

      {normalizedRows.map((row, rowIndex) => (
        <Row key={rowIndex}>
          {row.map((Icon, i) => (
            <Col xs={3} sm={3} md={2} lg={1} className="mb-3 mx-auto" key={i}>
              {Icon ? (
                <TechnologyBlock>
                  <Icon size="3em" className="text-lion-orange" />
                </TechnologyBlock>
              ) : (
                <div className="py-5 rounded shadow border-lion-light h-100 blocks" />
              )}
            </Col>
          ))}
        </Row>
      ))}

      {/* Bottom spacing */}
      <EmptyTechnologyRow />
    </div>
  );
}
