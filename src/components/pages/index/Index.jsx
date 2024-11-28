import Footer from "../../Footer/Footer"
import TextEmergente from "../../TextEmergente/TextEmergente"
import "./Index.css"

const Index = () => {
    return (
        <div className="containers">
            <TextEmergente />
            <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active" data-bs-interval="10000">
                    <img className="carousel-img" src="https://firebasestorage.googleapis.com/v0/b/my-web-6e66e.appspot.com/o/img%2Fconsolas.jpeg?alt=media&token=9fd2228a-23c1-495e-884e-8a93a8c6dc66"  alt="..." />
                    </div>
                    <div class="carousel-item" data-bs-interval="2000">
                    <img className="carousel-img" src="https://firebasestorage.googleapis.com/v0/b/my-web-6e66e.appspot.com/o/img%2Fcelulares2.webp?alt=media&token=40d9f05b-add4-4fc3-aad0-e3c0f310d266"  alt="..." />
                    </div>
                    <div class="carousel-item">
                    <img className="carousel-img" src="https://firebasestorage.googleapis.com/v0/b/my-web-6e66e.appspot.com/o/img%2Fciclismo.jpg?alt=media&token=34cb6498-bd03-40a5-a3d1-ae7df4d449a3"  alt="..." />
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
                </div>
            <Footer />
        </div>
    )
}

export default Index