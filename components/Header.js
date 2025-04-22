// components/Header.js
export default function Header() {
  return (
    <header className="py-4 bg-gray-900 text-white shadow-md">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">Devanand Yadav</h1>
        <nav className="space-x-4">
          <a href="#about" className="hover:text-cyan-400">About</a>
          <a href="#skills" className="hover:text-cyan-400">Skills</a>
          <a href="#projects" className="hover:text-cyan-400">Projects</a>
          <a href="#experience" className="hover:text-cyan-400">Experience</a>
          <a href="#timeline" className="hover:text-cyan-400">Education</a>
        </nav>
      </div>
    </header>
  );
}