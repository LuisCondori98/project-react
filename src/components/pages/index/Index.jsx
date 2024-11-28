import Footer from "../../Footer/Footer"
import TextEmergente from "../../TextEmergente/TextEmergente"
import "./Index.css"

const Index = () => {
    return (
        <div className="containers">
            <TextEmergente />
            <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item active">
                <img src="..." class="d-block w-100" alt="..." />
                </div>
                <div class="carousel-item">
                <img src="..." class="d-block w-100" alt="..." />
                </div>
                <div class="carousel-item">
                <img src="..." class="d-block w-100" alt="..." />
                </div>
            </div>
            </div>
            <Footer />
        </div>
    )
}

export default Index