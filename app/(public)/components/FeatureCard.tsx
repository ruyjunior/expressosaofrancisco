import Image from "next/image";
import React from "react";

const FeatureCard = ({ icon: Icon, title, description, imagesrc }) => {
  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md transition-colors duration-200">
      {/* <Icon size={34} /> */}
      <div className="flex items-center mb-4 md:m-2">
        <Image src={imagesrc} alt="section-image" width={50} height={100} className="w-34 h-auto" />
        <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white ml-2">{title}</h3>
      </div>
      <p className="text-gray-600 dark:text-gray-300 font-light">{description}</p>
    </div>
  );
};

export default FeatureCard;
