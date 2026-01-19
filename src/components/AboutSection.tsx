import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import aboutImage1 from "figma:asset/b6e02ecbd61f91e7d81dc1b60ff12a2af6488547.png";
import aboutImage2 from "figma:asset/e75771cd31b3f7642a0fa3a03cea3a2fe6f5fcee.png";

export const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section
      id="sobre"
      ref={ref}
      className="relative py-16 md:py-32 bg-gradient-to-b from-black via-purple-950/20 to-black overflow-hidden"
    >
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent" />
      
      <motion.div
        className="absolute top-20 right-10 w-64 h-64 bg-gradient-to-br from-pink-500/10 to-purple-500/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 8, repeat: Infinity }}
      />

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 md:mb-20"
        >
          <span className="text-purple-400 tracking-wider mb-4 inline-block">
            QUEM SOMOS
          </span>
          <h2 className="text-5xl md:text-6xl mb-6">
            <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
              Criatividade
            </span>
            <span className="text-white"> que transforma estratégia em resultado</span>
          </h2>
          <p className="text-white/70 max-w-3xl mx-auto text-lg">
            Somos uma agência criativa que une publicidade, design e tecnologia para transformar marcas em experiências memoráveis e funcionais.

Criamos marcas sólidas, conteúdos que engajam e soluções digitais estratégicas, sempre com propósito e foco em resultados.

Trabalhamos de forma próxima e personalizada, unindo criatividade, estratégia e execução para gerar impacto real.
          </p>
        </motion.div>

        {/* Diagonal Layout */}
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Images Grid */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">
              <motion.div
                whileHover={{ scale: 1.05, rotate: -2 }}
                className="relative overflow-hidden rounded-2xl aspect-square"
              >
                <img
                  src={aboutImage1}
                  alt="Equipe LÚMINA em evento"
                  className="w-full h-full object-cover"
                />
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05, rotate: 2 }}
                className="relative overflow-hidden rounded-2xl aspect-square mt-8"
              >
                <img
                  src={aboutImage2}
                  alt="LÚMINA - Agência Digital"
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </div>

            {/* Decorative gradient line */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : {}}
              transition={{ duration: 1, delay: 0.5 }}
              className="absolute -bottom-6 left-0 w-full h-1 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 origin-left"
            />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <div className="group">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-pink-500 to-purple-500 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <span className="text-2xl">🎨</span>
                  </div>
                  <div>
                    <h3 className="text-2xl text-white mb-2">Design Autêntico</h3>
                    <p className="text-white/70">
                      Criamos identidades visuais únicas que refletem a essência
                      da sua marca e se destacam no mercado.
                    </p>
                  </div>
                </div>
              </div>

              <div className="group">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <span className="text-2xl">⚡</span>
                  </div>
                  <div>
                    <h3 className="text-2xl text-white mb-2">Estratégia Inteligente</h3>
                    <p className="text-white/70">
                      Planejamento, dados e análise para transformar ideias em crescimento, engajamento e conversão.
                    </p>
                  </div>
                </div>
              </div>

              <div className="group">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-500 to-yellow-500 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <span className="text-2xl">🚀</span>
                  </div>
                  <div>
                    <h3 className="text-2xl text-white mb-2">Execução ágil e inteligente</h3>
                    <p className="text-white/70">
                      Transformamos ideias em realidade com qualidade,
                      agilidade e atenção aos detalhes.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex justify-center pt-6 md:pt-8 border-t border-white/10"
            >
              <div className="text-center">
                <div className="text-4xl bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent mb-2">
                  50+
                </div>
                <div className="text-white/60">Projetos</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};