import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBarsStaggered, faTimes } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";
import { Link } from "react-router";

function Navigation() {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <header
            className={`
            fixed top-8 left-1/2 -translate-x-1/2 
            w-[100%] max-w-4xl z-50
            rounded-full transition-all duration-300
            ${isScrolled 
                ? "bg-black/50 backdrop-blur-lg shadow-lg border border-white/10" 
                : "bg-black/50 backdrop-blur-md"}
        `}
        >
            <nav className="xl-hidden ml-auto px-2 py-6 flex items-center justify-between text-white">
                
                {/* Desktop Menu */}
                <ul className="hidden md:flex gap-20 mx-auto">
                    <li><Link className="hover:text-yellow-400 transition" to="/home">Home</Link></li>
                    <li><Link className="hover:text-yellow-400 transition" to="/about">About</Link></li>
                    <li><Link className="hover:text-yellow-400 transition" to="/works">Works</Link></li>
                    <li><Link className="hover:text-yellow-400 transition" to="/contact">Contact</Link></li>
                </ul>

                {/* Mobile Button */}
                <button className="md:hidden ml-auto" onClick={() => setIsOpen(!isOpen)}>
                    <FontAwesomeIcon icon={isOpen ? faTimes : faBarsStaggered} />
                </button>
            </nav>

            {/* Mobile Menu */}
            {isOpen && (
                <ul className="md:hidden bg-black/0 backdrop-blur-xl text-center py-6 space-y-4 rounded-b-xl">
                    <li><Link onClick={() => setIsOpen(false)} className="hover:text-yellow-400" to="/home">Home</Link></li>
                    <li><Link onClick={() => setIsOpen(false)} className="hover:text-yellow-400" to="/about">About</Link></li>
                    <li><Link onClick={() => setIsOpen(false)} className="hover:text-yellow-400" to="/works">Works</Link></li>
                    <li><Link onClick={() => setIsOpen(false)} className="hover:text-yellow-400" to="/contact">Contact</Link></li>
                </ul>
            )}
        </header>
    );
}

export default Navigation;
