import { Link } from "react-router-dom"
import "./Footer.css"

const Footer = () => {

    const date = new Date().getFullYear()

    console.log(date)

    return (
        <footer className="footer-i">
            <div className="container-footer">
                <div className="bancos">
                    <img className="i-banco" src="../../images/visa-logo.svg" alt="visa" />
                    <img className="i-banco" src="../../images/masterCard-logo.svg" />
                    <img className="i-banco" src="../../images/plin-logo.png" />
                    <img className="i-banco" src="../../images/yape-logo.png" />
                </div>
                <div className="horarios">
                    <ul style={{lineHeight: "25px"}}>
                        <li><h3>Horario de atencion</h3></li>
                        <li><h3>Lunes - Viernes:</h3></li>
                        <li><h3>9:00 am - 20:00 pm</h3></li>
                        <li><h3>Sabados:</h3></li>
                        <li><h3>10:00 am - 16:00 pm</h3></li>
                    </ul>
                </div>
                <img src="https://firebasestorage.googleapis.com/v0/b/my-web-6e66e.appspot.com/o/img%2Flogo.png?alt=media&token=5962cda6-557b-4980-bcd8-125cf99fb416" style={{backgroundColor: "white", borderRadius: "50%", height: "170px", padding: "5px"}} alt="logo" />
            </div>
            <div className="redes">
                <a href="https://www.facebook.com/profile.php?id=100091932811246" target="blank"><img className="redes-item" src="../../images/i-face.png" alt="facebook" /></a>
                <img className="redes-item" src="../../images/i-insta.png" alt="instagram" />
                <img className="redes-item" src="../../images/i-whatsapp.png" alt="whatsapp" />
                <img className="redes-item" src="../../images/i-twitter.png" alt="twitter" />
            </div>
            <h3 className="copyright">Todos los derechos reservados © {date} - City Shop</h3>
        </footer>
    )
}

export default Footer