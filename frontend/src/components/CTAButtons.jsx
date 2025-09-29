import React from "react";
import { ArrowRight } from "lucide-react";

const CTAButtons = () => (
  <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-12">
    <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-lg shadow-lg transition flex items-center gap-2">
      Start Reading
      <ArrowRight className="w-4 h-4" />
    </button>
    <button className="font-semibold text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white transition">
      Learn More
    </button>
  </div>
);

export default CTAButtons;
