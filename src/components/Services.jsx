const services = [
    { title: "Custom AI Agents", desc: "Automate your customer support and internal ops with bespoke AI." },
    { title: "Data Intelligence", desc: "Turn raw data into actionable insights using advanced ML models." },
    { title: "AI Strategy", desc: "Comprehensive roadmap for your company's AI transformation." }
  ];
  
  export const Services = () => (
    <section className="py-16 px-6 max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
      {services.map((service, index) => (
        <div key={index} className="p-8 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-cyan-500/50 transition-all group">
          <div className="w-12 h-12 bg-cyan-500/10 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition">
            <div className="w-6 h-6 bg-cyan-500 rounded-full blur-[2px]"></div>
          </div>
          <h3 className="text-xl font-bold mb-2">{service.title}</h3>
          <p className="text-slate-400 leading-relaxed">{service.desc}</p>
        </div>
      ))}
    </section>
  );