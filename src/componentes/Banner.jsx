import { motion } from "framer-motion";

const Banner = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}          // empieza invisible y más abajo
      animate={{ opacity: 1, y: 0 }}           // aparece y sube a su posición
      transition={{ duration: 1, ease: "easeOut" }} // animación suave al cargar
      className="relative bg-cover bg-center text-white"
      style={{
        backgroundImage:
          "url('https://i.pinimg.com/736x/d2/5b/23/d25b23df4419e058027cd03c86e5cd83.jpg')",
      }}
    >
      {/* Overlay para oscurecer la imagen */}
      <div className="absolute inset-0 bg-black/50" />

      <div className="container relative z-10 py-24 text-center">
        {/* Título con animación de entrada */}
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-4xl md:text-5xl font-bold mb-6"
        >
          Descubre la Cerveza Artesanal <span className="text-secondary">TLALI</span>
        </motion.h1>

        {/* Subtítulo con delay para ritmo */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-lg md:text-xl mb-8"
        >
          Sabor único y auténtico en cada sorbo
        </motion.p>

        {/* Botón: solo animación en hover/click */}
        <motion.button
          type="button"
          whileHover={{ scale: 1.1, rotate: 1 }}   // animación al pasar el cursor
          whileTap={{ scale: 0.95 }}               // animación al hacer clic
          className="bg-white text-secondary font-semibold px-6 py-3 rounded-md hover:bg-gray-100 duration-300"
        >
          Comprar Ahora
        </motion.button>
      </div>
    </motion.section>
  );
};

export default Banner;