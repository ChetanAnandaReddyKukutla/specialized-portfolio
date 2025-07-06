'use client';

export const Header = () => {
  // Smooth scroll handler
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, target: string) => {
    if (target === "#" || !target.startsWith("#")) return;
    e.preventDefault();
    const el = document.querySelector(target);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };
  return (
  <div className="flex justify-center items-center fixed top-3 w-full z-10">
    <nav className="flex gap-1 p-0.5 border border-white/15 rounded-full bg-white/10 backdrop-blur"> 
      <a href="#" className="nav-item">Home</a>
      <a href="#projects" className="nav-item" onClick={e => handleNavClick(e, "#projects")}>Projects</a>
      <a href="#about" className="nav-item" onClick={e => handleNavClick(e, "#about")}>About</a>
      <a href="#contact" className="nav-item bg-white text-gray-900 hover:bg-white/70 hover:text-gray-900 " onClick={e => handleNavClick(e, "#contact")}>Contact</a>
    </nav>
  </div>
  );
};
