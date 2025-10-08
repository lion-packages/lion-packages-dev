import { motion } from "framer-motion";

export default function TechnologyBlock({ children }) {
  return (
    <motion.div
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 0.9 }}
      transition={{
        duration: 0.6,
        ease: "backInOut",
      }}
      className="py-4 rounded shadow border-lion-light h-100 blocks"
      role="button"
    >
      {children}
    </motion.div>
  );
}
