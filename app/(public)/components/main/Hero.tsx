import Link from "next/link";
import infoAPP from "app/lib/infoapp";
import Image from "next/image";
import { info } from "console";

export default function Hero() {
  return (
    <section className="relative w-full h-[85vh] flex items-center justify-center overflow-hidden">
      
      {/* Background Image */}
      <Image
        src="/images/hero/hero.png"
        alt="Expresso São Francisco"
        fill
        priority
        className="object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-8 max-w-4xl">
        <h1 className="font-sans text-4xl tracking-tight sm:text-5xl md:text-6xl lg:text-7xl text-white mb-6">
          {infoAPP.slogan}
        </h1>

        <p className="text-lg sm:text-xl text-gray-200 mb-12 font-light">
          Movemos o Brasil com excelência em cada entrega!
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          {/* Contato */}
          <Link
            href="/#footer"
            className="bg-orange-600 text-white px-6 py-3 rounded-md text-base font-semibold hover:bg-orange-500 transition"
          >
            Fale Conosco
          </Link>
        </div>
      </div>
    </section>
  );
}
