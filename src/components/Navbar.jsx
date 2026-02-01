export const Navbar = () => (
    <nav className="flex justify-between items-center p-6 max-w-7xl mx-auto border-b border-slate-800">
      <h1 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
        MATRIX AI
      </h1>
      <ul className="hidden md:flex space-x-8 text-slate-400 hover:text-white transition cursor-pointer font-medium">
        <li>Services</li>
        <li>Case Studies</li>
        <li>Contact</li>
      </ul>
      <button className="bg-cyan-600 hover:bg-cyan-500 px-5 py-2 rounded-full font-medium transition">
        Get Started
      </button>
    </nav>
  );