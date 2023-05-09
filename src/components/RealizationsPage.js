function Realisations() {
    return (
      <div>
        <BanniereRealisation />
        <GallerieExcavation />
        <GallerieGenieCivil />
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
          <div className="grid" id="my-gallery1">
              <a
              href="/equinoxe/public/images/excavation1.JPEG"
              data-lightbox="excavation"
              data-title="Travaux d'excavation"
              className="img"
              id="img1"
              >
              <img
                  src="/equinoxe/public/images/excavation1.JPEG"
                  alt=""
              />
              </a>
              <a
              href="/equinoxe/public/images/excavation2.jpg"
              data-lightbox="excavation"
              data-title="Travaux d'excavation"
              className="img"
              id="img2"
              >
              <img
                  src="/equinoxe/public/images/excavation2.jpg"
                  alt=""
              />
              </a>
              <a
              href="/equinoxe/public/images/excavation3.jpg"
              data-lightbox="excavation"
              data-title="Travaux d'excavation"
              className="img"
              id="img3"
              >
              <img
                  src="/equinoxe/public/images/excavation3.jpg"
                  alt=""
              />
              </a>
              <a
              href="/equinoxe/public/images/excavation4.jpg"
              data-lightbox="excavation"
              data-title="Travaux d'excavation"
              className="img"
              id="img4"
              >
              <img
                  src="/equinoxe/public/images/excavation4.jpg"
                  alt=""
              />
              </a>
              <a
              href="/equinoxe/public/images/excavation5.JPEG"
              data-lightbox="excavation"
              data-title="Travaux d'excavation"
              className="img"
              id="img5"
              >
              <img
                  src="/equinoxe/public/images/excavation5.JPEG"
                  alt=""
              />
              </a>
          </div>
          <div className="subtitle">
            <hr></hr>
            <h3>Travaux d'excavation</h3>
            <hr></hr>
          </div>
        </div>
      </div>
      );
}

function GallerieGenieCivil(){
    return (
      <div className="container" >
        <div className="sub-container">
          <div className="subtitle">
            <hr></hr>
            <h3>Projets de génie civil</h3>
            <hr></hr>
          </div>
          <div className="grid" id="my-gallery2">
              <a
              href="/equinoxe/public/images/genie1.jpg"
              data-lightbox="genie"
              data-title="Projets de génie civil"
              className="img"
              id="img6"
              >
              <img
                  src="/equinoxe/public/images/genie1.jpg"
                  alt=""
              />
              </a>
              <a
              href="/equinoxe/public/images/genie2.jpg"
              data-lightbox="genie"
              data-title="Projets de génie civil"
              className="img"
              id="img7"
              >
              <img
                  src="/equinoxe/public/images/genie2.jpg"
                  alt=""
              />
              </a>
              <a
              href="/equinoxe/public/images/genie3.jpg"
              data-lightbox="genie"
              data-title="Projets de génie civil"
              className="img"
              id="img8"
              >
              <img
                  src="/equinoxe/public/images/genie3.jpg"
                  alt=""
              />
              </a>
              <a
              href="/equinoxe/public/images/genie4.jpg"
              data-lightbox="genie"
              data-title="Projets de génie civil"
              className="img"
              id="img9"
              >
              <img
                  src="/equinoxe/public/images/genie4.jpg"
                  alt=""
              />
              </a>
              <a
              href="/equinoxe/public/images/genie5.png"
              data-lightbox="genie"
              data-title="Projets de génie civil"
              className="img"
              id="img10"
              >
              <img
                  src="/equinoxe/public/images/genie5.png"
                  alt=""
              />
              </a>
              <a
              href="/equinoxe/public/images/genie6.jpg"
              data-lightbox="genie"
              data-title="Projets de génie civil"
              className="img"
              id="img11"
              >
              <img
                  src="/equinoxe/public/images/genie6.jpg"
                  alt=""
              />
              </a>
          </div>
        </div>
      </div>
      );
}