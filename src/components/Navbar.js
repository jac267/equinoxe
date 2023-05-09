function NavBar() {
  return (
    <div id="nav-bar">
      <img src="../public/images/galerie3.jpg"></img>
      <div className="flexRow">
        <a id="logo">
          <div></div>
        </a>
        <div id="contact">
          <div id="telephone">819-669-7500</div>
          <div id="email">info@equinoxejmp.com</div>
        </div>

        <div id="navigation-button">
          <div class="navigation-buttons flexRow">
            <a id="acceuil" class="text-align-left" href="../public/index.html">
              ACCEUIL
            </a>
            <a
              id="notre-equipe"
              class="text-align-right"
              href="../public/notre-equipe.html"
            >
              NOTRE&nbsp;ÉQUIPE
            </a>
          </div>
          <div class="navigation-buttons flexRow">
            <a
              id="services"
              class="text-align-left"
              href="../public/services.html"
            >
              SERVICES
            </a>
            <a
              id="realisation"
              class="text-align-right"
              href="../public/realisations.html"
            >
              RÉALISATION
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
