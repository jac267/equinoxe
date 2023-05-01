function Home() {
  return (
    <div>
      <HomeConfiezNousVosProjets />
      <HomeVotreEntrepreneurGeneral />
      <HomeNosServices1 />
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
            title="Projets en tout genre"
            text="Bénéficiez de nos gestionnaires de projets pour tous vos travaux."
            buttonText="Notre expertise"
            href=""
          />
          <HomeButtonExplorer
            title="Transport et location"
            text="Nous mettons à votre disposition une gamme de machineries lourdes."
            buttonText="Nos solutions"
            href=""
          />
          <HomeButtonExplorer
            title="Estimation gratuite"
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
