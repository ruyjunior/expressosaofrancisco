import React from "react";
import Section from "./../components/Section";
import Image from "next/image";


const About = () => {

  return (
    <Section
      id="about"
      leftHalf={
        <>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-gray-900 dark:text-white mb-4">
            Quem somos?
          </h2>
          <p className="text-xl font-light">
            Com sede em Gravataí/RS desde 2016, a Expresso São Francisco é uma empresa de transporte e logística que oferece serviços com segurança e personalidade.
            Nossa frota consiste em veículos modernos, revisados que garantem a segurança e conforto aos nossos clientes. Alta qualidade e eficiência é nossa prioridade.
            Operando de acordo com as legislações vigentes, oferecemos aos nossos clientes os melhores serviços.
          </p>
        </>
      }
      rightHalf={
        <Image
          src="/images/Logos/logotransparente.png"
          alt="section-image"
          width={500}
          height={100}
          className="w-500 h-auto" />
      }
    />
  );
};

export default About;
