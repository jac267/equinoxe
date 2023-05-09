function Home() {
  return (
    <div>
      <HomeConfiezNousVosProjets />
      <HomeVotreEntrepreneurGeneral />
      <HomeNosServices1 />
      <HomeNosServices2 />
      <AssociationsProfessionnelles />
    </div>
  );
}

function HomeConfiezNousVosProjets() {
  return (
    <div class="section" id="confiez-nous-vos-projets">
      <div id="filtre-confiez-nous-vos-projets">
        <div>
          <h1>Confiez-nous vos projets</h1>
          <p>
            Nos spécialistes en génie civil et travaux de voirie vous proposent
            <br></br>
            des solutions résidentielles commericales et institutionnelles
            adaptées à vos besoins
          </p>
          <button>Contactez-nous</button>
        </div>
      </div>
    </div>
  );
}

function HomeVotreEntrepreneurGeneral() {
  return (
    <div class="section" id="votre-entrepreneur-general">
      <div id="votre-entrepreneur-generale-content">
        <div class="flexColumn">
          <h1 class="section-title">
            Equinoxe JMP, votre entrepreneur général en Outaouais
          </h1>
          <p>
            Equinoxe JMP vous offre ses services pour vos travaux de génie civil
            et d’excavation à Gatineau. Notre équipe d’expérience peut répondre
            à tous vos besoins résidentiels, commerciaux et institutionnels et
            met tout en œuvre pour effectuer vos travaux efficacement et
            rapidement. Notre souci du détail et notre expertise nous permettent
            de vous garantir un résultat impeccable.
          </p>
        </div>

        <div class="flexRow ButtonExplorerDiv">
          <HomeButtonExplorer
            title="Projets&nbsp;en&nbsp;tout&nbsp;genre"
            text="Bénéficiez de nos gestionnaires de projets pour tous vos travaux."
            buttonText="Notre expertise"
            href=""
          />
          <HomeButtonExplorer
            title="Transport&nbsp;et&nbsp;location"
            text="Nous mettons à votre disposition une gamme de machineries lourdes."
            buttonText="Nos solutions"
            href=""
          />
          <HomeButtonExplorer
            title="Estimation&nbsp;gratuite"
            text="Notre équipe peut vous aider avec tous vos projets."
            buttonText="Notre expertise"
            href=""
          />
        </div>
      </div>
    </div>
  );
}

function HomeButtonExplorer(props) {
  return (
    <div class="ButtonExplorer">
      <h2>{props.title}</h2>
      <p>{props.text}</p>

      <button href={props.href}>{props.buttonText}</button>
    </div>
  );
}

function HomeNosServices1() {
  return (
    <div id="home-nos-services1" class="flexColumn">
      <h1 class="section-title">Nos services</h1>
      <div>
        <div>
          <div
            id="home-nos-services1-image1"
            class="home-nos-services1-images"
          ></div>
          <div>
            <div
              id="home-nos-services1-image2"
              class="home-nos-services1-images"
            ></div>
            <div
              id="home-nos-services1-image3"
              class="home-nos-services1-images"
            ></div>
          </div>
        </div>
        <div>
          <ul>
            <li>Égouts et aquducs</li>
            <li>Travaux de voirie</li>
            <li>Excavation de masse</li>
            <li>Mur de soutènement</li>
            <li>Excavation en tout genre</li>
            <li>Services municipaux</li>
            <li>Projets de génie civil</li>
            <li>Transport de matériaux granulaires</li>
            <li>Transport de contaminés</li>
            <li>Location de camions</li>
            <li>Location de machineries lourdes</li>
            <li>Gestion de projets</li>
            <li>
              Carrière et sablière pour tous les matériaux granulaires certifiés
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

function HomeNosServices2() {
  return (
    <div id="home-big-nos-services2">
      <div id="home-nos-services2" class="flexRow">
        <div class="flexColumn" id="home-nos-services2-content">
          <h2>Votre partenaire de choix</h2>
          <p>
            Chez Equinoxe JMP, nous sommes d’avis qu’un entrepreneur général
            doit être beaucoup plus qu’un simple fournisseur de services. Il
            doit selon nous constituer un partenaire de premier plan afin
            d’offrir des solutions personnalisées répondant parfaitement aux
            besoins du client.
          </p>
          <h3>Choisir Equinoxe JMP, c’est opter pour :</h3>
          <div class="flexRow">
            <ul>
              <li>un partenariat d’affaires</li>

              <li>une équipe dynamique et multidisciplinaire</li>

              <li>un contremaître expérimenté sur chaque chantier</li>

              <li>une main-d’œuvre compétente</li>

              <li>une relation solide et chaleureuse</li>
            </ul>
            <ul>
              <li>un suivi serré des budgets et des échéanciers</li>

              <li>une planification efficace et rigoureuse</li>

              <li>une expertise reconnue</li>

              <li>une capacité d’adaptation aux différents défis</li>

              <li>
                une entreprise à l’affût des dernières tendances de l’industrie
              </li>
            </ul>
          </div>
          <p class="Smallerpxfont">
            Contactez-nous sans attendre pour avoir plus d’information sur nos
            services. De plus, notre expertise et notre vaste réseau de contacts
            nous permettent de réagir rapidement afin de trouver des solutions
            économiques et avantageuses lors des défis rencontrés.
          </p>
        </div>
        <div id="home-nos-services2-image1" class="home-nos-services2-images">
          {" "}
        </div>
      </div>
    </div>
  );
}

function AssociationsProfessionnelles() {
  return (
    <div id="associations-professionnelles" class="flexColumn">
      <h2>Associations professionnelles</h2>
      <p>
        Licence de la Régie du bâtiment du Québec (
        <a class="linked-text" href="https://www.rbq.gouv.qc.ca/accueil/">
          RBQ
        </a>
        )
      </p>
      <p>
        Association de la construction du Québec (
        <a class="linked-text" href="https://www.acq.org/">
          ACQ
        </a>
        )
      </p>
      <p>
        Commission de la construction du Québec (
        <a class="linked-text" href="https://www.ccq.org/fr-CA">
          CCQ
        </a>
        )
      </p>
    </div>
  );
}
