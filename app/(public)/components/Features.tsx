import React from "react";
import FeatureCard from "./FeatureCard";
import { FaReact, FaDatabase, FaShieldAlt } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiStripe } from "react-icons/si";
import { CiDeliveryTruck } from "react-icons/ci";

const Features = () => {
  const features = [
    {
      icon: CiDeliveryTruck,
      imagesrc: "/images/logos/logo.png",
      title: "Carga Fechada",
      description: "Transporte exclusivo para um único cliente, com o veículo dedicado inteiramente à sua mercadoria, garantindo segurança e agilidade.",
    },
    {
      icon: CiDeliveryTruck,
      imagesrc: "/images/logos/logo.png",
      title: "Carga Fracionada",
      description: "Serviço de transporte onde as cargas de diferentes clientes são consolidadas no mesmo veículo, otimizando custos e espaço.",
    },
    {
      icon: CiDeliveryTruck,
      imagesrc: "/images/logos/logo.png",
      title: "Carga Lotação",
      description: "Veículo preenchido totalmente por mercadorias de um único cliente, ideal para grandes volumes com entrega rápida e direta.",
    },
    {
      icon: CiDeliveryTruck,
      imagesrc: "/images/logos/logo.png",
      title: "Frete Expresso",
      description: "Serviço de transporte rápido e prioritário, garantindo que sua mercadoria chegue ao destino no menor tempo possível.",
    },
  ];

  return (
    <section
      id="features"
      className="container mx-auto px-4 py-12 bg-gray-50 dark:bg-gray-900 transition-colors duration-200 rounded-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-gray-900 dark:text-white mb-4">Nossos Serviços</h2>
          <p className="mt-8 text-xl text-gray-600 dark:text-gray-300 font-light">
            Serviços Personalizados
            de Transporte e Logística
          </p>
        </div>
        <div className="mt-10">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => (
              <FeatureCard key={index} {...feature} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
