function OurTeam() {
  return (
    <div>
      <div id="OurTeam-banniere"></div>
      <OurTeamPresentation />
      <OrganisationAffilier />
    </div>
  );
}

function OurTeamPresentation() {
  return (
    <div id="our-team-presentation-box">
      <div id="our-team-presentation">
        <h2 class="section-title">Notre&#8209;Équipe</h2>
        <p>
          Equinoxe JMP et son équipe spécialisée en travaux de génie civil et de
          voirie relèvent le plus grand des défis, celui de satisfaire pleinement
          ses clients. Grâce à la force de notre expertise, notre ingéniosité et
          notre savoir-faire, nous vous proposons une réalisation professionnelle
          du travail, incluant l’analyse préparatoire de tous les scénarios
          possibles, et ce, dans le respect absolu des budgets et des échéanciers.
          Nos équipes multidisciplinaires sont compétentes, dévouées et
          qualifiées. Elles sauront déployer tous les efforts pour assurer le
          succès de vos projets.
        </p>
        <p>
          Nous suivons les normes reconnues par le Bureau de normalisation du
          Québec (
          <a class="linked-text" href="https://www.bnq.qc.ca/fr/">
            BNQ
          </a>
          ) et le Cahier des charges et devis généraux (
          <a
            class="linked-text"
            href="http://www3.publicationsduquebec.gouv.qc.ca/produits/ouvrage_routier/documents/document9.fr.html"
          >
            CCDG
          </a>
          ).
        </p>
      </div>
    </div>
  );
}

function OrganisationAffilier() {
  return (
    <div id="organisationaffilier" class="flexRow">
      <a href="https://www.ccq.org/" target="_blank">
        <img
        id="organisation-CCQ-img"
        src="../public/images/logo_CCQ.png"
        href="https://www.ccq.org/"></img>
      </a>
      <a href="https://www.pes.rbq.gouv.qc.ca/RegistreLicences/Recherche/Resultats/FicheDetenteur?mode=Entreprise&crit=r1TSc6INGEWKtcUK6jcX9%2FEByYB22EJQyiTukjrpiNiBdLFBdmxsUQD5hDhRnpniSWRgQPOq4Oq7AYd4UqvduXNoxS7GrtZarAE5%2FQv2Tj9k9EtXsKZODcycaRS2vCDNPQ6XfEMFITtraZrvf%2BgSWW7nmJkxFUO61%2BJpjNieowQzU4H6R2eXippcr2lPy5R1B4K2sdXI%2FpUAlPwqMYYQdpz3BOccyiJsKBVvKyrAqDrM7jiv3x%2BguYjgtaophGWXvjgFguv9VR1DUaL7rNDDMB0yjZaXigmSnxFtCNE7NOyEqwrlX0R9qXButtIQJOIqPihCvlJkhJ%2FJ%2BGTpgJLmK5BAxMmMniIOk%2BwSCbjfHkWg0hZU9DNT2W0XoKFPdEEO%2Fes3%2BmGBNG3fX7DBvuMkd%2FGLRJoYDIL%2FPdTuD48scB32LYWT9tzpXxAxp76AHpmeVwmSkcH7fwxyrjaYpDL4xXWo5rKm8X0shs85fxIlgsaloSrdYlcSTDiQBkdCloa%2Bu7NXdWEkodjgeSUFPwOxTO7lTeLIy%2FlXcWc7CfMU%2FM9LezKDo0bTMoHv505lRGcJoVnS4FGW8duNSh3wKeVZNB%2FdmL512KweHA%2BhfD44PyASQYI025n9MPgFMkmtzpepKWHrNUAZPb9vrbgTpXspAHKvqIrL7zRAuHK6UqnJfwFgK2S1nxYhmyv6n6PuzkVh&ent=hNTbIF1suhF5H3ci0z3P3w%3D%3D" target="_blank">
      <div id="organisation-regie_du_batiment-div" class="flexColumn">
        <img src="../public/images/logo_RBQ_noir.png"></img>
        <strong>Licence&nbsp;RBQ:&nbsp;#83193425&#8209;10</strong>
      </div>
      </a>
      <a href="https://www.wsib.ca/" target="_blank">
      <img
        id="organisation-WSIB-img"
        src="../public/images/logo_WSIB.png"
      ></img>
      </a>
      <a href="https://www.cnesst.gouv.qc.ca/" target="_blank">
      <img
        id="organisation-CNESST-img"
        src="../public/images/logo_CNESST.png"
      ></img>
      </a>
      <a href="https://amp.quebec/accueil/" target="_blank">
      <img
        id="organisation-AMP-img"
        src="../public/images/logo_AMP_noir.png"
      ></img>
      </a>
    </div>
  );
}
