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
    <div id="our-team-presentation">
      <h2 class="section-title">Notre Équipe</h2>
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
  );
}

function OrganisationAffilier() {
  return (
    <div id="organisationaffilier" class="flexRow">
      <img
        id="organisation-CCQ-img"
        src="../public/images/CCQ-Hor-RGB.png"
      ></img>
      <div id="organisation-regie_du_batiment-div" class="flexColumn">
        <img src="../public/images/Logo_officiel_de_la_Régie_du_bâtiment_du_Québec.png"></img>
        <strong>Licence&nbsp;RBQ:&nbsp;#83193425&#8209;10</strong>
      </div>
      <img
        id="organisation-WSIB-img"
        src="../public/images/WSIB_logo.png"
      ></img>
      <img
        id="organisation-CNESST-img"
        src="../public/images/Logo_CNESST.png"
      ></img>
    </div>
  );
}
