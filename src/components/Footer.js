function Footer() {
  return (
    <div id="footer" className="flexRow">
      <div id="footer-info1" className="flexRow">
        <p id="footer-addresse">
          <strong>{loadText(data["Footer"]["contenue"]["strong1"])}</strong>
          {loadText(data["Footer"]["contenue"]["text1"])}
        </p>
        <p id="footer-telephone-couriel">
          <strong>{loadText(data["Footer"]["contenue"]["strong2"])}</strong>{" "}
          {loadText(data["Footer"]["contenue"]["text2"])}
          <strong>{loadText(data["Footer"]["contenue"]["strong3"])}</strong>
          {loadText(data["Footer"]["contenue"]["text3"])}
          <strong>{loadText(data["Footer"]["contenue"]["strong4"])}</strong>
          {loadText(data["Footer"]["contenue"]["text4"])}
        </p>
      </div>
      <div id="footer-info2" className="flexColumn">
        <div id="footer-zone-de-services" className="flexRow">
          <p>
            <strong id="zoter-zone-de-services-title">
              {loadText(data["Footer"]["contenue"]["strong5"])}
            </strong>
          </p>
          <p>{loadText(data["Footer"]["contenue"]["text5"])}</p>
        </div>
        <div id="footer-heure-ouverture" className="flexRow">
          <p>
            <strong>{loadText(data["Footer"]["contenue"]["strong1"])}</strong>
          </p>
          <p>{loadText(data["Footer"]["contenue"]["text6"])}</p>
        </div>
      </div>

      <div id="footer-button-and-credit">
        <div id="footer-button" className="flexRow">
          <a
            id="facebook-anchor"
            href="https://www.facebook.com/equinoxejmp"
            className="social-media-button"
            target="_blank"
          >
            <i className="fa fa-facebook" aria-hidden="true"></i>
          </a>
          <a href="mailto:info@equinoxejmp.com" id="email-anchor">
            <i className="fa fa-envelope" aria-hidden="true"></i>
          </a>
        </div>
        <div id="footer-credit">
          {loadText(data["Footer"]["contenue"]["text7"])}
        </div>
      </div>
    </div>
  );
}
