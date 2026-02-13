import Navbar from './components/Navbar';
import Hero from './components/Hero';
import IdeaToReality from './components/IdeaToReality';
import Services from './components/Services';
import Method from './components/Method';
import Values from './components/Values';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ChatBot from './components/ChatBot';

function App() {
  return (
    <div className="min-h-screen bg-background text-white font-heebo">
      <Navbar />
      <Hero />
      <IdeaToReality />
      <Services />
      <div id="method"><Method /></div>
      <div id="values"><Values /></div>
      <div id="testimonials"><Testimonials /></div>
      <Contact />
      <Footer />
      <ChatBot />
    </div>
  );
}

export default App;
