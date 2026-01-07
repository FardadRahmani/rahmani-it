<footer className="border-t border-neutral-800 py-10 mt-20" data-nosnippet>
  <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">

    <div className="flex items-center gap-3">
      <img src={logo} alt="Rahmani IT Logo" className="w-10" />
      <span className="text-neutral-300 font-semibold tracking-tight">
        Rahmani IT
      </span>
    </div>

    <div className="text-center md:text-right text-neutral-400 text-sm leading-relaxed">
      <p>📍 Stuttgart, Deutschland</p>
      <p>
        📞{" "}
        <span data-nosnippet>+49&nbsp;177&nbsp;185&nbsp;9667</span>
      </p>
      <p>
        ✉️{" "}
        <a href="mailto:service@rahmani-it.com" className="hover:text-cyan-400" data-nosnippet>
          service<span className="hidden">REMOVE</span>@rahmani-it.com
        </a>
      </p>
    </div>

    <div className="text-neutral-400 text-sm flex flex-col gap-2 text-center md:text-right">
      <a href="/impressum" className="hover:text-cyan-400">Impressum</a>
      <a href="/datenschutz" className="hover:text-cyan-400">Datenschutz</a>
    </div>

  </div>

  <div className="text-center text-neutral-600 text-xs mt-10">
    © {new Date().getFullYear()} Rahmani IT – Alle Rechte vorbehalten.
  </div>
</footer>
