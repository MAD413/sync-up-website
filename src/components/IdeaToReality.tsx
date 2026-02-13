import { motion } from 'framer-motion';
import { Lightbulb, ArrowLeft } from 'lucide-react';

const IdeaToReality = () => {
    return (
        <section className="py-12 relative overflow-hidden" dir="rtl">
            <div className="container mx-auto px-4 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="max-w-4xl mx-auto"
                >
                    <div className="inline-flex items-center justify-center p-3 bg-white/10 rounded-full mb-8 backdrop-blur-sm">
                        <Lightbulb className="w-8 h-8 text-yellow-400" />
                    </div>

                    <h2 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
                        יש לכם רעיון?
                        <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-purple-400 to-secondary">
                            אנחנו נהפוך אותו למציאות
                        </span>
                    </h2>

                    <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
                        אנחנו ב-Sync Up מתמחים בלקחת חלומות טכנולוגיים ולהפוך אותם למוצרים עובדים.
                        מהאפיון הראשוני ועד המוצר המוגמר - אנחנו השותפים שלכם לדרך.
                    </p>

                    <motion.a
                        href="#contact"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="inline-flex items-center gap-3 bg-white text-blue-900 px-10 py-5 rounded-full font-bold text-xl hover:shadow-[0_0_40px_rgba(255,255,255,0.3)] transition-all"
                    >
                        בואו נגשים את החלום
                        <ArrowLeft className="w-6 h-6" />
                    </motion.a>
                </motion.div>
            </div>
        </section>
    );
};

export default IdeaToReality;
