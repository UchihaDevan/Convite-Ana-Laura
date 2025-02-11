import { motion } from "framer-motion";
import './Header.css';

export default function Header() {
  return (
    <div className="bg-lavanda text-center py-16 align-center overflow-x-hidden">
      <motion.h1 
        className="text-5xl font-bold text-white" 
        // animate={{ scale: [1, 1.1, 1] }} 
        // transition={{ repeat: Infinity, duration: 2 }}
        >
        Aniversário da Alice - 2 Anos 🎂
      </motion.h1>
    </div>
  );
}
