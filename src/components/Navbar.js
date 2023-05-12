function NavBar() {
  return (
    <div id="nav-bar-body">
      <img src="../public/images/galerie3.jpg"></img>
      <div id="nav-bar" className="flexRow">
        <a id="logo">
          <div></div>
        </a>
        <div id="contact">
          <a id="telephone" href="Tel:819-669-7500">
            819-669-7500
          </a>
          <a id="email" href="mailto:info@equinoxejmp.com">
            info@equinoxejmp.com
          </a>
        </div>

        <div id="navigation-button">
          <div className="navigation-buttons flexRow">
            <a
              id="acceuil"
              className="text-align-left"
              href="../public/index.html"
            >
              ACCUEIL
            </a>
            <a
              id="notre-equipe"
              className="text-align-right"
              href="../public/notre-equipe.html"
            >
              NOTRE&nbsp;ÉQUIPE
            </a>
          </div>
          <div className="navigation-buttons flexRow">
            <a
              id="services"
              className="text-align-left"
              href="../public/services.html"
            >
              SERVICES
            </a>
            <a
              id="realisation"
              className="text-align-right"
              href="../public/realisations.html"
            >
              RÉALISATIONS
            </a>
          </div>
        </div>
      </div>
      <div id="menuToggle">
        <input type="checkbox" />
        <span></span>
        <span></span>
        <span></span>

        <ul id="menu">
          <a href="../public/index.html">
            <li>ACCUEIL</li>
          </a>
          <a href="../public/notre-equipe.html">
            <li>NOTRE&nbsp;ÉQUIPE</li>
          </a>
          <a href="../public/services.html">
            <li>SERVICES</li>
          </a>
          <a href="../public/realisations.html">
            <li>RÉALISATION</li>
          </a>
        </ul>
      </div>
    </div>
  );
}
