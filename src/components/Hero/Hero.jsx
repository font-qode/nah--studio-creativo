import './Hero.css';

function Hero() {
    return (
        <section className='hero'>
            <div className="info-contenedor">
                <div className="logo-titulo-contenedor">
                    <img src="/logo_nahü_blanco.png" alt="Logo de NAHÜ" />
                    <div className='subtitulo-contenedor'>
                        <h5 className='subtitulo-hero'>Transformo ideas en estrategias</h5>
                        <h5 className='subtitulo-hero'>que funcionan.</h5>
                    </div>
                    <div>
                        <button className='boton-hero'>Contame tu idea</button>
                    </div>
                </div>
                <div className="img-hero-contenedor">
                    <img className='img-hero' src="/M_logo.svg" alt="Imagen de Portada" />
                </div>
                <div className="img-hero-mobile">
                    <img src="/M_logo.svg" alt="imagen de portada" />
                </div>
            </div>
            <div className='explorar-contenedor'>
                <span className='explorar-span'>Explorar <span className='flecha'>→</span> </span>
            </div>
        </section>
    )
}

export default Hero;