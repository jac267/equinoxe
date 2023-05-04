function Services() {
  return (
    <div>
      <OurTeamBanniere />
      <ServicesOfferts />
      <EquipementOfferts />
      <AffaireAvecNous />
    </div>
  );
}

function OurTeamBanniere() {
  return (
    <div id="OurTeam-banniere">
      <div id="filtre">
        <div id="info" class="flexColumn">
          <h2>Services</h2>
          <p>
            Notre équipe expérimentée pourra vous venir en aide <br></br>pour
            tous vos projets de petite ou grande envergure
          </p>
        </div>
      </div>
    </div>
  );
}
function ServicesOfferts() {
  return (
    <div id="ServicesOfferts">
      <div id="ServicesOfferts-info" class="flexColumn">
        <div id="excavation-genie" class="flexRow">
          <div>
            <h3>Excavation et transport de contaminé</h3>
            <p>
              Nos services d'excavation incluent l'excavation de tranchées, le
              drainage, les bassins de rétention, le remblayage et l'excavation
              de bâtiments résidentiels et commerciaux.
            </p>
          </div>
          <div>
            <h3>Génie civil et voirie</h3>
            <p>
              Notre équipement performant et nos années d’expérience dans le
              domaine nous permettent de réaliser des travaux en tous genres :
            </p>
            <ul>
              <li>Égouts</li>
              <li>Aqueducs</li>
              <li>Aménagement et réfection de stationnements</li>
              <li>Aménagement et réfection de ponceaux</li>
              <li>Aménagement et réfection de routes et chemins publics</li>
            </ul>
          </div>
        </div>

        <div class="flexRow" id="location-projet">
          <div>
            <h3>Location de machines lourdes</h3>
            <p>
              Equinoxe JMP dispose d’une vaste flotte de camions, machineries
              lourdes et outils spécialisés. Que ce soit pour profiter de nos
              équipements de pointe avec notre service de location à l’heure ou
              pour demander l’expertise d’un de nos opérateurs qualifiés, vous
              pouvez compter sur nous.
            </p>
          </div>
          <div>
            <h3>Gestion de projet</h3>
            <p>
              En tant que gestionnaire de projet, notre rôle principal est de
              suivre l’évolution de votre projet en respectant les calendriers
              et les budgets préparés et soumis. Nos responsabilités incluent
              également la négociation des contrats auprès des professionnels du
              domaine (fournisseurs, sous-traitants, architectes, ingénieurs,
              etc.) Finalement, nous assurons un contrôle de la qualité,
              rédigeons différents rapports, achetons les matériaux nécessaires,
              embauchons le personnel et supervisons le travail des
              sous-traitants.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function EquipementOfferts() {
  return (
    <div id="equipement-offerts-section">
      <div id="equipement-offerts" class="flexRow">
        <div id="equipement-offerts-list">
          <h2>Notre équipement</h2>
          <ul>
            <li>Pelles mécaniques de 14 à 50 tonnes</li>
            <li>Mini-pelle</li>
            <li>Marteaux</li>
            <li>Chargeurs sur roues</li>
            <li>Béliers</li>
            <li>Rouleaux</li>
            <li>Camions 12 roues</li>
            <li>Semi-remorques</li>
            <li>Hors-route</li>
          </ul>
        </div>

        <div id="equipement-offerts-visuel" class="flexColumn">
          <div class="flexRow">
            <img src="../public/images/pelle kubota Gilbert - Copie.jpg"></img>
            <img src="../public/images/69194333177__63F6DDDB-121B-4344-A745-C87ECE95A2A2.jpg"></img>
            <img
              id="train-image"
              src="../public/images/70005550394__64e8a8c9-731a-4388-9413-52804b770531-1-edited-2.jpg"
            ></img>
          </div>
          <div class="flexRow">
            <img src="../public/images/D5820489-0FA7-4960-A257-C6DED964E30F.jpg"></img>
            <img src="../public/images/Pelle Hitachi ZX350.jpg"></img>
            <img src="../public/images/Pelle Caterpillar 349F.jpg"></img>
          </div>
        </div>
      </div>
    </div>
  );
}

function AffaireAvecNous() {
  return (
    <div id="affaire-avec-nous-box">
      <div id="affaire-avec-nous-content" class="flexColumn">
        <div class="flexColumn">
          <h2>Faites-affaire avec nous dès maintenant</h2>
          <a href="mailto:info@equinoxejmp.com">Contactez-nous</a>
        </div>
      </div>
    </div>
  );
}
