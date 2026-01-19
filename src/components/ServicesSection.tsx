import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import {
  Palette,
  Share2,
  Video,
  Sparkles,
  TrendingUp,
  Code,
  Target,
  Layers,
} from "lucide-react";

const services = [
  {
    icon: Palette,
    title: "Branding & Identidade Visual",
    description:
      "Desenvolvemos marcas com propósito, posicionamento e personalidade, criando identidades estratégicas que conectam, geram valor e fortalecem a presença no mercado.",
    gradient: "from-pink-500 to-rose-500",
    bgGradient: "from-pink-500/10 to-rose-500/10",
  },
  {
    icon: Share2,
    title: "Social Media & Conteúdo Estratégico",
    description:
      "Gestão estratégica de redes sociais com conteúdo planejado para engajar, fortalecer a marca e gerar resultados reais.",
    gradient: "from-purple-500 to-indigo-500",
    bgGradient: "from-purple-500/10 to-indigo-500/10",
  },
  {
    icon: Code,
    title: "Desenvolvimento Web",
    description:
      "Criação de sites institucionais e landing pages modernas, rápidas e responsivas, pensadas para conversão e experiência do usuário.",
    gradient: "from-blue-500 to-cyan-500",
    bgGradient: "from-blue-500/10 to-cyan-500/10",
  },
  {
    icon: Sparkles,
    title: "Motion Design, Vídeo & Conteúdo Audiovisual",
    description:
      "Conteúdos visuais que dão vida à marca, aumentam retenção e fortalecem a comunicação no digital.",
    gradient: "from-orange-500 to-amber-500",
    bgGradient: "from-orange-500/10 to-amber-500/10",
  },
  {
    icon: Layers,
    title: "Design Gráfico, Comunicação Visual",
    description:
      "Soluções visuais completas para fortalecer a marca em todos os pontos de contato, do digital ao físico.",
    gradient: "from-emerald-500 to-teal-500",
    bgGradient: "from-emerald-500/10 to-teal-500/10",
  },
  {
    icon: Target,
    title: "Estratégia Digital & Tráfego Pago",
    description:
      "Gestão estratégica de campanhas de anúncios no Google Ads, Meta Ads e outras plataformas, otimizadas para maximizar ROI e alcançar seu público-alvo.",
    gradient: "from-violet-500 to-fuchsia-500",
    bgGradient: "from-violet-500/10 to-fuchsia-500/10",
  },
];

export const ServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section
      id="servicos"
      ref={ref}
      className="relative py-16 md:py-32 bg-black overflow-hidden"
    >
      {/* Background Effects */}
      <motion.div
        className="absolute top-1/4 left-10 w-96 h-96 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl"
        animate={{
          x: [0, 50, 0],
          y: [0, -50, 0],
        }}
        transition={{ duration: 15, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-1/4 right-10 w-96 h-96 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-full blur-3xl"
        animate={{
          x: [0, -50, 0],
          y: [0, 50, 0],
        }}
        transition={{ duration: 12, repeat: Infinity }}
      />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 md:mb-20"
        >
          <span className="text-purple-400 tracking-wider mb-4 inline-block">
            NOSSOS SERVIÇOS
          </span>
          <h2 className="text-5xl md:text-6xl mb-6">
            <span className="text-white">Soluções </span>
            <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
              criativas
            </span>
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto text-lg">
            Oferecemos um portfólio completo de serviços para
            elevar sua marca ao próximo nível.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative"
            >
              {/* Card */}
              <div className="relative h-full p-8 rounded-3xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 backdrop-blur-sm overflow-hidden">
                {/* Hover Gradient Background */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${service.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                />

                {/* Animated Border */}
                <div className="absolute inset-0 rounded-3xl overflow-hidden">
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-r ${service.gradient}`}
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 0.2 }}
                    transition={{ duration: 0.3 }}
                  />
                </div>

                {/* Content */}
                <div className="relative z-10">
                  {/* Icon */}
                  <motion.div
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <service.icon
                      className="text-white"
                      size={32}
                    />
                  </motion.div>

                  {/* Title */}
                  <h3 className="text-2xl text-white mb-4 group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-white/80 group-hover:bg-clip-text group-hover:text-transparent transition-all">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-white/70 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Hover Arrow */}
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    whileHover={{ opacity: 1, x: 0 }}
                    className={`mt-6 inline-flex items-center gap-2 text-transparent bg-gradient-to-r ${service.gradient} bg-clip-text`}
                  >
                    <span>Saiba mais</span>
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      className={`group-hover:translate-x-1 transition-transform`}
                    >
                      <path
                        d="M4 10h12m0 0l-4-4m4 4l-4 4"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className={`stroke-current bg-gradient-to-r ${service.gradient}`}
                      />
                    </svg>
                  </motion.div>
                </div>

                {/* Floating particles on hover */}
                <motion.div
                  className="absolute top-4 right-4 w-2 h-2 bg-white/40 rounded-full"
                  animate={{
                    y: [0, -20, 0],
                    opacity: [0, 1, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: index * 0.2,
                  }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() =>
              document
                .getElementById("contato")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="group relative px-8 py-4 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 rounded-full overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-2 text-white">
              Vamos criar juntos?
              <Sparkles
                size={20}
                className="group-hover:rotate-12 transition-transform"
              />
            </span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};