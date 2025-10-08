import { Badge } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

export default function CardLink({ title, description, uri, support }) {
  return (
    <LinkContainer to={uri}>
      <div
        className={'p-4 rounded shadow border-lion-light h-100 d-flex flex-column'}
        role={'button'}
      >
        <span className={'fs-4 text-lion-orange text-shadow'}>{title}</span>

        <p className={'text-light mb-3'}>{description}</p>

        {support !== undefined && (
          <Badge
            bg={support ? "lion-orange" : "danger"}
            className="mt-auto align-self-start w-auto"
          >
            {support ? "Supported" : "Not supported"}
          </Badge>
        )}
      </div>
    </LinkContainer>
  );
}
