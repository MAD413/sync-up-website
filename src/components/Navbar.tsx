import { useState, useEffect } from 'react';
import { Menu, X, Rocket } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'שירותים', href: '#services' },
        { name: 'השיטה שלנו', href: '#method' },
        { name: 'צור קשר', href: '#contact' },
    ];

    return (
        <nav className={`fixed w-full z-[999] transition-all duration-300 ${scrolled ? 'bg-background/80 backdrop-blur-md py-4 shadow-lg' : 'bg-transparent py-6'}`}>
            <div className="container mx-auto px-4 md:px-8 flex justify-between items-center bg-transparent" dir="rtl">
                <a href="#" className="text-2xl font-bold flex items-center gap-2 group">
                    <Rocket className="w-8 h-8 text-primary group-hover:animate-bounce" />
                    <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Sync Up</span>
                </a>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <a key={link.name} href={link.href} className="text-gray-300 hover:text-white transition-colors relative group">
                            {link.name}
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
                        </a>
                    ))}
                    <a href="#contact" className="bg-gradient-to-r from-primary to-secondary px-6 py-2 rounded-full font-bold hover:shadow-[0_0_20px_rgba(6,182,212,0.5)] transition-all transform hover:scale-105">
                        התחל עכשיו
                    </a>
                </div>

                {/* Mobile Menu Button */}
                <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="absolute top-full left-0 w-full bg-background/95 backdrop-blur-lg border-b border-white/10 p-4 md:hidden flex flex-col gap-4 items-center"
                        dir="rtl"
                    >
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={() => setIsOpen(false)}
                                className="text-lg text-gray-200 hover:text-primary transition-colors"
                            >
                                {link.name}
                            </a>
                        ))}
                        <a
                            href="#contact"
                            onClick={() => setIsOpen(false)}
                            className="bg-gradient-to-r from-primary to-secondary px-8 py-2 rounded-full font-bold mt-2"
                        >
                            התחל עכשיו
                        </a>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
