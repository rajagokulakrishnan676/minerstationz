import React from 'react';
import { Link } from 'react-router-dom';
import { TrendingUp } from 'lucide-react';
import { motion } from 'framer-motion';

export const InvestorPortalButton: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 1 }}
      className="fixed right-6 bottom-6 z-40"
    >
      <Link
        to="/investors"
        className="bg-yellow-400 text-black px-6 py-3 rounded-full font-semibold hover:bg-yellow-500 transition-colors flex items-center shadow-lg hover:shadow-xl transform hover:scale-105 transition-transform group"
      >
        <TrendingUp className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
        Investor Portal
      </Link>
    </motion.div>
  );
};