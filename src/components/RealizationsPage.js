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
      <div className="container" >
        <div className="sub-container">
          <div className="grid" id="my-gallery">
              <a
              href="/public/images/excavation1.JPEG"
              data-lightbox="excavation"
              data-title="Travaux d'excavation"
              className="img"
              >
              <img
                  src="/public/images/excavation1.JPEG"
                  alt=""
              />
              </a>
              <a
              href="/public/images/excavation2.jpg"
              data-lightbox="excavation"
              data-title="Travaux d'excavation"
              className="img"
              >
              <img
                  src="/public/images/excavation2.jpg"
                  alt=""
              />
              </a>
              <a
              href="/public/images/excavation3.jpg"
              data-lightbox="excavation"
              data-title="Travaux d'excavation"
              className="img"
              >
              <img
                  src="/public/images/excavation3.jpg"
                  alt=""
              />
              </a>
              <a
              href="/public/images/excavation4.jpg"
              data-lightbox="excavation"
              data-title="Travaux d'excavation"
              className="img"
              >
              <img
                  src="/public/images/excavation4.jpg"
                  alt=""
              />
              </a>
              <a
              href="/public/images/excavation5.JPEG"
              data-lightbox="excavation"
              data-title="Travaux d'excavation"
              className="img"
              >
              <img
                  src="/public/images/excavation5.JPEG"
                  alt=""
              />
              </a>
          </div>
        </div>
      </div>
      );
}

function GallerieGenieCivil(){
    return (0
      );
}