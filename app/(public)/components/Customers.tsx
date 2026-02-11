import Image from "next/image";
import React from "react";
import {
  AiOutlineDiscord,
  AiTwotoneBug,
  AiTwotoneExperiment,
  AiOutlineTaobao,
  AiOutlineSpotify,
  AiOutlineCode,
  AiOutlineCiCircle,
} from "react-icons/ai";

const icons = [
  { Icon: AiTwotoneBug },
  { Icon: AiOutlineDiscord },
  { Icon: AiTwotoneExperiment },
  { Icon: AiOutlineTaobao },
  { Icon: AiOutlineSpotify },
  { Icon: AiOutlineCode },
  { Icon: AiOutlineCiCircle },
];

const Customers: React.FC = () => {
  return (
    <div className="w-full py-12 bg-orange-400 dark:bg-orange-600">
      <div className="w-full px-4 md:px-8 lg:px-16">
        <div className="flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row w-full">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-6 md:mb-0 text-white dark:text-black text-center md:text-left md:w-1/3">
              Muitos clientes satisfeitos. Isso é o que nos motiva.
            </h2>
            <div className="flex flex-wrap justify-center md:justify-end gap-6 md:w-2/3">
              <Image src="/images/customers/magazineluiza.png" alt="clients" width={500} height={500} className="w-20 h-20 rounded-full" />
              <Image src="/images/customers/saojoao.png" alt="clients" width={500} height={500} className="w-20 h-20 rounded-full" />
              <Image src="/images/customers/colombo.jpg" alt="clients" width={500} height={500} className="w-20 h-20 rounded-full" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Customers;
