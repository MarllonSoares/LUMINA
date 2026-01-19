import { motion } from "motion/react";
import {
  X,
  ArrowLeft,
  Github,
  ExternalLink,
} from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import identidadeImg1 from "figma:asset/b6e02ecbd61f91e7d81dc1b60ff12a2af6488547.png";
import identidadeImg2 from "figma:asset/10c49e95b1c2b41024a6322c450ab36792f3ace2.png";
import identidadeImg3 from "figma:asset/eea5ce0bd00c800771a2325763c6f5fadff57c62.png";
import identidadeImg4 from "figma:asset/c5980245d4392c8beadf2dea9a11fec8159bbfea.png";
import identidadeImg5 from "figma:asset/4e921a97f9c4d8d8cfa2ac9f170d703b182017b1.png";
import logomarcaImg1 from "figma:asset/5fe74ab796cca7e66bdd3cae24dc7fe3c0fbe248.png";
import logomarcaImg2 from "figma:asset/21c2061e57879cc85720272cb9c0855926f437bd.png";
import logomarcaImg3 from "figma:asset/fef2a2e9c926180e06dd5d1f179980cccf5b489b.png";
import logomarcaImg4 from "figma:asset/a16b2beebd4c2f8feb09e6e9d150d4c674814dbe.png";
import logomarcaImg5 from "figma:asset/8e9747f2d105b595f87a789dafbdf9c3a2dc5d5a.png";
import logomarcaImg6 from "figma:asset/8b8c21d9588598bbc30c3b7f8a18b89d579182b1.png";
import logomarcaImg7 from "figma:asset/4bea8f1f909f9f02508cf2ad6cbac4f84a959533.png";
import logomarcaImg8 from "figma:asset/dc4fd5991fa776359d9fd01e5792933f7a1e400e.png";
import campanhaImg1 from "figma:asset/4ae67851f98513f2a15a9e48006a5b6c9cb69603.png";
import campanhaImg2 from "figma:asset/6456573248353d23313291dc15204c06397fdbc2.png";
import campanhaImg3 from "figma:asset/67077f61632bd0ebf9c8b4aaee2c0285a436da67.png";
import campanhaImg4 from "figma:asset/36d16a528bdcbd12c05fff1a541d8e05279a38ce.png";
import campanhaImg5 from "figma:asset/5e37af7f7110e0c27cbe4ac0aca341bc5ea134c9.png";
import campanhaImg6 from "figma:asset/a213bcec83be9c94846532903efa0c51e424a287.png";
import electroLabImg from "figma:asset/e99d0404f69418c6862ee6d871298ba2d107bfba.png";
import electroLabInterface from "figma:asset/9c8f98d7cda146f2da406d01018da9a1d5b4a88c.png";
import luminaWebsite from "figma:asset/731095a4b329029d93b9810d422dd34d859dc684.png";
import luminaSitePreview from "figma:asset/bc70e5199545b2e17243267dda0d731a58fe7f95.png";

interface ProjectDetailProps {
  project: {
    id: number;
    title: string;
    category: string;
    image: string;
    gradient: string;
  };
  onClose: () => void;
}

export const ProjectDetailSection = ({
  project,
  onClose,
}: ProjectDetailProps) => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm overflow-y-auto"
    >
      <div className="min-h-screen py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          {/* Header with Close Button */}
          <motion.div
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="flex justify-between items-center mb-12"
          >
            <motion.button
              onClick={onClose}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 text-white/70 hover:text-white transition-colors"
            >
              <ArrowLeft size={20} />
              <span>Voltar ao portfólio</span>
            </motion.button>

            <motion.button
              onClick={onClose}
              whileHover={{ rotate: 90 }}
              transition={{ duration: 0.3 }}
              className="w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
            >
              <X size={24} />
            </motion.button>
          </motion.div>

          {/* Project Header */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mb-12"
          >
            <span
              className={`inline-block px-4 py-2 rounded-full text-sm mb-4 bg-gradient-to-r ${project.gradient}`}
            >
              {project.category}
            </span>
            <h1 className="text-5xl md:text-7xl mb-6">
              <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
                {project.title}
              </span>
            </h1>
            <p className="text-white/70 text-xl max-w-3xl leading-relaxed">
              {project.id === 1
                ? "Desenvolvimento da identidade visual da LÚMINA – Agência Digital, com foco em posicionamento, personalidade e coerência visual. O projeto contempla conceito da marca, tipografia, paleta de cores, variações de logo e aplicações, traduzindo os valores de luz, clareza, criatividade e tecnologia. Uma identidade pensada para ser versátil, moderna e consistente, funcionando em ambientes digitais e institucionais."
                : project.id === 3
                  ? "Responsável pela criação de identidade visual do evento, materiais gráficos e digitais. O trabalho garantiu padronização visual, clareza na comunicação e fortalecimento da experiência do público, reforçando a presença da marca em todos os pontos de contato."
                  : project.id === 4
                    ? "Desenvolvimento e execução de diversas campanhas publicitárias, com foco em visibilidade, posicionamento e impacto de marca. Criação de peças para mídia adaptadas a diferentes objetivos e contextos. Cada campanha foi pensada de forma estratégica, garantindo coerência visual, presença marcante nos pontos de contato e fortalecimento da comunicação com o público."
                    : project.id === 6
                      ? "Desenvolvimento de aplicações web modernas, responsivas e funcionais, com foco em usabilidade, performance e experiência do usuário. Implementação de interfaces intuitivas, integração com APIs e sistemas, garantindo soluções tecnológicas alinhadas aos objetivos de negócio de cada cliente."
                      : "Descrição completa do projeto será adicionada aqui. Conte a história do projeto, os desafios enfrentados e as soluções criativas implementadas."}
            </p>
          </motion.div>

          {/* Featured Image */}
          {project.id !== 6 && (
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="relative rounded-3xl overflow-hidden mb-16 aspect-video"
            >
              <ImageWithFallback
                src={
                  project.id === 1
                    ? luminaWebsite
                    : project.image
                }
                alt={project.title}
                className={`w-full h-full object-cover ${
                  project.id === 1
                    ? "object-center"
                    : project.id === 3
                      ? "brightness-110"
                      : ""
                }`}
              />
              {/* Remove overlay para projeto de Identidade Visual e Desenvolvimento Web */}
              {project.id !== 1 && project.id !== 3 && (
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-20`}
                />
              )}
            </motion.div>
          )}

          {/* Additional Images Grid */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.9 }}
            className="grid md:grid-cols-2 gap-8 mb-16"
          >
            {project.id === 1 ? (
              <>
                {/* Imagem 1 - IDENTIDADE VISUAL: LÚMINA (Capa) */}
                <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-br from-purple-900/30 to-blue-900/30 flex items-center justify-center">
                  <ImageWithFallback
                    src={logomarcaImg1}
                    alt="LÚMINA - Identidade Visual"
                    className="w-full h-full object-contain p-4"
                  />
                </div>

                {/* Imagem 2 - CONCEITO (Slide com laptop) */}
                <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-br from-purple-900/30 to-blue-900/30 flex items-center justify-center">
                  <ImageWithFallback
                    src={logomarcaImg2}
                    alt="LÚMINA - Conceito"
                    className="w-full h-full object-contain p-4"
                  />
                </div>

                {/* Imagem 3 - Símbolo (Explicação do logo) */}
                <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-br from-purple-900/30 to-blue-900/30 flex items-center justify-center">
                  <ImageWithFallback
                    src={logomarcaImg3}
                    alt="LÚMINA - Símbolo"
                    className="w-full h-full object-contain p-4"
                  />
                </div>

                {/* Imagem 4 - Paleta de Cores */}
                <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-br from-purple-900/30 to-blue-900/30 flex items-center justify-center">
                  <ImageWithFallback
                    src={logomarcaImg4}
                    alt="LÚMINA - Paleta de Cores"
                    className="w-full h-full object-contain p-4"
                  />
                </div>

                {/* Imagem 5 - Elementos Gráficos e Estilo Visual */}
                <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-br from-purple-900/30 to-blue-900/30 flex items-center justify-center">
                  <ImageWithFallback
                    src={logomarcaImg5}
                    alt="LÚMINA - Elementos Gráficos e Estilo Visual"
                    className="w-full h-full object-contain p-4"
                  />
                </div>

                {/* Imagem 6 - Tipografia */}
                <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-br from-purple-900/30 to-blue-900/30 flex items-center justify-center">
                  <ImageWithFallback
                    src={logomarcaImg6}
                    alt="LÚMINA - Tipografia"
                    className="w-full h-full object-contain p-4"
                  />
                </div>

                {/* Imagem 7 - Aplicação em Brindes (canecas e garrafa) */}
                <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-br from-purple-900/30 to-blue-900/30 flex items-center justify-center">
                  <ImageWithFallback
                    src={logomarcaImg7}
                    alt="LÚMINA - Aplicação em Brindes"
                    className="w-full h-full object-contain p-4"
                  />
                </div>

                {/* Imagem 8 - Aplicação em Materiais (caderno, caixa e ecobag) */}
                <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-br from-purple-900/30 to-blue-900/30 flex items-center justify-center">
                  <ImageWithFallback
                    src={logomarcaImg8}
                    alt="LÚMINA - Aplicação em Materiais"
                    className="w-full h-full object-contain p-4"
                  />
                </div>
              </>
            ) : project.id === 3 ? (
              <>
                {/* Imagem 1 - Banner com pessoa - ajustado para mostrar mais o rosto */}
                <div className="aspect-[4/3] rounded-2xl overflow-hidden">
                  <ImageWithFallback
                    src={identidadeImg1}
                    alt="Clube Hangar Business - Banner"
                    className="w-full h-full object-cover object-[center_30%]"
                  />
                </div>

                {/* Imagem 2 - Totem */}
                <div className="aspect-[4/3] rounded-2xl overflow-hidden">
                  <ImageWithFallback
                    src={identidadeImg2}
                    alt="Clube Hangar Business - Totem"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Imagem 3 - Pasta/Catálogo */}
                <div className="aspect-[4/3] rounded-2xl overflow-hidden">
                  <ImageWithFallback
                    src={identidadeImg3}
                    alt="Clube Hangar Business - Material Gráfico"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Imagem 4 - Pasta preta - ajustada para mostrar todo conteúdo */}
                <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-br from-purple-900/30 to-blue-900/30 flex items-center justify-center">
                  <ImageWithFallback
                    src={identidadeImg4}
                    alt="Clube Hangar Business - Pasta"
                    className="w-full h-full object-contain p-4"
                  />
                </div>

                {/* Imagem 5 - Catálogo aberto */}
                <div className="aspect-[4/3] rounded-2xl overflow-hidden">
                  <ImageWithFallback
                    src={identidadeImg5}
                    alt="Clube Hangar Business - Catálogo"
                    className="w-full h-full object-cover"
                  />
                </div>
              </>
            ) : project.id === 4 ? (
              <>
                {/* Imagem 1 - Campanha de Marketing */}
                <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-br from-purple-900/30 to-blue-900/30 flex items-center justify-center">
                  <ImageWithFallback
                    src={campanhaImg1}
                    alt="Campanha de Marketing"
                    className="w-full h-full object-contain p-4"
                  />
                </div>

                {/* Imagem 2 - Anúncio em Rede Social */}
                <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-br from-purple-900/30 to-blue-900/30 flex items-center justify-center">
                  <ImageWithFallback
                    src={campanhaImg2}
                    alt="Anúncio em Rede Social"
                    className="w-full h-full object-contain p-4"
                  />
                </div>

                {/* Imagem 3 - Banner de Evento */}
                <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-br from-purple-900/30 to-blue-900/30 flex items-center justify-center">
                  <ImageWithFallback
                    src={campanhaImg3}
                    alt="Banner de Evento"
                    className="w-full h-full object-contain p-4"
                  />
                </div>

                {/* Imagem 4 - Campanha de Marketing */}
                <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-br from-purple-900/30 to-blue-900/30 flex items-center justify-center">
                  <ImageWithFallback
                    src={campanhaImg4}
                    alt="Campanha de Marketing"
                    className="w-full h-full object-contain p-4"
                  />
                </div>

                {/* Imagem 5 - Anúncio em Rede Social */}
                <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-br from-purple-900/30 to-blue-900/30 flex items-center justify-center">
                  <ImageWithFallback
                    src={campanhaImg5}
                    alt="Anúncio em Rede Social"
                    className="w-full h-full object-contain p-4"
                  />
                </div>

                {/* Imagem 6 - Banner de Evento */}
                <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-br from-purple-900/30 to-blue-900/30 flex items-center justify-center">
                  <ImageWithFallback
                    src={campanhaImg6}
                    alt="Banner de Evento"
                    className="w-full h-full object-contain p-4"
                  />
                </div>
              </>
            ) : project.id === 6 ? (
              <>
                {/* GitHub Project 1 - Electro Lab */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="col-span-full rounded-2xl bg-gradient-to-br from-purple-900/40 to-blue-900/40 border border-white/10 overflow-hidden hover:border-white/20 transition-all"
                >
                  {/* Imagem de Preview */}
                  <div className="w-full aspect-video overflow-hidden">
                    <ImageWithFallback
                      src={electroLabInterface}
                      alt="Electro Lab - Preview do Site"
                      className="w-full h-full object-cover object-top"
                    />
                  </div>

                  {/* Conteúdo do Card */}
                  <div className="p-8 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-3 mb-4">
                        <motion.a
                          href="https://github.com/MarllonSoares/ElectroLab"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <Github
                            className="text-white"
                            size={24}
                          />
                        </motion.a>
                        <div>
                          <h3 className="text-2xl text-white">
                            Electro Lab
                          </h3>
                          <p className="text-white/50 text-sm"></p>
                        </div>
                      </div>
                      <p className="text-white/70 text-lg mb-6">
                        ElectroLab é um projeto educacional
                        interativo voltado ao ensino prático e
                        acessível sobre o funcionamento de
                        baterias sustentáveis. Por meio de
                        simulações digitais, o usuário pode
                        criar sua própria bio-bateria,
                        escolhendo materiais e configurações que
                        impactam diretamente a eficiência,
                        segurança e o impacto ambiental do
                        sistema.
                      </p>
                    </div>
                    <div className="flex items-center gap-4">
                      <motion.a
                        href="https://electro-lab.vercel.app"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 rounded-full text-white flex items-center gap-2 transition-colors"
                      >
                        <ExternalLink size={18} />
                        Ver demo
                      </motion.a>
                    </div>
                  </div>
                </motion.div>

                {/* GitHub Project 2 - LÚMINA AGÊNCIA */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="col-span-full rounded-2xl bg-gradient-to-br from-blue-900/40 to-purple-900/40 border border-white/10 overflow-hidden hover:border-white/20 transition-all"
                >
                  {/* Imagem de Preview */}
                  <div className="w-full aspect-video overflow-hidden">
                    <ImageWithFallback
                      src={luminaSitePreview}
                      alt="LÚMINA AGÊNCIA - Preview do Site"
                      className="w-full h-full object-cover object-top"
                    />
                  </div>

                  {/* Conteúdo do Card */}
                  <div className="p-8 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-3 mb-4">
                        <motion.a
                          href="https://github.com/MarllonSoares/Bio-Battery"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <Github
                            className="text-white"
                            size={24}
                          />
                        </motion.a>
                        <div>
                          <h3 className="text-2xl text-white">
                            LÚMINA AGÊNCIA
                          </h3>
                          <p className="text-white/50 text-sm"></p>
                        </div>
                      </div>
                      <p className="text-white/70 text-lg mb-6">
                        Uma agência de marketing que transforma
                        estratégia em resultado por meio de
                        criatividade, tecnologia e soluções
                        digitais focadas em performance,
                        ajudamos marcas a vender mais e se
                        posicionar melhor através de estratégias
                        de marketing criativas, dados, design e
                        tecnologia, sempre focados em resultados
                        mensuráveis.
                      </p>
                    </div>
                    <div className="flex items-center gap-4">
                      <motion.a
                        href="https://seu-site-bio-battery.vercel.app"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 rounded-full text-white flex items-center gap-2 transition-colors"
                      >
                        <ExternalLink size={18} />
                        Ver demo
                      </motion.a>
                    </div>
                  </div>
                </motion.div>
              </>
            ) : (
              <>
                <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 flex items-center justify-center">
                  <p className="text-white/50">
                    Imagem adicional do projeto
                  </p>
                </div>
                <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 flex items-center justify-center">
                  <p className="text-white/50">
                    Imagem adicional do projeto
                  </p>
                </div>
                <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 flex items-center justify-center">
                  <p className="text-white/50">
                    Imagem adicional do projeto
                  </p>
                </div>
                <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 flex items-center justify-center">
                  <p className="text-white/50">
                    Imagem adicional do projeto
                  </p>
                </div>
                <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 flex items-center justify-center">
                  <p className="text-white/50">
                    Imagem adicional do projeto
                  </p>
                </div>
              </>
            )}
          </motion.div>

          {/* Bottom CTA */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.1 }}
            className="text-center mt-16 pt-16 border-t border-white/10"
          >
            <h3 className="text-2xl md:text-3xl text-white mb-4">
              Gostou do projeto?
            </h3>
            <p className="text-white/70 mb-8">
              Vamos criar algo incrível para sua marca também.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                onClose();
                setTimeout(() => {
                  document
                    .getElementById("contato")
                    ?.scrollIntoView({ behavior: "smooth" });
                }, 100);
              }}
              className={`px-8 py-4 rounded-full text-white bg-gradient-to-r ${project.gradient} hover:shadow-lg hover:shadow-purple-500/50 transition-all`}
            >
              Iniciar meu projeto
            </motion.button>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};