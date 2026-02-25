import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import infoAPP from "app/lib/infoapp";
import { formatCNPJ, formatPhone } from 'app/lib/utils';
import { AiOutlineFacebook, AiOutlineX, AiOutlineGithub, AiOutlineLinkedin, AiOutlineInstagram } from "react-icons/ai";


const Footer: React.FC = () => {
    return (
        <footer
            id="footer"
            className="bg-hero-background text-foreground py-10">
            <div className="max-w-7xl w-full mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">
                <div>
                    <Link href="/" className="flex items-center gap-2">
                        <Image
                            src="/images/logos/logotransparente.png"
                            alt="logo da empresa"
                            width={250}
                            height={250}
                            className="rounded-full shadow-md shadow-gray-500/50 hover:shadow-gray-500/100 transition-all duration-300"
                        />
                    </Link>
                    <p className="mt-3.5 text-foreground-accent">
                        {infoAPP.slogan}
                    </p>
                    <p>CNPJ: {formatCNPJ(infoAPP.cnpj)}</p>
                </div>
                <div>
                    <h4 className="text-lg font-semibold mb-4">Links Rápidos</h4>
                    <ul className="text-foreground-accent">
                        <li className="mb-2">
                            <Link href="/" className="hover:text-foreground">Home</Link>
                        </li>
                        <li className="mb-2">
                            <Link href="/#about" className="hover:text-foreground">Sobre Nós</Link>
                        </li>
                        <li className="mb-2">
                            <Link href="/#features" className="hover:text-foreground">Serviços</Link>
                        </li>
                        <li className="mb-2">
                            <Link href="/#insurances" className="hover:text-foreground">Seguradoras</Link>
                        </li>
                    </ul>
                </div>
                <div>
                    <h4 className="text-lg font-semibold mb-4">Entre em Contato</h4>

                    {infoAPP.email && <a href={`mailto:${infoAPP.email}`} className="block text-foreground-accent hover:text-foreground">Email: {infoAPP.email}</a>}

                    {infoAPP.phone && <a href={`tel:${infoAPP.phone}`} className="block text-foreground-accent hover:text-foreground">Telefone: {formatPhone(infoAPP.phone)}</a>}

                    <div className="mt-5 flex items-center gap-5 flex-wrap">
                        <Link
                            href={`https://facebook.com/${infoAPP.facebook}`}
                            target="_blank"

                            aria-label="Facebook"
                        >
                            <AiOutlineFacebook className="w-5 h-5" />
                        </Link>
                        <Link
                            href={`https://linkedin.com/${infoAPP.linkedin}`}
                            target="_blank"
                            aria-label="LinkedIn"
                        >
                            <AiOutlineLinkedin className="w-5 h-5" />
                        </Link>
                        <Link
                            href={`https://instagram.com/${infoAPP.instagram}`}
                            target="_blank"
                            aria-label="Instagram"
                        >
                            <AiOutlineInstagram className="w-5 h-5" />
                        </Link>
                    </div>

                </div>
            </div>
            <div className="mt-8 md:text-center text-foreground-accent px-6 flex flex-col items-center">
                <p>Copyright &copy; {new Date().getFullYear()} {infoAPP.name}. Todos os direitos reservados.</p>
                <div className="flex items-center mt-10">
                    <Link href="https://autoric.com.br" target="_blank" rel="noopener noreferrer">
                        <Image
                            src="/images/logos/logo-dev.png"
                            width={100}
                            height={100}
                            alt={`logo da ${infoAPP.name}`}
                            className="mr-2 rounded-md w-auto h-auto shadow-md shadow-gray-500/50 hover:shadow-gray-500/100 transition-all duration-300"
                        />
                    </Link>
                </div>
                <p className="text-sm mt-2 text-gray-500">
                    Desenvolvido por <a href="https://autoric.com.br" target="_blank" rel="noopener noreferrer">Autoric Automação e Sistemas</a>
                </p>
            </div>
        </footer>
    );
};

export default Footer;
