import { Zap } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-black/40 border-t border-white/10 py-12" dir="rtl">
            <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">

                <div className="flex items-center gap-2">
                    <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center">
                        <Zap className="text-white w-6 h-6" />
                    </div>
                    <span className="text-2xl font-black tracking-tighter text-white">
                        Sync <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Up</span>
                    </span>
                </div>

                <p className="text-gray-500 text-sm">
                    © {new Date().getFullYear()} Sync Up. כל הזכויות שמורות.
                </p>

            </div>
        </footer>
    );
};

export default Footer;
