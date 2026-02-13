
import { motion } from 'framer-motion';
import { Zap, Bot, Cpu } from 'lucide-react';

const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20" dir="rtl">
            {/* Background Elements */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-20 left-20 w-72 h-72 bg-primary/20 rounded-full blur-[100px] animate-pulse-slow"></div>
                <div className="absolute bottom-20 right-20 w-96 h-96 bg-secondary/20 rounded-full blur-[100px] animate-pulse-slow delay-1000"></div>
            </div>

            <div className="container mx-auto px-4 z-10 grid md:grid-cols-2 gap-12 items-center">
                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-right"
                >
                    <div className="inline-block px-4 py-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6">
                        <span className="text-primary font-bold">חדשנות בעסקים</span> 🚀
                    </div>
                    <h1 className="text-5xl md:text-7xl font-black leading-tight mb-6">
                        טכנולוגיה ש<span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-blue-400 to-secondary animate-pulse">מעיפה</span> עסקים
                    </h1>
                    <p className="text-xl text-gray-300 mb-8 max-w-lg leading-relaxed">
                        אנחנו ב-Sync Up הופכים תהליכים מורכבים לאוטומטיים, בונים בוטים חכמים ומפתחים פתרונות שחוסכים לכם זמן וכסף.
                        הצטרפו למהפכה הטכנולוגית.
                    </p>
                    <div className="flex flex-wrap gap-4">
                        <motion.a
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            href="#contact"
                            className="bg-gradient-to-r from-primary to-secondary px-8 py-4 rounded-full font-bold text-lg shadow-[0_0_30px_rgba(6,182,212,0.4)] hover:shadow-[0_0_50px_rgba(6,182,212,0.6)] transition-all"
                        >
                            בואו נמריא ביחד
                        </motion.a>
                        <motion.a
                            whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.1)' }}
                            whileTap={{ scale: 0.95 }}
                            href="#services"
                            className="px-8 py-4 rounded-full font-bold text-lg border border-white/20 backdrop-blur-sm hover:border-white/40 transition-all"
                        >
                            גלה עוד
                        </motion.a>
                    </div>
                </motion.div>

                {/* Visual Element (Flying Tech) */}
                <div className="relative h-[500px] hidden md:flex items-center justify-center">
                    <motion.div
                        animate={{ y: [0, -20, 0] }}
                        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                        className="relative z-10"
                    >
                        <div className="relative w-80 h-80 bg-gradient-to-br from-gray-900 to-black rounded-3xl border border-white/10 shadow-2xl flex items-center justify-center transform rotate-6 hover:rotate-0 transition-transform duration-500">
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl opacity-50"></div>
                            <div className="text-center p-8">
                                <Bot size={64} className="mx-auto mb-4 text-primary" />
                                <h3 className="text-2xl font-bold mb-2">Automation Bot</h3>
                                <p className="text-gray-400">Running tasks...</p>
                                <div className="mt-4 h-2 w-full bg-gray-800 rounded-full overflow-hidden">
                                    <motion.div
                                        animate={{ width: ["0%", "100%"] }}
                                        transition={{ duration: 2, repeat: Infinity }}
                                        className="h-full bg-primary"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Floating Elements */}
                        <motion.div
                            animate={{ y: [0, 15, 0], x: [0, 10, 0] }}
                            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                            className="absolute -top-10 -right-10 p-4 bg-gray-800/80 backdrop-blur-md rounded-2xl border border-white/10 shadow-xl"
                        >
                            <Zap className="text-yellow-400 w-8 h-8" />
                        </motion.div>

                        <motion.div
                            animate={{ y: [0, -15, 0], x: [0, -10, 0] }}
                            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                            className="absolute -bottom-5 -left-10 p-4 bg-gray-800/80 backdrop-blur-md rounded-2xl border border-white/10 shadow-xl"
                        >
                            <Cpu className="text-accent w-8 h-8" />
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
