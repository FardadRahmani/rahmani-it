import logo from "../assets/fardadLogo.png";
import rdlogo from "../assets/rustdesk.png";

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      
      {/* Linke Seite: Dein Logo */}
      <div className="flex flex-shrink-0 items-center">
        <img className="mx-2 w-20" src={logo} alt="logo" />
      </div>

      {/* Rechte Seite: RustDesk Fernwartung */}
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a
          href="https://github.com/FardadRahmani/rahmani-it-support/raw/main/clients/rustdesk144-windows.msi"
          className="flex items-center gap-2 px-4 py-2 bg-cyan-500 text-white text-base rounded-lg hover:bg-cyan-600 transition"
        >
          <img src={rdlogo} alt="RustDesk Logo" className="w-5 h-5" />
          FW
        </a>
      </div>

    </nav>
  );
};

export default Navbar;
