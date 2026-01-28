import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";

const MenuResponsivo = ({ open, navbarLinks, setAbierto }) => {
  return (
    <AnimatePresence mode="wait">
      {open && (
        <>
          {/* FONDO OSCURO */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.4 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black z-40 md:hidden"
            onClick={() => setAbierto(false)}
          />

          {/* MENÚ */}
          <motion.div
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -50, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed top-24 left-0 w-full z-50 md:hidden"
          >
            <div className="bg-primary text-white mx-6 rounded-xl py-10 shadow-2xl">
              <ul className="flex flex-col items-center gap-8 text-xl font-semibold uppercase">
                {navbarLinks.map((item) => (
                  <motion.li
                    key={item.id}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="cursor-pointer hover:text-black transition-colors"
                  >
                    <Link 
                      to={item.url}
                      onClick={() => setAbierto(false)}
                    >
                      {item.title}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default MenuResponsivo;