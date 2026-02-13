import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send } from 'lucide-react';

interface Message {
    text: string;
    sender: 'user' | 'bot';
}

const ChatBot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([
        { text: "היי! איך אפשר לקדם את העסק שלך היום? אני כאן לכל שאלה.", sender: 'bot' }
    ]);
    const [inputValue, setInputValue] = useState("");
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, isOpen]);

    const handleSend = () => {
        if (!inputValue.trim()) return;

        // Add user message
        setMessages(prev => [...prev, { text: inputValue, sender: 'user' }]);
        setInputValue("");

        // Simulate bot response
        setTimeout(() => {
            setMessages(prev => [...prev, {
                text: "תודה על הפנייה! קיבלנו את ההודעה ונחזור אליך בהקדם האפשרי. ניתן גם ליצור קשר בוואטסאפ או בטלפון.",
                sender: 'bot'
            }]);
        }, 1000);
    };

    const handleKeyPress = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter') {
            handleSend();
        }
    };

    return (
        <div className="fixed bottom-6 left-6 z-[9999] flex flex-col items-start" dir="rtl">
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.95 }}
                        className="mb-4 w-80 bg-[#1e293b] border border-white/10 rounded-2xl shadow-2xl overflow-hidden flex flex-col"
                    >
                        {/* Header */}
                        <div className="bg-gradient-to-r from-primary to-secondary p-4 flex justify-between items-center shrink-0">
                            <div className="flex items-center gap-2">
                                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center text-xl">
                                    🤖
                                </div>
                                <span className="font-bold text-white">Sync Up Assistant</span>
                            </div>
                            <button
                                onClick={() => setIsOpen(false)}
                                className="text-white/80 hover:text-white transition-colors"
                            >
                                <X size={20} />
                            </button>
                        </div>

                        {/* Messages */}
                        <div className="p-4 h-80 overflow-y-auto bg-slate-900/50 space-y-4 flex-grow custom-scrollbar">
                            {messages.map((msg, index) => (
                                <div key={index} className={`flex gap-2 ${msg.sender === 'user' ? 'flex-row-reverse' : ''}`}>
                                    <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 text-xs 
                    ${msg.sender === 'bot' ? 'bg-primary/20 text-primary' : 'bg-secondary/20 text-secondary'}`}>
                                        {msg.sender === 'bot' ? 'bot' : 'me'}
                                    </div>
                                    <div className={`p-3 rounded-2xl text-sm max-w-[80%] 
                    ${msg.sender === 'bot'
                                            ? 'bg-white/10 text-gray-200 rounded-tr-none'
                                            : 'bg-primary/20 text-white rounded-tl-none'}`}>
                                        {msg.text}
                                    </div>
                                </div>
                            ))}
                            <div ref={messagesEndRef} />
                        </div>

                        {/* Input */}
                        <div className="p-3 border-t border-white/10 bg-slate-900 shrink-0">
                            <div className="relative">
                                <input
                                    type="text"
                                    value={inputValue}
                                    onChange={(e) => setInputValue(e.target.value)}
                                    onKeyPress={handleKeyPress}
                                    placeholder="הקלד הודעה..."
                                    className="w-full bg-black/20 border border-white/10 rounded-full px-4 py-2 text-sm focus:outline-none focus:border-primary text-white pl-10"
                                />
                                <button
                                    onClick={handleSend}
                                    className="absolute left-2 top-1/2 -translate-y-1/2 text-primary hover:text-white transition-colors p-1"
                                >
                                    <Send size={16} />
                                </button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsOpen(!isOpen)}
                className="bg-gradient-to-r from-primary to-secondary p-4 rounded-full shadow-[0_0_20px_rgba(6,182,212,0.5)] text-white hover:shadow-[0_0_30px_rgba(6,182,212,0.7)] transition-shadow"
            >
                {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
            </motion.button>
        </div>
    );
};

export default ChatBot;
