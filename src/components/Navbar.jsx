import logo from "../assets/fardadLogo.png";
import rdlogo from "../assets/rustdesk.png";

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">

      {/* Linke Seite: Logo */}
      <div className="flex flex-shrink-0 items-center">
        <img className="mx-2 w-20" src={logo} alt="logo" />
      </div>

      {/* Mittige Navigation */}
      <div className="hidden md:flex gap-10 text-lg font-light">
        <a href="#AboutMe" className="hover:text-cyan-500 transition">Über mich</a>
        <a href="#services" className="hover:text-cyan-500 transition">Leistungen</a>
        <a href="#WhyRahmaniIT" className="hover:text-cyan-500 transition">Warum ich</a>
        <a href="#contact" className="hover:text-cyan-500 transition">Kontakt</a>
      </div>

      {/* Rechte Seite: RustDesk Fernwartung */}
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a
          href="https://github.com/FardadRahmani/rahmani-it-support/raw/main/clients/rustdesk144-windows.msi"
          className="flex items-center gap-2 px-4 py-2 bg-cyan-500 text-white text-base rounded-lg hover:bg-cyan-600 transition"
        >
          <img src={rdlogo} alt="RustDesk Logo" className="w-5 h-5" />
          Fernwartung
        </a>
      </div>

    </nav>
  );
};

export default Navbar;
