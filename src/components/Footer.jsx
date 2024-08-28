// components/Footer.jsx
import React from 'react';
import { FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white p-4 py-10 mt-20 ">
            <div className="container mx-auto text-center">
                <div className="flex justify-center items-center mb-4 space-x-4">
                    <a href="https://www.facebook.com/saugat.tiwari.756" target="_blank" className='inline-block hover:-translate-y-1 transition duration-300' rel="noopener noreferrer">
                        <FaFacebook className="text-2xl" />
                    </a>
                    <a href="https://github.com/Saugattiwari77" target="_blank" className='inline-block hover:-translate-y-1 transition duration-300' rel="noopener noreferrer">
                        <FaGithub className="text-2xl" />
                    </a>
                    <a href="https://www.linkedin.com/in/saugat-tiwari-7a1a30301/" target="_blank" className='inline-block hover:-translate-y-1 transition duration-300' rel="noopener noreferrer">
                        <FaLinkedin className="text-2xl" />
                    </a>
                </div>
                <p>&copy; {new Date().getFullYear()} ClickCart. All rights reserved.</p>
                <p>Designed and developed with Love.</p>
                <p>Saugat Tiwari</p>

            </div>
        </footer>
    );
};

export default Footer;
