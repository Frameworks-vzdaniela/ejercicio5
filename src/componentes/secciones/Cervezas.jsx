
import imgNopal from '../../assets/la_del_nopal.png';
import imgPurpura from '../../assets/la_purpura.png'; 
import imgMiel from '../../assets/miel_de_espinas.png'; 

export const Cervezas = () => {
  const listaCervezas = [
    {
      nombre: "La del Nopal",
      fruto: "Tuna",
      descripcion: "Sabor autentico y frescura silvestre.",
      imagen: imgNopal, 
    },
    {
      nombre: "Miel de Espina",
      fruto: "Borrachita (Biznaga)",
      descripcion: "Dulzor ancestral con notas claras y semillas naturales.",
      imagen: imgMiel,
    },
    {
      nombre: "La Púrpura",
      fruto: "Garambullo",
      descripcion: "El misticismo del garambullo en una nota agridulce única.",
      imagen: imgPurpura,
    }
  ];

  return (
    <section id="coleccion" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-gray-800">
          Nuestra Cosecha: <span className="text-[#e2007a]">Sabores del Desierto</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {listaCervezas.map((cerveza, index) => (
            <div key={index} className="group overflow-hidden shadow-xl rounded-2xl bg-white border border-gray-100 transition-all hover:-translate-y-2">
              <div className="relative h-80 overflow-hidden">
                <img 
                  src={cerveza.imagen} 
                  alt={cerveza.nombre}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                  <span className="text-xs font-bold text-[#e2007a] uppercase italic">
                    {cerveza.fruto}
                  </span>
                </div>
              </div>

              <div className="p-8 text-left">
                <h3 className="text-2xl font-black text-gray-900 mb-2 uppercase">
                  {cerveza.nombre}
                </h3>
                <p className="text-gray-600 text-sm mb-6">
                  {cerveza.descripcion}
                </p>
                <button className="w-full py-3 bg-[#e2007a] text-white rounded-lg font-bold hover:bg-black transition-colors">
                  Ver detalles
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Cervezas;