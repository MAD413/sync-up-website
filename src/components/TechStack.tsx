import { motion } from 'framer-motion';
import { CreditCard, Users, Settings, Globe, MonitorSmartphone, BrainCircuit } from 'lucide-react';

const technologies = [
    { icon: <BrainCircuit />, label: "לוגיקה עסקית מורכבת" },
    { icon: <MonitorSmartphone />, label: "חוויה מותאמת אישית" },
    { icon: <CreditCard />, label: "חיבור מאובטח לסליקה" },
    { icon: <Settings />, label: "ממשקי ניהול נוחים" },
    { icon: <Globe />, label: "התממשקות לשירותים (API)" },
    { icon: <Users />, label: "ניהול הרשאות משתמשים" },
];

const TechStack = () => {
    return (
        <section className="py-20 bg-gradient-to-b from-[#0f172a] to-black/40" dir="rtl">
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-12">היכולות הטכנולוגיות שלנו</h2>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                    {technologies.map((tech, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)" }}
                            className="bg-white/5 border border-white/10 p-4 rounded-xl flex flex-col items-center justify-center gap-3 cursor-default transition-colors"
                        >
                            <div className="text-primary w-8 h-8">
                                {tech.icon}
                            </div>
                            <span className="font-semibold text-sm md:text-base text-gray-200">
                                {tech.label}
                            </span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TechStack;
