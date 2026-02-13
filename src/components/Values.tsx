import { motion } from 'framer-motion';
import { Rocket, Clock, HeartHandshake, ShieldCheck } from 'lucide-react';

const reasons = [
    {
        icon: <Rocket className="w-8 h-8 text-primary" />,
        title: "תוצאות מהירות",
        desc: "אנחנו לא מאמינים בפרויקטים של שנים. אנחנו מספקים פתרונות עובדים תוך שבועות בודדים."
    },
    {
        icon: <Clock className="w-8 h-8 text-accent" />,
        title: "זמינות מסביב לשעון",
        desc: "העסק שלכם לא עוצר, וגם אנחנו לא. מערכות התמיכה והבוטים שלנו עובדים בשבילכם 24/7."
    },
    {
        icon: <HeartHandshake className="w-8 h-8 text-secondary" />,
        title: "ליווי אישי באמת",
        desc: "בלי בירוקרטיה ובלי מוקדנים. אצלנו אתם מקבלים יחס VIP וליווי צמוד של מומחה טכנולוגי."
    },
    {
        icon: <ShieldCheck className="w-8 h-8 text-green-400" />,
        title: "אמינות ומקצועיות",
        desc: "אנחנו משלבים טכנולוגיות קצה עם ניסיון עשיר כדי לבנות מערכות יציבות שמחזיקות מעמד."
    }
];

const Values = () => {
    return (
        <section id="about" className="py-24 relative overflow-hidden" dir="rtl">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary/5 to-transparent skew-x-12"></div>

            <div className="container mx-auto px-4">
                <div className="text-center mb-16 max-w-3xl mx-auto">
                    <h2 className="text-4xl font-bold mb-6">למה דווקא אנחנו?</h2>
                    <p className="text-xl text-gray-300 leading-relaxed">
                        אנחנו ב-Sync Up לא סתם "בית תוכנה". אנחנו שותפים אסטרטגיים שמטרתם אחת:
                        להעיף את העסק שלכם קדימה בעזרת טכנולוגיה חכמה, פשוטה ויעילה.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {reasons.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white/5 border border-white/10 p-6 rounded-2xl hover:bg-white/10 transition-all text-center group"
                        >
                            <div className="bg-white/5 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform text-white shadow-lg">
                                {item.icon}
                            </div>
                            <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                {item.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Values;
