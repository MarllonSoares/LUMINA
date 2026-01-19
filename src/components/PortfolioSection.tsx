import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef, useState } from "react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ExternalLink } from "lucide-react";
import logomarcaImage from "figma:asset/e75771cd31b3f7642a0fa3a03cea3a2fe6f5fcee.png";
import identidadeVisualImage from "figma:asset/789875705ee5d468eeb146644d15d00f061aeeb2.png";
import campanhaPublicitariaImage from "figma:asset/4ae67851f98513f2a15a9e48006a5b6c9cb69603.png";
import electroLabImage from "figma:asset/e99d0404f69418c6862ee6d871298ba2d107bfba.png";

const portfolioItems = [
  {
    id: 1,
    title: "Identidade Visual",
    category: "Branding",
    image: logomarcaImage,
    gradient: "from-pink-500/80 to-purple-500/80",
  },
  {
    id: 3,
    title: "Comunicação de eventos",
    category: "Design",
    image: identidadeVisualImage,
    gradient: "from-purple-500/80 to-indigo-500/80",
  },
  {
    id: 4,
    title: "Campanha Publicitária",
    category: "Advertising",
    image: campanhaPublicitariaImage,
    gradient: "from-orange-500/80 to-yellow-500/80",
  },
  {
    id: 6,
    title: "Desenvolvimento Web",
    category: "Sites",
    image: "https://images.unsplash.com/photo-1637937459053-c788742455be?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wbWVudCUyMGNvZGUlMjBzY3JlZW58ZW58MXx8fHwxNzY4NDIyNjE1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    gradient: "from-rose-500/80 to-pink-500/80",
  },
];

interface PortfolioSectionProps {
  onProjectClick: (project: (typeof portfolioItems)[0]) => void;
}

export const PortfolioSection = ({
  onProjectClick,
}: PortfolioSectionProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const [hoveredId, setHoveredId] = useState<number | null>(
    null,
  );

  return (
    <section
      id="portfolio"
      ref={ref}
      className="relative py-16 md:py-32 bg-gradient-to-b from-black via-blue-950/10 to-black overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent" />

      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 md:mb-20"
        >
          <span className="text-blue-400 tracking-wider mb-4 inline-block">
            NOSSO TRABALHO
          </span>
          <h2 className="text-5xl md:text-6xl mb-6">
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Portfólio
            </span>
            <span className="text-white"> criativo</span>
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto text-lg">
            Projetos que transformaram marcas e geraram
            resultados extraordinários.
          </p>
        </motion.div>

        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onMouseEnter={() => setHoveredId(item.id)}
              onMouseLeave={() => setHoveredId(null)}
              onClick={() => onProjectClick(item)}
              className="group relative aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer"
            >
              {/* Image */}
              <ImageWithFallback
                src={item.image}
                alt={item.title}
                className={`w-full h-full transition-transform duration-700 group-hover:scale-110 ${
                  item.id === 6 ? 'object-cover object-center' : 'object-cover'
                }`}
              />

              {/* Gradient Overlay */}
              <motion.div
                className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-90 transition-opacity duration-500`}
              />

              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <motion.div
                  initial={{ y: 20 }}
                  animate={
                    hoveredId === item.id ? { y: 0 } : { y: 20 }
                  }
                  transition={{ duration: 0.3 }}
                >
                  <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm text-white mb-3">
                    {item.category}
                  </span>
                  <h3 className="text-2xl text-white mb-2">
                    {item.title}
                  </h3>
                  <div className="flex items-center gap-2 text-white/90">
                    <span>Ver projeto</span>
                    <ExternalLink size={18} />
                  </div>
                </motion.div>
              </div>

              {/* Border Animation */}
              <motion.div className="absolute inset-0 border-2 border-transparent group-hover:border-white/30 rounded-2xl transition-all duration-500" />

              {/* Corner Accent */}
              <motion.div
                initial={{ scale: 0 }}
                animate={
                  hoveredId === item.id
                    ? { scale: 1 }
                    : { scale: 0 }
                }
                transition={{ duration: 0.3 }}
                className="absolute top-4 right-4 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center"
              >
                <ExternalLink
                  className="text-white"
                  size={20}
                />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};