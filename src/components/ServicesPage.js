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
        <div id="info" className="flexColumn">
          <h2>{loadText(data["services"]["title"])}</h2>
          <p>{loadText(data["services"]["text1"])}</p>
        </div>
      </div>
    </div>
  );
}
function ServicesOfferts() {
  return (
    <div id="ServicesOfferts">
      <div id="ServicesOfferts-info" className="flexColumn">
        <div id="excavation-genie" className="flexRow">
          <div>
            <h3>
              {loadText(
                data["services"]["section1"]["contenue"]["sous-titre1"]
              )}
            </h3>
            <p>{loadText(data["services"]["section1"]["contenue"]["text1"])}</p>
          </div>
          <div>
            <h3>
              {loadText(
                data["services"]["section1"]["contenue"]["sous-titre2"]
              )}
            </h3>
            <p>{loadText(data["services"]["section1"]["contenue"]["text2"])}</p>
          </div>
          <div>
            <h3>
              {loadText(
                data["services"]["section1"]["contenue"]["sous-titre3"]
              )}
            </h3>
            <p>{loadText(data["services"]["section1"]["contenue"]["text3"])}</p>
            <ul>
              <li>
                {loadText(data["services"]["section1"]["contenue"]["list1"][0])}
              </li>
              <li>
                {loadText(data["services"]["section1"]["contenue"]["list1"][1])}
              </li>
              <li>
                {loadText(data["services"]["section1"]["contenue"]["list1"][2])}
              </li>
              <li>
                {loadText(data["services"]["section1"]["contenue"]["list1"][3])}
              </li>
              <li>
                {loadText(data["services"]["section1"]["contenue"]["list1"][4])}
              </li>
            </ul>
          </div>
        </div>

        <div className="flexRow" id="location-projet">
          <div>
            <h3>
              {loadText(
                data["services"]["section1"]["contenue"]["sous-titre4"]
              )}
            </h3>
            <p>{loadText(data["services"]["section1"]["contenue"]["text4"])}</p>
          </div>
          <div>
            <h3>
              {loadText(
                data["services"]["section1"]["contenue"]["sous-titre5"]
              )}
            </h3>
            <p>{loadText(data["services"]["section1"]["contenue"]["text5"])}</p>
            <p>{loadText(data["services"]["section1"]["contenue"]["text6"])}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function EquipementOfferts() {
  return (
    <div id="equipement-offerts-section">
      <div id="equipement-offerts" className="flexRow">
        <div id="equipement-offerts-list">
          <h2>{loadText(data["services"]["section2"]["title"])}</h2>
          <ul>
            <li>
              {loadText(data["services"]["section2"]["contenue"]["list1"][0])}
            </li>
            <li>
              {loadText(data["services"]["section2"]["contenue"]["list1"][1])}
            </li>
            <li>
              {loadText(data["services"]["section2"]["contenue"]["list1"][2])}
            </li>
            <li>
              {loadText(data["services"]["section2"]["contenue"]["list1"][3])}
            </li>
            <li>
              {loadText(data["services"]["section2"]["contenue"]["list1"][4])}
            </li>
            <li>
              {loadText(data["services"]["section2"]["contenue"]["list1"][5])}
            </li>
            <li>
              {loadText(data["services"]["section2"]["contenue"]["list1"][6])}
            </li>
            <li>
              {loadText(data["services"]["section2"]["contenue"]["list1"][7])}
            </li>
            <li>
              {loadText(data["services"]["section2"]["contenue"]["list1"][8])}
            </li>
            <li>
              {loadText(data["services"]["section2"]["contenue"]["list1"][9])}
            </li>
          </ul>
        </div>

        <div id="equipement-offerts-visuel" className="flexColumn">
          <div className="flexRow">
            <img src="../public/images/pelle kubota Gilbert - Copie.jpg"></img>
            <img src="../public/images/69194333177__63F6DDDB-121B-4344-A745-C87ECE95A2A2.jpg"></img>
            <img
              src="../public/images/MOXY_MT41.jpg"
            ></img>
          </div>
          <div className="flexRow">
            <img src="../public/images/Belier.jpg"></img>
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
      <div id="affaire-avec-nous-content" className="flexColumn">
        <div className="flexColumn">
          <h2>{loadText(data["services"]["section3"]["title"])}</h2>
          <a href="mailto:info@equinoxejmp.com">
            {loadText(data["services"]["section3"]["contenue"]["boutton1"])}
          </a>
        </div>
      </div>
    </div>
  );
}
