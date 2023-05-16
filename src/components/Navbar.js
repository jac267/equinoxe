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

        <div id="nav-button-and-lang">
          <div id="lang-toggle">
            <label className="toggle">
              {isChecked()}
              <span className="slider"></span>
              <span className="labels" data-on="FR" data-off="EN"></span>
            </label>
          </div>
          <div id="navigation-button">
            <div className="navigation-buttons flexRow">
              <a
                id="acceuil"
                className="text-align-left"
                href="../public/index.html"
              >
                {loadText(data["Navbar"]["contenue"]["anchor1"])}
              </a>
              <a
                id="notre-equipe"
                className="text-align-right"
                href="../public/notre-equipe.html"
              >
                {loadText(data["Navbar"]["contenue"]["anchor2"])}
              </a>
            </div>
            <div className="navigation-buttons flexRow">
              <a
                id="services"
                className="text-align-left"
                href="../public/services.html"
              >
                {loadText(data["Navbar"]["contenue"]["anchor3"])}
              </a>
              <a
                id="realisation"
                className="text-align-right"
                href="../public/realisations.html"
              >
                {loadText(data["Navbar"]["contenue"]["anchor4"])}
              </a>
            </div>
          </div>
        </div>
      </div>
      <div id="menuToggle">
        <input type="checkbox"/>
        <span></span>
        <span></span>
        <span></span>

        <ul id="menu">
          <a href="../public/index.html">
            <li>{loadText(data["Navbar"]["contenue"]["anchor1"])}</li>
          </a>
          <a href="../public/notre-equipe.html">
            <li>{loadText(data["Navbar"]["contenue"]["anchor2"])}</li>
          </a>
          <a href="../public/services.html">
            <li>{loadText(data["Navbar"]["contenue"]["anchor3"])}</li>
          </a>
          <a href="../public/realisations.html">
            <li>{loadText(data["Navbar"]["contenue"]["anchor4"])}</li>
          </a>
        </ul>
      </div>
    </div>
  );
}
