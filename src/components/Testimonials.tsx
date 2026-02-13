import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const testimonials = [
    {
        name: "שמעון פריד",
        role: "בעלים, מימוש מקיף",
        content: "Sync Up עשו בשבילנו עבודה מדהימה שחוסכת לנו עם כל לקוח שיחת בירור ראשונית של מעל חצי שעה, פשוט תענוג לעבוד איתם.",
    },
    {
        name: "מוישי",
        role: "Makeup Static",
        content: "שירות מקצועי ברמה הגבוהה ביותר. הפתרונות של Sync Up שדרגו את תהליכי העבודה שלנו וחסכו לנו המון זמן יקר.",
    }
];

const Testimonials = () => {
    return (
        <section className="py-20 bg-black/20 relative" dir="rtl">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">
                    מה הלקוחות שלנו <span className="text-primary">אומרים?</span>
                </h2>

                <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {testimonials.map((t, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="bg-white/5 border border-white/10 p-8 rounded-2xl relative"
                        >
                            <Quote className="absolute top-4 left-4 text-white/10 w-12 h-12 rotate-180" />
                            <p className="text-lg text-gray-300 mb-6 relative z-10 leading-relaxed">
                                "{t.content}"
                            </p>
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center text-xl font-bold">
                                    {t.name[0]}
                                </div>
                                <div>
                                    <h4 className="font-bold text-lg">{t.name}</h4>
                                    <p className="text-sm text-gray-400">{t.role}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
