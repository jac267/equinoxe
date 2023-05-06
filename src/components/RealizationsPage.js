import PhotoSwipeLightbox from 'https://unpkg.com/photoswipe/dist/photoswipe-lightbox.esm.js';

function Realisations() {
    return (
      <div>
        <BanniereRealisation />
        <GallerieExcavation />
        <GallerieGenieCivil />
      </div>
    );
}

function BanniereRealisation() {
    return (
      <div id="BanniereRealisation">
        <div id="filtre">
          <div id="info" class="flexColumn">
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
        <div class="pswp-gallery" id="my-gallery">
            <a
            href="https://cdn.photoswipe.com/photoswipe-demo-images/photos/1/img-2500.jpg"
            data-pswp-width="1875"
            data-pswp-height="2500"
            target="_blank"
            >
            <img
                src="https://cdn.photoswipe.com/photoswipe-demo-images/photos/1/img-200.jpg"
                alt=""
            />
            </a>
            <a
            href="https://cdn.photoswipe.com/photoswipe-demo-images/photos/2/img-2500.jpg"
            data-pswp-width="1669"
            data-pswp-height="2500"
            target="_blank"
            >
            <img
                src="https://cdn.photoswipe.com/photoswipe-demo-images/photos/2/img-200.jpg"
                alt=""
            />
            </a>
            <a
            href="https://cdn.photoswipe.com/photoswipe-demo-images/photos/3/img-2500.jpg"
            data-pswp-width="2500"
            data-pswp-height="1666"
            target="_blank"
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
    return (
        <div class="pswp-gallery" id="my-gallery">
            <a
            href="https://cdn.photoswipe.com/photoswipe-demo-images/photos/1/img-2500.jpg"
            data-pswp-width="1875"
            data-pswp-height="2500"
            target="_blank"
            >
            <img
                src="https://cdn.photoswipe.com/photoswipe-demo-images/photos/1/img-200.jpg"
                alt=""
            />
            </a>
            <a
            href="https://cdn.photoswipe.com/photoswipe-demo-images/photos/2/img-2500.jpg"
            data-pswp-width="1669"
            data-pswp-height="2500"
            target="_blank"
            >
            <img
                src="https://cdn.photoswipe.com/photoswipe-demo-images/photos/2/img-200.jpg"
                alt=""
            />
            </a>
            <a
            href="https://cdn.photoswipe.com/photoswipe-demo-images/photos/3/img-2500.jpg"
            data-pswp-width="2500"
            data-pswp-height="1666"
            target="_blank"
            >
            <img
                src="https://cdn.photoswipe.com/photoswipe-demo-images/photos/3/img-200.jpg"
                alt=""
            />
            </a>
        </div>
      );
}

const lightbox = new PhotoSwipeLightbox({
    gallery: '#my-gallery',
    children: 'a',
    pswpModule: () => import('https://unpkg.com/photoswipe'),
  });
  
  lightbox.init();