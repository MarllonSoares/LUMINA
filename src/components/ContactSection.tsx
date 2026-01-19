import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef, useState } from "react";
import {
  Send,
  Mail,
  Phone,
  MapPin,
  CheckCircle,
  AlertCircle,
} from "lucide-react";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

export const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    try {
      // Importa o EmailJS dinamicamente
      const emailjs = await import("@emailjs/browser");

      // Configuração do EmailJS
      const serviceId = "service_4sldc7j"; // Você vai precisar criar isso
      const templateId = "template_c58v99e"; // Você vai precisar criar isso
      const publicKey = "b33_WNx0HBHxylBsc"; // Você vai precisar adicionar isso

      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_email: "agenciadigitallumina@gmail.com",
      };

      await emailjs.send(
        serviceId,
        templateId,
        templateParams,
        publicKey,
      );

      setSubmitStatus({
        type: "success",
        message:
          "Mensagem enviada com sucesso! Retornaremos em breve.",
      });
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Erro ao enviar email:", error);
      setSubmitStatus({
        type: "error",
        message:
          "Erro ao enviar mensagem. Por favor, tente novamente ou entre em contato pelo WhatsApp.",
      });
    } finally {
      setIsSubmitting(false);

      // Limpa a mensagem de status após 5 segundos
      setTimeout(() => {
        setSubmitStatus({ type: null, message: "" });
      }, 5000);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement
    >,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section
      id="contato"
      ref={ref}
      className="relative py-16 md:py-32 bg-black overflow-hidden"
    >
      {/* Background Effects */}
      <motion.div
        className="absolute top-20 left-0 w-96 h-96 bg-gradient-to-br from-pink-500/20 to-purple-500/20 rounded-full blur-3xl"
        animate={{
          x: [0, 100, 0],
          y: [0, -50, 0],
        }}
        transition={{ duration: 15, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-20 right-0 w-96 h-96 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-full blur-3xl"
        animate={{
          x: [0, -100, 0],
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
          <span className="text-blue-400 tracking-wider mb-4 inline-block">
            ENTRE EM CONTATO
          </span>
          <h2 className="text-5xl md:text-6xl mb-6">
            <span className="text-white">Vamos criar </span>
            <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
              juntos?
            </span>
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto text-lg">
            Conte-nos sobre seu projeto e vamos transformá-lo em
            realidade.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 max-w-6xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-3xl text-white mb-6">
                Estamos prontos para ouvir sua ideia
              </h3>
              <p className="text-white/70 text-lg leading-relaxed">
                Seja para criar uma nova identidade visual,
                desenvolver uma campanha ou reposicionar sua
                marca, estamos aqui para ajudar.
              </p>
            </div>

            <div className="space-y-6">
              {/* Email */}
              <motion.div
                whileHover={{ x: 10 }}
                className="flex items-center gap-4 group"
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-pink-500 to-purple-500 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Mail className="text-white" size={24} />
                </div>
                <div>
                  <p className="text-white/50 text-sm">Email</p>
                  <p className="text-white text-lg">
                    agenciadigitallumina@gmail.com
                  </p>
                </div>
              </motion.div>

              {/* Phone */}
              <motion.div
                whileHover={{ x: 10 }}
                className="flex items-center gap-4 group"
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Phone className="text-white" size={24} />
                </div>
                <div>
                  <p className="text-white/50 text-sm">
                    Telefone
                  </p>
                  <p className="text-white text-lg">
                    +55 (71) 92003-9584
                  </p>
                </div>
              </motion.div>

              {/* Location */}
              <motion.div
                whileHover={{ x: 10 }}
                className="flex items-center gap-4 group"
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-orange-500 to-yellow-500 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <MapPin className="text-white" size={24} />
                </div>
                <div>
                  <p className="text-white/50 text-sm">
                    Localização
                  </p>
                  <p className="text-white text-lg">
                    Salvador, BA - Brasil
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Decorative element */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : {}}
              transition={{ duration: 1, delay: 0.5 }}
              className="h-1 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 origin-left mt-12"
            />
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <form
              onSubmit={handleSubmit}
              className="relative bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-3xl p-8 backdrop-blur-sm overflow-hidden"
            >
              {/* Neon glow effect */}
              <div className="absolute -top-px left-0 right-0 h-px bg-gradient-to-r from-transparent via-pink-500 to-transparent" />
              <div className="absolute -bottom-px left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent" />
              <div className="absolute -left-px top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-purple-500 to-transparent" />
              <div className="absolute -right-px top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-cyan-500 to-transparent" />

              <div className="relative z-10 space-y-6">
                {/* Name */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-white/80 mb-2"
                  >
                    Nome
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="bg-white/5 border-white/10 text-white placeholder:text-white/30 focus:border-purple-500 focus:ring-purple-500/20 transition-all"
                    placeholder="Seu nome completo"
                  />
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-white/80 mb-2"
                  >
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="bg-white/5 border-white/10 text-white placeholder:text-white/30 focus:border-purple-500 focus:ring-purple-500/20 transition-all"
                    placeholder="seu@email.com"
                  />
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-white/80 mb-2"
                  >
                    Mensagem
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="bg-white/5 border-white/10 text-white placeholder:text-white/30 focus:border-purple-500 focus:ring-purple-500/20 transition-all resize-none"
                    placeholder="Conte-nos sobre seu projeto..."
                  />
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{
                    scale: isSubmitting ? 1 : 1.02,
                  }}
                  whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                  className={`w-full group relative px-8 py-4 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 rounded-xl overflow-hidden ${
                    isSubmitting
                      ? "opacity-70 cursor-not-allowed"
                      : ""
                  }`}
                >
                  <span className="relative z-10 flex items-center justify-center gap-2 text-white">
                    {isSubmitting
                      ? "Enviando..."
                      : "Enviar mensagem"}
                    {!isSubmitting && (
                      <Send
                        size={20}
                        className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                      />
                    )}
                  </span>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                  />
                </motion.button>

                {/* Status Message */}
                {submitStatus.type && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className={`flex items-center gap-3 p-4 rounded-xl ${
                      submitStatus.type === "success"
                        ? "bg-green-500/10 border border-green-500/20"
                        : "bg-red-500/10 border border-red-500/20"
                    }`}
                  >
                    {submitStatus.type === "success" ? (
                      <CheckCircle
                        className="text-green-400 flex-shrink-0"
                        size={20}
                      />
                    ) : (
                      <AlertCircle
                        className="text-red-400 flex-shrink-0"
                        size={20}
                      />
                    )}
                    <p
                      className={`text-sm ${
                        submitStatus.type === "success"
                          ? "text-green-200"
                          : "text-red-200"
                      }`}
                    >
                      {submitStatus.message}
                    </p>
                  </motion.div>
                )}
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};