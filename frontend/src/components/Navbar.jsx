import { useState } from 'react';
import { Button1 } from '../smallComps/Button1';

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="relative">
            <div className="flex justify-between items-center my-4 mx-4 md:mx-8">
                <div className="m-2 order-1 flex">
                    <img className="w-6 h-6 md:w-9 md:h-9 mx-2" src="https://res.cloudinary.com/dcjpwnsx2/image/upload/v1715501453/Gen_ai_twitter/qswroeuphf2ezxebafx9.png" alt="logo" />
                    <div className="text-xl md:text-4xl font-bold md:order-2">GenAI</div>
                </div>
                <div className="hidden md:flex md:items-center md:space-x-8 order-2 md:order-3">
                    <NavLink label="Features" />
                    <NavLink label="Product" />
                    <NavLink label="Testimonial" />
                    <NavLink label="FAQ" />
                </div>
                <div className="order-3 hidden md:block "><Button1 label="Get Started" /></div>
                <button className="md:hidden order-4" onClick={toggleMenu}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        {isOpen ? (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        ) : (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                        )}
                    </svg>
                </button>
            </div>
            {isOpen && (
                <div className="md:hidden absolute top-16 bg-white w-full z-10">
                    <div className="flex flex-col items-center">
                        <NavLink label="Features" />
                        <NavLink label="Product" />
                        <NavLink label="Testimonial" />
                        <NavLink label="FAQ" />
                        <Button1 label="Get Started" />
                    </div>
                </div>
            )}
        </div>
    );
};

const NavLink = ({ label }) => {
    return (
        <div className="my-2">
            <div className="text-gray-600 text-lg font-medium">{label}</div>
        </div>
    );
};
