function Realisations() {
    return (
      <div>
        <BanniereRealisation />
        <GallerieExcavation />
      </div>
    );
}
//hallo
function BanniereRealisation() {
    return (
      <div id="BanniereRealisation">
        <div id="filtre">
          <div id="info" className="flexColumn">
            <h2>Réalisations</h2>
            <p>
              Equinoxe JMP est heureux de vous présenter quelques travaux et projets récemment réalisés avec succès pour nos clients résidentiels, commerciaux et institutionnels.
              Que ce soit pour des travaux d'excavation ou de génie civil, vous pouvez nous faire confiance. Notre main-d'oeuvre compétente et notre équipe mulitdisciplinaire saura répondre à vos besoins.
            </p>
            <br></br>
            <p>
              Profitez de l'expertise de notre équipe spécialisée en faisant appel à Equinoxe JMP dès aujourd'hui.
            </p>
          </div>
        </div>
      </div>
    );
}

function GallerieExcavation(){
    return (
        <div className="pswp-gallery" id="my-gallery">
            <a
            href="https://cdn.photoswipe.com/photoswipe-demo-images/photos/1/img-2500.jpg"
            data-lightbox="1875"
            data-title="Image 1"
            className="img"
            >
            <img
                src="https://cdn.photoswipe.com/photoswipe-demo-images/photos/1/img-200.jpg"
                alt=""
            />
            </a>
            <a
            href="https://cdn.photoswipe.com/photoswipe-demo-images/photos/2/img-2500.jpg"
            data-lightbox="1875"
            data-title="Image 2"
            className="img"
            >
            <img
                src="https://cdn.photoswipe.com/photoswipe-demo-images/photos/2/img-200.jpg"
                alt=""
            />
            </a>
            <a
            href="https://cdn.photoswipe.com/photoswipe-demo-images/photos/3/img-2500.jpg"
            data-lightbox="1875"
            data-title="Image 3"
            className="img"
            >
            <img
                src="https://cdn.photoswipe.com/photoswipe-demo-images/photos/3/img-200.jpg"
                alt=""
            />
            </a>
        </div>
      );
}

function GallerieGenieCivil(){
    return (0
      );
}