import Footer from "../../Footer/Footer"
import TextEmergente from "../../TextEmergente/TextEmergente"
import "./Index.css"

const Index = () => {
    return (
        <div className="containers">
            <TextEmergente />
            <div className="container-banner">
                <img src="https://firebasestorage.googleapis.com/v0/b/my-web-6e66e.appspot.com/o/img%2Flogo.png?alt=media&token=5962cda6-557b-4980-bcd8-125cf99fb416" style={{backgroundColor: "white", borderRadius: "50%", padding: "5px"}} alt="logo" className="banner-logo"/>
            </div>
            <div className="container-video">
                <video src="../../images/ruteros-video.mp4" autoPlay={true} muted loop={true}/>
            </div>
            <div className="container-categorias">
            </div>
            <Footer />
        </div>
    )
}

export default Index