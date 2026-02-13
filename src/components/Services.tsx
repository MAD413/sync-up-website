import { motion } from 'framer-motion';
import { Workflow, MessageSquare, Code2, Database, Brain, ArrowRight, CloudLightning } from 'lucide-react';

const services = [
    {
        icon: <Workflow className="w-12 h-12 text-primary" />,
        title: 'אוטומציה עסקית ו-IVR',
        description: 'הופכים תהליכים ידניים לאוטומטיים, כולל מערכות קוליות (IVR) לניהול שיחות וניתוב חכם.',
    },
    {
        icon: <MessageSquare className="w-12 h-12 text-accent" />,
        title: 'צ׳אט בוטים חכמים',
        description: 'מענה אוטומטי בוואטסאפ ובאתר, זמין 24/7, לשיפור השירות וסגירת עסקאות גם כשאתם לא במשרד.',
    },
    {
        icon: <Code2 className="w-12 h-12 text-primary" />,
        title: 'פיתוח בהתאמה אישית',
        description: 'פתרונות Low-Code ו-No-Code מהירים ומדויקים שתפורים בדיוק למידות של העסק שלכם.',
    },
    {
        icon: <Database className="w-12 h-12 text-accent" />,
        title: 'חיבור מערכות (CRM)',
        description: 'יצירת אקו-סיסטם ארגוני מסונכרן: כל המערכות שלכם מדברות אחת עם השנייה בזמן אמת.',
    },
    {
        icon: <Brain className="w-12 h-12 text-secondary" />,
        title: 'פתרונות AI מתקדמים',
        description: 'הטמעת כלי בינה מלאכותית לייעול תהליכים, ניתוח נתונים וקבלת תובנות עסקיות חכמות.',
    },
    {
        icon: <CloudLightning className="w-12 h-12 text-secondary" />,
        title: 'טרנספורמציה דיגיטלית',
        description: 'לוקחים את העסק שלכם לעתיד: מעבר לענן, אבטחת מידע ושיפור תשתיות טכנולוגיות.',
    },
];

const Services = () => {
    return (
        <section id="services" className="py-20 bg-background relative" dir="rtl">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold mb-4">השירותים שלנו</h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
                    <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
                        פתרונות טכנולוגיים מקיפים שלוקחים את העסק שלכם לשלב הבא
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -10 }}
                            className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-all group"
                        >
                            <div className="mb-6 p-4 bg-white/5 rounded-full inline-block group-hover:scale-110 transition-transform shadow-[0_0_15px_rgba(255,255,255,0.05)]">
                                {service.icon}
                            </div>
                            <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">{service.title}</h3>
                            <p className="text-gray-400 mb-6 leading-relaxed">
                                {service.description}
                            </p>
                            <a href="#contact" className="inline-flex items-center text-primary font-bold hover:gap-2 transition-all">
                                למד עוד <ArrowRight className="mr-2 w-4 h-4 rotate-180" />
                            </a>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
