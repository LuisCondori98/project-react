import Footer from "../../Footer/Footer"
import ItemMarcas from "../../ItemMarcas/ItemMarcas"
import TextEmergente from "../../TextEmergente/TextEmergente"
import "./Index.css"

const Index = () => {
    return (
        <div className="containers">
            <TextEmergente />
            <div className="container-banner">
                <img src="../../images/logo.png" alt="logo" className="banner-logo"/>
            </div>
            <div className="container-video">
                <video src="../../images/ruteros-video.mp4" autoPlay={true} muted loop={true}/>
            </div>
            <div className="container-categorias">
            </div>
            <ItemMarcas />
            <Footer />
        </div>
    )
}

export default Index