import React from 'react';
import { motion } from 'framer-motion';

const StatCard = ({ title, value }) => {
  return (
    <motion.div
      className="bg-gray-800 p-6 rounded-lg shadow-lg text-center"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h3 className="text-gray-400 text-sm font-medium uppercase">{title}</h3>
      <p className="text-white text-3xl font-bold mt-2">{value}</p>
    </motion.div>
  );
};

export default StatCard;