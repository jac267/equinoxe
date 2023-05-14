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
          <h1>{loadText(data["index"]["title"])}</h1>
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
            {loadText(data["index"]["section1"]["title"])}
          </h1>
          <p>{loadText(data["index"]["section1"]["contenue"]["text1"])}</p>
          <br></br>
          <p>{loadText(data["index"]["section1"]["contenue"]["text2"])}</p>
          <br></br>

          <p>{loadText(data["index"]["section1"]["contenue"]["text3"])}</p>
        </div>
        <div className="flexRow ButtonExplorerDiv">
          <HomeButtonExplorer
            title={loadText(
              data["index"]["section1"]["contenue"]["ButtonExplorer1"]["title"]
            )}
            text={loadText(
              data["index"]["section1"]["contenue"]["ButtonExplorer1"][
                "contenue"
              ]["text1"]
            )}
            buttonText={loadText(
              data["index"]["section1"]["contenue"]["ButtonExplorer1"][
                "contenue"
              ]["boutton1"]
            )}
            href="../public/services.html"
          />
          <HomeButtonExplorer
            title={loadText(
              data["index"]["section1"]["contenue"]["ButtonExplorer2"]["title"]
            )}
            text={loadText(
              data["index"]["section1"]["contenue"]["ButtonExplorer2"][
                "contenue"
              ]["text1"]
            )}
            buttonText={loadText(
              data["index"]["section1"]["contenue"]["ButtonExplorer2"][
                "contenue"
              ]["boutton1"]
            )}
            href="../public/services.html"
          />
          <HomeButtonExplorer
            title={loadText(
              data["index"]["section1"]["contenue"]["ButtonExplorer3"]["title"]
            )}
            text={loadText(
              data["index"]["section1"]["contenue"]["ButtonExplorer3"][
                "contenue"
              ]["text1"]
            )}
            buttonText={loadText(
              data["index"]["section1"]["contenue"]["ButtonExplorer3"][
                "contenue"
              ]["boutton1"]
            )}
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
      <h1 className="section-title">
        {loadText(data["index"]["section2"]["title"])}
      </h1>
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
            <li>
              {loadText(data["index"]["section2"]["contenue"]["list1"][0])}
            </li>
            <li>
              {loadText(data["index"]["section2"]["contenue"]["list1"][1])}
            </li>
            <li>
              {loadText(data["index"]["section2"]["contenue"]["list1"][2])}
            </li>
            <li>
              {loadText(data["index"]["section2"]["contenue"]["list1"][3])}
            </li>
            <li>
              {loadText(data["index"]["section2"]["contenue"]["list1"][4])}
            </li>
            <li>
              {loadText(data["index"]["section2"]["contenue"]["list1"][5])}
            </li>
            <li>
              {loadText(data["index"]["section2"]["contenue"]["list1"][6])}
            </li>
            <li>
              {loadText(data["index"]["section2"]["contenue"]["list1"][7])}
            </li>
            <li>
              {loadText(data["index"]["section2"]["contenue"]["list1"][8])}
            </li>
            <li>
              {loadText(data["index"]["section2"]["contenue"]["list1"][9])}
            </li>
            <li>
              {loadText(data["index"]["section2"]["contenue"]["list1"][10])}
            </li>
            <li>
              {loadText(data["index"]["section2"]["contenue"]["list1"][11])}
            </li>
            <li>
              {loadText(data["index"]["section2"]["contenue"]["list1"][12])}
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
          <h2>{loadText(data["index"]["section3"]["title"])}</h2>
          <p>{loadText(data["index"]["section3"]["contenue"]["text1"])}</p>
          <h3>
            {loadText(data["index"]["section3"]["contenue"]["sous-titre1"])}
          </h3>
          <div id="home-nos-services2-ul-contaner" className="flexRow">
            <ul>
              <li>
                {loadText(data["index"]["section3"]["contenue"]["list1"][0])}
              </li>

              <li>
                {loadText(data["index"]["section3"]["contenue"]["list1"][1])}
              </li>

              <li>
                {loadText(data["index"]["section3"]["contenue"]["list1"][2])}
              </li>

              <li>
                {loadText(data["index"]["section3"]["contenue"]["list1"][3])}
              </li>

              <li>
                {loadText(data["index"]["section3"]["contenue"]["list1"][4])}
              </li>
            </ul>
            <ul>
              <li>
                {loadText(data["index"]["section3"]["contenue"]["list2"][0])}
              </li>

              <li>
                {loadText(data["index"]["section3"]["contenue"]["list2"][1])}
              </li>

              <li>
                {loadText(data["index"]["section3"]["contenue"]["list2"][2])}
              </li>

              <li>
                {loadText(data["index"]["section3"]["contenue"]["list2"][3])}
              </li>

              <li>
                {loadText(data["index"]["section3"]["contenue"]["list2"][4])}
              </li>
            </ul>
          </div>
          <p className="Smallerpxfont">
            {loadText(data["index"]["section3"]["contenue"]["text2"])}
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
      <h2>{loadText(data["index"]["section4"]["title"])}</h2>
      <div className="logos-associations">
        <a href="https://www.ccq.org/" target="_blank">
          <img
            border="0"
            alt="CCQ"
            src="../public/images/logo_CCQ.png"
            height="80px"
          ></img>
        </a>
        <a href="https://www.acq.org/" target="_blank">
          <img
            border="0"
            alt="ACQ"
            src="../public/images/logo_ACQ.png"
            height="90px"
          ></img>
        </a>
        <a href="https://amp.quebec/accueil/" target="_blank">
          <img
            border="0"
            alt="AMP"
            src="../public/images/logo_AMP_gris.png"
            height="60px"
          ></img>
        </a>
        <a
          href="https://www.pes.rbq.gouv.qc.ca/RegistreLicences/Recherche/Resultats/FicheDetenteur?mode=Entreprise&crit=r1TSc6INGEWKtcUK6jcX9%2FEByYB22EJQyiTukjrpiNiBdLFBdmxsUQD5hDhRnpniSWRgQPOq4Oq7AYd4UqvduXNoxS7GrtZarAE5%2FQv2Tj9k9EtXsKZODcycaRS2vCDNPQ6XfEMFITtraZrvf%2BgSWW7nmJkxFUO61%2BJpjNieowQzU4H6R2eXippcr2lPy5R1B4K2sdXI%2FpUAlPwqMYYQdpz3BOccyiJsKBVvKyrAqDrM7jiv3x%2BguYjgtaophGWXvjgFguv9VR1DUaL7rNDDMB0yjZaXigmSnxFtCNE7NOyEqwrlX0R9qXButtIQJOIqPihCvlJkhJ%2FJ%2BGTpgJLmK5BAxMmMniIOk%2BwSCbjfHkWg0hZU9DNT2W0XoKFPdEEO%2Fes3%2BmGBNG3fX7DBvuMkd%2FGLRJoYDIL%2FPdTuD48scB32LYWT9tzpXxAxp76AHpmeVwmSkcH7fwxyrjaYpDL4xXWo5rKm8X0shs85fxIlgsaloSrdYlcSTDiQBkdCloa%2Bu7NXdWEkodjgeSUFPwOxTO7lTeLIy%2FlXcWc7CfMU%2FM9LezKDo0bTMoHv505lRGcJoVnS4FGW8duNSh3wKeVZNB%2FdmL512KweHA%2BhfD44PyASQYI025n9MPgFMkmtzpepKWHrNUAZPb9vrbgTpXspAHKvqIrL7zRAuHK6UqnJfwFgK2S1nxYhmyv6n6PuzkVh&ent=hNTbIF1suhF5H3ci0z3P3w%3D%3D"
          target="_blank"
        >
          <br></br>
          <img
            border="0"
            alt="RBQ"
            src="../public/images/logo_RBQ_blanc.png"
            height="50px"
          ></img>
          <p>Licence RBQ: #83193425‑10</p>
        </a>
      </div>
    </div>
  );
}
