import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Loader2, CheckCircle, XCircle } from 'lucide-react';

const Contact = () => {
    const [formState, setFormState] = useState({
        name: '',
        phone: '',
        email: '',
        message: ''
    });
    const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormState({
            ...formState,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('submitting');

        try {
            const response = await fetch("https://formsubmit.co/ajax/mad4113633@gmail.com", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify(formState)
            });

            if (response.ok) {
                setStatus('success');
                setFormState({ name: '', phone: '', email: '', message: '' });
                setTimeout(() => setStatus('idle'), 3000);
            } else {
                setStatus('error');
            }
        } catch (error) {
            console.error(error);
            setStatus('error');
        }
    };

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
                        onSubmit={handleSubmit}
                        className="bg-white/5 border border-white/10 p-8 rounded-3xl backdrop-blur-sm relative"
                    >
                        <div className="space-y-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-300 mb-2">איך לפנות אליך?</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formState.name}
                                    onChange={handleChange}
                                    required
                                    placeholder="שם מלא"
                                    className="w-full bg-black/30 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-300 mb-2">טלפון ליצירת קשר</label>
                                <input
                                    type="tel"
                                    name="phone"
                                    value={formState.phone}
                                    onChange={handleChange}
                                    required
                                    placeholder="050-0000000"
                                    className="w-full bg-black/30 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-300 mb-2">כתובת מייל</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formState.email}
                                    onChange={handleChange}
                                    required
                                    placeholder="your@email.com"
                                    className="w-full bg-black/30 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-300 mb-2">על מה נדבר?</label>
                                <textarea
                                    rows={4}
                                    name="message"
                                    value={formState.message}
                                    onChange={handleChange}
                                    required
                                    placeholder="תאר בקצרה את הצורך או האתגר..."
                                    className="w-full bg-black/30 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors resize-none"
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                disabled={status === 'submitting' || status === 'success'}
                                className={`w-full py-4 rounded-xl font-bold text-lg transition-all flex items-center justify-center gap-2
                  ${status === 'success'
                                        ? 'bg-green-600 text-white cursor-default'
                                        : 'bg-gradient-to-r from-primary to-secondary hover:shadow-[0_0_20px_rgba(6,182,212,0.4)]'
                                    }
                  ${status === 'submitting' ? 'opacity-75 cursor-wait' : ''}
                `}
                            >
                                {status === 'submitting' && (
                                    <>
                                        <Loader2 className="w-5 h-5 animate-spin" />
                                        שולח...
                                    </>
                                )}
                                {status === 'success' && (
                                    <>
                                        <CheckCircle className="w-5 h-5" />
                                        נשלח בהצלחה!
                                    </>
                                )}
                                {status === 'error' && (
                                    <>
                                        <XCircle className="w-5 h-5" />
                                        שגיאה, נסה שוב
                                    </>
                                )}
                                {status === 'idle' && (
                                    <>
                                        שלח הודעה <Send className="w-5 h-5" />
                                    </>
                                )}
                            </button>

                            {/* Hidden Input for FormSubmit Configuration */}
                            <input type="hidden" name="_subject" value="New submission from Sync Up Website!" />
                            <input type="hidden" name="_template" value="box" />
                            <input type="hidden" name="_captcha" value="false" />
                        </div>
                    </motion.form>

                </div>
            </div>
        </section>
    );
};

export default Contact;
