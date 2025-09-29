import React from "react";
import { Zap } from "lucide-react";

const Badge = ({ text }) => (
  <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-orange-100 dark:bg-orange-900 px-3 py-1 text-sm font-medium text-orange-600 dark:text-orange-400">
    <Zap className="w-4 h-4" /> 
    {text}
  </div>
);

export default Badge;
