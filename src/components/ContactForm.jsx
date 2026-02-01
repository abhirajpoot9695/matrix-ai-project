import { useState } from 'react';

export const ContactForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Success! Message sent by ${formData.name}`);
    // Future: Integrate Formspree or EmailJS here
  };

  return (
    <section className="py-20 px-6 max-w-xl mx-auto">
      <div className="bg-slate-900 border border-slate-800 p-8 rounded-3xl shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/5 blur-3xl rounded-full"></div>
        <h2 className="text-3xl font-bold mb-6 text-center">Ready to Start?</h2>
        <form onSubmit={handleSubmit} className="space-y-4 relative z-10">
          <input 
            type="text" placeholder="Your Name" required
            className="w-full bg-slate-800 border border-slate-700 p-4 rounded-xl focus:outline-none focus:border-cyan-500 transition"
            onChange={(e) => setFormData({...formData, name: e.target.value})}
          />
          <input 
            type="email" placeholder="Email Address" required
            className="w-full bg-slate-800 border border-slate-700 p-4 rounded-xl focus:outline-none focus:border-cyan-500 transition"
            onChange={(e) => setFormData({...formData, email: e.target.value})}
          />
          <textarea 
            placeholder="How can we help?" rows="4" 
            className="w-full bg-slate-800 border border-slate-700 p-4 rounded-xl focus:outline-none focus:border-cyan-500 transition"
            onChange={(e) => setFormData({...formData, message: e.target.value})}
          ></textarea>
          <button className="w-full bg-cyan-600 hover:bg-cyan-500 py-4 rounded-xl font-bold transition shadow-lg shadow-cyan-500/20">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};