import './Trabajos.css';

function Trabajos() {
    return (
        <section className='trabajos'>
            <div className='titulo-trabajos-contenedor'>
                <p className='titulo-trabajos'>Las ideas están para</p>
                <h2 className='titulo-2-trabajos'>hacerlas realidad.</h2>
            </div>
            <div className='span-trabajos-contenedor'>
                <p className='span-trabajos'>Conocé lo que hago</p>
            </div>
            <div className='info-contenedor-trabajos'>
                <h3 className='subtitulo-trabajos'>Marcas con personalidad propia.</h3>
                <p className='texto-1'>Hay negocios que tienen mucho para ofrecer, pero todavía no encontraron cómo mostrarlo. </p>
                <p className='texto-2'>Mi trabajo es darles una identidad visual que los represente y los ayude a diferenciarse.</p>
            </div>
            <div className='imagenes-contenedor'>
                <div className='imagen-trabajos'>
                    Map de imagenes
                </div>
            </div>
            <div className='texto-3-contenedor'>
                <p className='texto-3'>Desde la elección de tipografías y paletas de colores hasta los recursos gráficos y el estilo visual, cada detalle está pensado para construir una marca con esencia propia</p>
            </div>
        </section>
    )
}

export default Trabajos;