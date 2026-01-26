import React from 'react';
// Importa tus fotos reales aquí
import fotoCactus from '../../assets/la_purpura.png'; 
import fotoPulpa from '../../assets/miel_de_espinas.png'; 

export const About = () => {
  return (
    <section id="nosotros" className="py-24 bg-[#fffcf9]">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-16">
          
          {/* Lado Izquierdo: Collage de Fotos Reales */}
          <div className="w-full md:w-1/2 relative">
            <div className="grid grid-cols-2 gap-4">
              <div >
                <img src={fotoCactus} alt="Cactus Biznaga" className="w-full h-64 object-cover" />
              </div>
              <div>
                <img src={fotoPulpa} alt="Pulpa de Borrachita" className="w-full h-64 object-cover" />
              </div>
            </div>
            {/* Adorno decorativo con el rosa de tu logo */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#e2007a]/10 rounded-full blur-3xl -z-10"></div>
          </div>

          {/* Lado Derecho: Texto de la Historia */}
          <div className="w-full md:w-1/2 text-left">
            <span className="text-[#e2007a] font-bold uppercase tracking-widest text-sm">Nuestra Esencia</span>
            <h2 className="text-4xl font-black text-gray-900 mt-2 mb-6 leading-tight">
              Honrando la Tierra, <br />
              <span className="text-[#e2007a]">Destilando Identidad.</span>
            </h2>
            <p className="text-gray-700 text-lg mb-6 leading-relaxed">
              En **TLALI**, no solo hacemos cerveza; embotellamos el espíritu del desierto. Cada lote nace del respeto a los frutos silvestres como la borrachita y el garambullo.
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">100% Auténtico</h4>
                  <p className="text-gray-600 text-sm">Procesamos la fruta a mano para conservar esa textura y semilla única.</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;