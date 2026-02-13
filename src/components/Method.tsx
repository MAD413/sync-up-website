import { motion } from 'framer-motion';
import { Search, Code, Rocket } from 'lucide-react';

const steps = [
    {
        icon: <Search className="w-8 h-8 text-primary" />,
        title: "צוללים לעומק",
        desc: "אנחנו לומדים את העסק שלכם מבפנים ומבחוץ. מבינים את הכאבים, האתגרים והמטרות, כדי לבנות פתרון שמדויק לכם ב-100%."
    },
    {
        icon: <Code className="w-8 h-8 text-secondary" />,
        title: "בנייה חכמה",
        desc: "תהליך פיתוח מהיר ושקוף. אנחנו בונים, אתם רואים תוצאות בזמן אמת, וביחד משפרים ומדייקים עד שהמוצר מושלם."
    },
    {
        icon: <Rocket className="w-8 h-8 text-accent" />,
        title: "המראה חלקה",
        desc: "השקה שקטה ובטוחה. אנחנו דואגים להטמעה מלאה, הדרכת הצוות ותמיכה צמודה כדי שהכל יעבוד חלק מהרגע הראשון."
    }
];

const Method = () => {
    return (
        <section className="py-24 bg-black/30" dir="rtl">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">השיטה שלנו</h2>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        תהליך עבודה פשוט, שקוף ויעיל שמביא תוצאות.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 relative">
                    {/* Connecting Line (Desktop) */}
                    <div className="hidden md:block absolute top-12 right-0 left-0 h-0.5 bg-gradient-to-l from-primary/20 via-secondary/20 to-primary/20 -z-10" />

                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="relative bg-white/5 border border-white/10 p-8 rounded-2xl backdrop-blur-sm text-center group hover:bg-white/10 transition-colors"
                        >
                            <div className="w-24 h-24 bg-[#0f172a] rounded-full flex items-center justify-center mx-auto mb-6 border-4 border-white/5 group-hover:border-primary/50 transition-colors relative z-10">
                                {step.icon}
                            </div>
                            <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
                            <p className="text-gray-400 leading-relaxed">
                                {step.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Method;
