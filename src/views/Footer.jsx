

const Footer = () => {
    return (
        <>
            <footer>
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="footer-title">Datos de contacto</div>
                            <ul className="footer-li">
                                <li>+56 9 40402035</li>
                                <li>ELASADOR@gmail.com</li>
                            </ul>
                        </div>
                        <div className="col-md-4">
                            <div className="footer-title">Redes Sociales</div>

                            <ul className="footer-rrss">
                                <li>
                                    <a href="#">
                                        <i className="bi bi-facebook"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <i className="bi bi-instagram"></i>
                                    </a>
                                </li>
                            </ul>

                        </div>
                        <div className="col-md-4">
                            <div className="footer-title">Horario de atención</div>
                            <div className="footer-text">Lunes a viernes: 11:00 hrs - 23:00 hrs</div>
                            <div className="footer-title">Ubicación</div>
                            <div className="footer-text">Las condes, Av.las condes 100905</div>
                        </div>
                        <div className="col-md-12">
                            <div className="copyright">
                                EL ASADOR
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer;