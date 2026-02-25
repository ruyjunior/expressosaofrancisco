import React from "react";

const Insurences = () => {
  const conpanies = [
    {
      name: "Porto Seguro",
      logo: "images/insurances/porto-seguro.png",
    },
    {
      name: "Mapfre",
      logo: "images/insurances/mapfre.png",
    },
    {
      name: "Bradesco Seguros",
      logo: "images/insurances/bradesco.png",
    },
  ];

  return (
    <section
      id="insurances"
      className="container mx-auto px-4 py-12 bg-gray-50 dark:bg-gray-900 transition-colors duration-200 rounded-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-gray-900 dark:text-white mb-4">Seguradoras</h2>
          <p className="mt-8 text-xl text-gray-600 dark:text-gray-300 font-light">
            Trabalhamos com as principais seguradoras do mercado para oferecer as melhores opções de seguro para suas cargas, garantindo proteção e tranquilidade durante o transporte.
          </p>
        </div>
        <div className="mt-10">
          <div className="flex flex-row justify-center items-center gap-12 flex-wrap">
            {conpanies.map((company) => (
              <div key={company.name} className="flex flex-col items-center">
                <img
                  src={company.logo}
                  alt={company.name}
                  width={500}
                  height={500}
                  className="h-32 w-32 object-contain mb-2 drop-shadow-lg bg-white rounded-lg p-4 shadow-md shadow-gray-500/50 hover:shadow-gray-500/100 transition-all duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Insurences;
