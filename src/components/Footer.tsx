import { motion } from "motion/react";
import { Instagram, MessageCircle } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: "Instagram",
      icon: Instagram,
      url: "https://www.instagram.com/luminaagenciaba/",
      gradient: "from-pink-500 to-purple-500",
    },
    {
      name: "WhatsApp",
      icon: MessageCircle,
      url: "https://wa.me/5571920039584?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20os%20serviços%20da%20LÚMINA%20Agência%20Digital.",
      gradient: "from-green-500 to-green-400",
    },
  ];

  return (
    <footer className="relative bg-black border-t border-white/10 overflow-hidden">
      {/* Top gradient line */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent" />

      {/* Background glow */}
      <motion.div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-gradient-to-t from-purple-500/10 to-transparent rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
        }}
        transition={{ duration: 8, repeat: Infinity }}
      />

      <div className="container mx-auto px-4 py-16 relative z-10">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <motion.h3
              whileHover={{ scale: 1.05 }}
              className="text-3xl mb-4"
            >
              <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
                LÚMINA
              </span>
              <span className="text-white">
                {" "}
                AGÊNCIA DIGITAL
              </span>
            </motion.h3>
            <p className="text-white/60 leading-relaxed">
              Transformando marcas em experiências inesquecíveis
              através de criatividade e inovação.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white mb-4">Links Rápidos</h4>
            <ul className="space-y-3">
              {[
                "Início",
                "Sobre",
                "Serviços",
                "Portfólio",
                "Contato",
              ].map((link) => (
                <li key={link}>
                  <button
                    onClick={() => {
                      const sectionId =
                        link === "Início"
                          ? "hero"
                          : link
                              .toLowerCase()
                              .normalize("NFD")
                              .replace(/[\u0300-\u036f]/g, "");
                      const element =
                        document.getElementById(sectionId);
                      if (element) {
                        element.scrollIntoView({
                          behavior: "smooth",
                        });
                      }
                    }}
                    className="text-white/60 hover:text-white transition-colors hover:translate-x-1 inline-block"
                  >
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="text-white mb-4">Siga-nos</h4>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  className={`w-12 h-12 rounded-xl bg-gradient-to-br ${social.gradient} flex items-center justify-center text-white hover:shadow-lg hover:shadow-${social.gradient}/50 transition-all`}
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </div>
            <p className="text-white/40 text-sm mt-6">
              agenciadigitallumina@gmail.com
              <br />
              +55 (71) 92003-9584
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-8" />

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-white/40 text-sm">
          <p>
            © {currentYear} LÚMINA - AGÊNCIA DIGITAL. Todos os
            direitos reservados.
          </p>
          <div className="flex gap-6">
            <button className="hover:text-white transition-colors">
              Política de Privacidade
            </button>
            <button className="hover:text-white transition-colors">
              Termos de Uso
            </button>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-pink-500/10 to-transparent rounded-full blur-2xl" />
        <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-blue-500/10 to-transparent rounded-full blur-2xl" />
      </div>
    </footer>
  );
};