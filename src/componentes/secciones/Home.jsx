import React from 'react';
import heroBeer from '../../assets/la_del_nopal.png'; 

export const Banner = () => {
  // Función simple para bajar a la sección de cervezas
  const irACervezas = () => {
    const seccion = document.getElementById('coleccion');
    if (seccion) {
      seccion.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative h-[90vh] flex items-center overflow-hidden bg-black">
      {/* Fondo */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroBeer} 
          alt="Cerveza Tlali" 
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/20 to-transparent"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-2xl text-left">
          <span className="text-[#e2007a] font-bold tracking-widest uppercase mb-4 block">
            Hecho en Dolores Hidalgo
          </span>
          <h1 className="text-6xl md:text-7xl font-black text-white leading-none mb-6">
            TLALI <br />
            <span className="text-[#e2007a]">ARTESANAL</span>
          </h1>
          <p className="text-gray-300 text-lg md:text-xl mb-10 max-w-lg">
            Cerveza premium inspirada en los frutos del desierto: Tuna, Garambullo y Miel de Espina.
          </p>
          
        
        </div>
      </div>
    </section>
  );
};

export default Banner;
