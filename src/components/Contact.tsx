import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contact" className="py-24 relative overflow-hidden" dir="rtl">
            {/* Background Elements */}
            <div className="absolute -left-20 top-20 w-72 h-72 bg-primary/20 rounded-full blur-3xl"></div>
            <div className="absolute -right-20 bottom-20 w-72 h-72 bg-secondary/20 rounded-full blur-3xl"></div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="grid md:grid-cols-2 gap-12 items-center">

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">בואו נדבר תכל'ס</h2>
                        <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                            יש לכם רעיון? אתגר עסקי? סתם שאלה?
                            <br />
                            השאירו פרטים ונחזור אליכם עם פתרונות חכמים.
                        </p>

                        <div className="space-y-6">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center text-primary">
                                    <Phone className="w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-200">טלפון</h4>
                                    <p className="text-gray-400" dir="ltr">+972 50-000-0000</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center text-accent">
                                    <Mail className="w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-200">מייל</h4>
                                    <p className="text-gray-400">contact@sync-up.co.il</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center text-secondary">
                                    <MapPin className="w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-200">כתובת</h4>
                                    <p className="text-gray-400">ישראל, המרכז</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.form
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-white/5 border border-white/10 p-8 rounded-3xl backdrop-blur-sm"
                    >
                        <div className="space-y-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-300 mb-2">איך לפנות אליך?</label>
                                <input
                                    type="text"
                                    placeholder="שם מלא"
                                    className="w-full bg-black/30 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-300 mb-2">טלפון ליצירת קשר</label>
                                <input
                                    type="tel"
                                    placeholder="050-0000000"
                                    className="w-full bg-black/30 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-300 mb-2">כתובת מייל</label>
                                <input
                                    type="email"
                                    placeholder="your@email.com"
                                    className="w-full bg-black/30 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-300 mb-2">על מה נדבר?</label>
                                <textarea
                                    rows={4}
                                    placeholder="תאר בקצרה את הצורך או האתגר..."
                                    className="w-full bg-black/30 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors resize-none"
                                ></textarea>
                            </div>

                            <button className="w-full bg-gradient-to-r from-primary to-secondary py-4 rounded-xl font-bold text-lg hover:shadow-[0_0_20px_rgba(6,182,212,0.4)] transition-shadow flex items-center justify-center gap-2">
                                שלח הודעה <Send className="w-5 h-5" />
                            </button>
                        </div>
                    </motion.form>

                </div>
            </div>
        </section>
    );
};

export default Contact;
