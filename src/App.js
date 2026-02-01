import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { ContactForm } from './components/ContactForm';

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white font-sans selection:bg-cyan-500">
      <Navbar />
      <Hero />
      <Services />
      <ContactForm />
      
      <footer className="text-center py-10 border-t border-slate-900 text-slate-500 text-sm">
        ©️ 2026 Matrix AI Consulting. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
