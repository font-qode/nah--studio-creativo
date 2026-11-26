import './Sobremi.css';

function Sobremi() {
    return (
        <section className='sobremi'>
            <div className='titulo-contenedor'>
                <h2 className='titulo-sobremi'>¡Hola, soy </h2>
                <h2 className='titulo-2-sobremi'> MILI! </h2>
            </div>
            <div className='textos-contenedor'>
                <p className='textos-sobremi'>Me encanta armar estrategias de contenido, lanzar campañas que realmente funcionen y crear piezas creativas que conecten con la audiencia.</p>
                <p className='textos-sobremi'>Mi onda es comunicar de forma auténtica y efectiva: fortalecer la identidad de cada marca y hacer que se luzca en redes. Ofrezco un servicio integral que mezcla estrategia, creatividad y atención personalizada.</p>
                <p className='textos-sobremi'>Soy una comunicadora comprometida, orientada a resultados y siempre con ganas de encontrar nuevas formas de potenciar la presencia digital de las marcas con las que trabajo.</p>
            </div>
            <div className='subtitulo-contenedor'>
                <h3 className='subtitulo-sobremi'>Lo que me mueve</h3>
            </div>
            <div className='cartas-valores-contenedor'>
                <div className='carta-contenedor'>
                    <img className='imagen-carta' src="/carta.png" alt="" />
                    <div className='contenido-carta'>
                        <h4 className='titulo-valor'>Creatividad</h4>
                        <p className='texto-valor'>Transformo ideas en conceptos visuales originales que comunican, inspiran y generan conexiones auténticas.</p>
                    </div>
                </div>
                <div className='carta-contenedor'>
                    <img className='imagen-carta' src="/carta.png" alt="" />
                    <div className='contenido-carta'>
                        <h4 className='titulo-valor'>Compromiso y calidad</h4>
                        <p className='texto-valor'>Me involucro en cada proyecto con responsabilidad, atención y dedicación, construyendo relaciones de confianza con mis clientes.</p>
                    </div>
                </div>
                <div className='carta-contenedor'>
                    <img className='imagen-carta' src="/carta.png" alt="" />
                    <div className='contenido-carta'>
                        <h4 className='titulo-valor'>Estrategia</h4>
                        <p className='texto-valor'>Cada decisión de diseño tiene un propósito. Construyendo marcas con dirección, coherencia y objetivos claros.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Sobremi;
