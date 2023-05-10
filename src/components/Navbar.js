function NavBar() {
  return (
    <div id="nav-bar-body">
      <img src="../public/images/galerie3.jpg"></img>
      <div id="nav-bar" class="flexRow">
        <a id="logo">
          <div></div>
        </a>
        <div id="contact">
          <div id="telephone">819-669-7500</div>
          <div id="email">info@equinoxejmp.com</div>
        </div>

        <div id="navigation-button">
          <div className="navigation-buttons flexRow">
            <a
              id="acceuil"
              className="text-align-left"
              href="../public/index.html"
            >
              ACCEUIL
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
              RÉALISATION
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
          <a href="#">
            <li>Home</li>
          </a>
          <a href="#">
            <li>About</li>
          </a>
          <a href="#">
            <li>Info</li>
          </a>
          <a href="#">
            <li>Contact</li>
          </a>
        </ul>
      </div>
    </div>
  );
}
