import { useState } from "react";
import { ImBooks } from "react-icons/im";
import { IoMdWifi } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import { PiShoppingCartLight } from "react-icons/pi";
import { MdMenu } from "react-icons/md";
import { navbarLinks } from "../data/data";
import MenuResponsivo from "./MenuResponsivo";
import { GiFishCorpse } from "react-icons/gi";
import { GiWineBottle } from "react-icons/gi";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [abierto, setAbierto] = useState(false);

  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="relative w-full overflow-x-hidden"
    >
      {/* CONTENEDOR PRINCIPAL */}
      <div className="container flex justify-between items-center py-8 font-bold">
        
        {/* LOGO */}
        <div className="text-2xl flex items-center gap-2 uppercase">
          <GiWineBottle />
          <p>Cerveza artesanal </p>
          <p className="text-secondary"> TLALI </p>
        </div>

        {/* MENÚ DESKTOP */}
        <div className="hidden md:block">
          <ul className="flex items-center gap-7 text-gray-600">
            {navbarLinks.map((item) => (
              <li key={item.id}>
                <motion.div
                  whileHover={{ scale: 1.1 }}
                >
                  <Link
                    to={item.url}
                    className="inline-block py-1 px-3 hover:text-primary"
                  >
                    {item.title}
                  </Link>
                </motion.div>
              </li>
            ))}
          </ul>
        </div>

        {/* ICONOS + MENÚ MÓVIL */}
        <div className="flex items-center gap-2">
          <button className="text-2xl hover:bg-primary hover:text-white rounded-full p-2 duration-300">
            <CiSearch />
          </button>

          <button className="text-2xl hover:bg-primary hover:text-white rounded-full p-2 duration-300">
            <PiShoppingCartLight />
          </button>

          <button className="hidden md:block hover:bg-primary font-semibold rounded-md text-white bg-secondary px-4 py-2 duration-300">
            Ingresar
          </button>

          {/* BOTÓN MENÚ MÓVIL */}
          <button className="md:hidden p-2">
            <MdMenu
              onClick={() => setAbierto(!abierto)}
              className="text-4xl cursor-pointer"
            />
          </button>
        </div>
      </div>

      {/* MENÚ RESPONSIVO */}
      <MenuResponsivo
        open={abierto}
        navbarLinks={navbarLinks}
        setAbierto={setAbierto}
      />
    </motion.nav>
  );
};

export default Navbar;
 