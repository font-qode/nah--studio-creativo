import './Header.css';

function Header() {
    return (
        <section className='header-contenedor'>
            <div className="logo-contenedor">
                <img className='img-logo' src="logo_N_rojo.png" alt="logo de NAHÜ" />
            </div>
            <div className="secciones-contenedor">
                <div className="secciones">
                    <a href="">Inicio</a>
                </div>
                <div className="secciones">
                    <a href="">Sobre mi</a>
                </div>
                <div className="secciones">
                    <a href="">Trabajos</a>
                </div>
                <div className="secciones">
                    <a href="">Campañas</a>
                </div>
                <div className="secciones">
                    <a href="">Community</a>
                </div>
                <div className="secciones">
                    <a href="">Educación</a>
                </div>
                <div className="secciones">
                    <a href="">Contacto</a>
                </div>
            </div>
        </section>
    )
}

export default Header;