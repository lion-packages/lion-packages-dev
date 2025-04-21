import { motion } from "framer-motion";
import { Badge } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

export default function CardLink({ title, description, uri, support }) {
  return (
    <LinkContainer to={uri}>
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.9 }}
        transition={{
          duration: 0.5,
          ease: "backInOut",
        }}
        className="p-4 rounded border-lion-light h-100 d-flex flex-column"
        role="button"
      >
        <span className="fs-4 text-lion-orange text-shadow">{title}</span>

        <hr />

        <p className="lead text-white text-shadow">{description}</p>

        {support !== undefined && (
          <Badge
            bg={support ? "success" : "danger"}
            className="mt-auto align-self-start w-auto"
          >
            {support ? "Supported" : "Not supported"}
          </Badge>
        )}
      </motion.div>
    </LinkContainer>
  );
}
