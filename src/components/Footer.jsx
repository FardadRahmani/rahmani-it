import logo from "../assets/fardadLogo.png";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="border-t border-neutral-800 py-10 mt-20" data-nosnippet>
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 px-6">

        {/* Logo */}
        <div className="flex items-center gap-3">
          <img src={logo} alt="Rahmani IT Logo" className="w-10" />
          <span className="text-neutral-400 text-sm tracking-wide">
            © {new Date().getFullYear()} Rahmani IT
          </span>
        </div>

        {/* Kontakt (maskiert) */}
        <div className="text-center md:text-right text-neutral-400 text-sm space-y-1" data-nosnippet>
          <p>📍 Stuttgart</p>

          <p>
            📞{" "}
            <a
              href="tel:+491771859667"
              className="hover:text-cyan-400 transition-colors"
              data-nosnippet
            >
              +49&nbsp;177&nbsp;185&nbsp;9667
            </a>
          </p>

          <p>
            ✉️{" "}
            <a
              href="mailto:service@rahmani-it.com"
              className="border-b border-neutral-600 hover:text-cyan-400 hover:border-cyan-400 transition-colors"
              data-nosnippet
            >
              service<span className="hidden">REMOVE</span>@rahmani-it.com
            </a>
          </p>
        </div>

        {/* Socials */}
        <div className="flex items-center gap-4 text-2xl">
          {/* <a href="https://github.com/FardadRahmani" className="hover:text-cyan-400">
            <FaGithub />
          </a> */}
        </div>

      </div>
    </footer>
  );
};

export default Footer;
