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
    <div className="section" id="confiez-nous-vos-projets">
      <div id="filtre-confiez-nous-vos-projets">
        <div>
          <h1>UNE ENTREPRISE FAMILIALE<br></br> DEPUIS 1974</h1>
        </div>
      </div>
    </div>
  );
}

function HomeVotreEntrepreneurGeneral() {
  return (
    <div className="section" id="votre-entrepreneur-general">
      <div id="votre-entrepreneur-generale-content">
        <div className="flexColumn">
          <h1 className="section-title">
            Notre histoire, une histoire de famille
          </h1>
          <p>
            Au tout début, Construction Bouladier fondé par M. Michel Bouladier, concentrait ses activités dans la location de machinerie lourde spécialisé en génie civil.  C’est en 2005 que Julie et Pascal, fille et fils de Michel, se joignent à Michel et fondent EQUINOXE JMP.  L’entreprise devient alors Entrepreneur général spécialisé en égouts et aqueducs.  Equinoxe JMP compte maintenant près de 20 années d’expérience en exécution et gestion de travaux de génie civil et excavation.  Avec les années plusieurs ressources clés se sont joint à l’équipe et c’est maintenant plus de 35 employés qui partagent leurs connaissances au service de sa clientèle.
          </p>
          <br></br>
          <p>
            Localisée à Gatineau, nos équipes se déplacent dans les régions d’Ottawa et de l’Outaouais afin de répondre aux besoins de notre clientèle résidentielle, commerciale, institutionnelle et municipale. Vous avez des projets d’excavation, d’installation d’égouts ou d’aqueducs? Nous vous offrons notre expertise, notre savoir-faire, nos équipements de pointe et notre passion pour le métier.
          </p>
          <br></br>

          <p>
            Faites-nous part de vos besoins et de vos projets en nous contactant par téléphone ou par courriel afin de profiter d’une estimation gratuite !
          </p>
        </div>
        <br></br>
        <div className="flexColumn">
          <h1 className="section-title">
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
        <div className="flexRow ButtonExplorerDiv">
          <HomeButtonExplorer
            title="Projets&nbsp;en&nbsp;tout&nbsp;genre"
            text="Bénéficiez de nos gestionnaires de projets pour tous vos travaux."
            buttonText="Notre&nbsp;expertise"
            href="../public/services.html"
          />
          <HomeButtonExplorer
            title="Transport&nbsp;et&nbsp;location"
            text="Nous mettons à votre disposition une gamme de machineries&nbsp;lourdes."
            buttonText="Nos&nbsp;solutions"
            href="../public/services.html"
          />
          <HomeButtonExplorer
            title="Estimation&nbsp;gratuite"
            text="Notre équipe peut vous aider avec tous vos projets."
            buttonText="Contactez&nbsp;nous"
            href="mailto:info@equinoxejmp.com"
          />
        </div>
      </div>
    </div>
  );
}

function HomeButtonExplorer(props) {
  return (
    <div className="ButtonExplorer">
      <h2>{props.title}</h2>
      <p>{props.text}</p>

      <a href={props.href}>{props.buttonText}</a>
    </div>
  );
}

function HomeNosServices1() {
  return (
    <div id="home-nos-services1" className="flexColumn">
      <h1 className="section-title">Nos&nbsp;services</h1>
      <div>
        <div>
          <div
            id="home-nos-services1-image1"
            className="home-nos-services1-images"
          ></div>
          <div>
            <div
              id="home-nos-services1-image2"
              className="home-nos-services1-images"
            ></div>
            <div
              id="home-nos-services1-image3"
              className="home-nos-services1-images"
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
      <div id="home-nos-services2" className="flexRow">
        <div className="flexColumn" id="home-nos-services2-content">
          <h2>Votre partenaire de choix</h2>
          <p>
            Chez Equinoxe JMP, nous sommes d’avis qu’un entrepreneur général
            doit être beaucoup plus qu’un simple fournisseur de services. Il
            doit selon nous constituer un partenaire de premier plan afin
            d’offrir des solutions personnalisées répondant parfaitement aux
            besoins du client.
          </p>
          <h3>Choisir Equinoxe JMP, c’est opter pour:</h3>
          <div id="home-nos-services2-ul-contaner" className="flexRow">
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
          <p className="Smallerpxfont">
            Contactez-nous sans attendre pour avoir plus d’information sur nos
            services. De plus, notre expertise et notre vaste réseau de contacts
            nous permettent de réagir rapidement afin de trouver des solutions
            économiques et avantageuses lors des défis rencontrés.
          </p>
        </div>
        <div
          id="home-nos-services2-image1"
          className="home-nos-services2-images"
        ></div>
      </div>
    </div>
  );
}

function AssociationsProfessionnelles() {
  return (
    <div id="associations-professionnelles" className="flexColumn">
      <h2>Associations professionnelles</h2>
      <div className="logos-associations">
        <a href="https://www.ccq.org/" target="_blank">
        <img border="0" alt="CCQ" src="../public/images/logo_CCQ.png" height="80px"></img>
        </a>
        <a href="https://www.acq.org/" target="_blank">
        <img border="0" alt="ACQ" src="../public/images/logo_ACQ.png" height="90px"></img>
        </a>
        <a href="https://amp.quebec/accueil/" target="_blank">
        <img border="0" alt="AMP" src="../public/images/logo_AMP.png" height="60px"></img>
        </a> 
        <a href="https://www.pes.rbq.gouv.qc.ca/RegistreLicences/Recherche/Resultats/FicheDetenteur?mode=Entreprise&crit=r1TSc6INGEWKtcUK6jcX9%2FEByYB22EJQyiTukjrpiNiBdLFBdmxsUQD5hDhRnpniSWRgQPOq4Oq7AYd4UqvduXNoxS7GrtZarAE5%2FQv2Tj9k9EtXsKZODcycaRS2vCDNPQ6XfEMFITtraZrvf%2BgSWW7nmJkxFUO61%2BJpjNieowQzU4H6R2eXippcr2lPy5R1B4K2sdXI%2FpUAlPwqMYYQdpz3BOccyiJsKBVvKyrAqDrM7jiv3x%2BguYjgtaophGWXvjgFguv9VR1DUaL7rNDDMB0yjZaXigmSnxFtCNE7NOyEqwrlX0R9qXButtIQJOIqPihCvlJkhJ%2FJ%2BGTpgJLmK5BAxMmMniIOk%2BwSCbjfHkWg0hZU9DNT2W0XoKFPdEEO%2Fes3%2BmGBNG3fX7DBvuMkd%2FGLRJoYDIL%2FPdTuD48scB32LYWT9tzpXxAxp76AHpmeVwmSkcH7fwxyrjaYpDL4xXWo5rKm8X0shs85fxIlgsaloSrdYlcSTDiQBkdCloa%2Bu7NXdWEkodjgeSUFPwOxTO7lTeLIy%2FlXcWc7CfMU%2FM9LezKDo0bTMoHv505lRGcJoVnS4FGW8duNSh3wKeVZNB%2FdmL512KweHA%2BhfD44PyASQYI025n9MPgFMkmtzpepKWHrNUAZPb9vrbgTpXspAHKvqIrL7zRAuHK6UqnJfwFgK2S1nxYhmyv6n6PuzkVh&ent=hNTbIF1suhF5H3ci0z3P3w%3D%3D" target="_blank">
        <br></br>
        <img border="0" alt="RBQ" src="../public/images/logo_RBQ.png" height="50px"></img>
        <p>Licence RBQ: #83193425‑10</p>
        </a>
      </div>
    </div>
  );
}
