import React from "react";

const statsData = [
  { value: "12K+", label: "Articles" },
  { value: "5K+", label: "Writers" },
  { value: "100K+", label: "Readers" },
];

const Stats = () => (
  <div className="flex flex-wrap justify-center lg:justify-start gap-8 sm:gap-12">
    {statsData.map((stat) => (
      <div key={stat.label} className="text-center">
        <p className="text-3xl font-bold text-gray-900 dark:text-gray-100">{stat.value}</p>
        <p className="text-gray-500 dark:text-gray-300">{stat.label}</p>
      </div>
    ))}
  </div>
);

export default Stats;
