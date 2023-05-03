function Footer() {
  return (
    <div id="footer" class="flexRow">
      <div id="footer-info1" class="flexRow">
        <p id="footer-addresse">
          <strong>
            Equinoxe JMP<br></br>
          </strong>
          1651, rue Routhier
          <br></br>
          Gatineau,&nbsp;Québec&nbsp;J8R 3Y6
        </p>
        <p id="footer-telephone-couriel">
          <strong>Téléphone :</strong> 819-669-7500<br></br>
          <strong>Télécopieur&nbsp;:</strong>&nbsp;819-669-4866<br></br>
          <strong>Courriel:</strong>&nbsp;info@equinoxejmp.com
        </p>
      </div>
      <div id="footer-info2" class="flexColumn">
        <div id="footer-zone-de-services" class="flexRow">
          <p>
            <strong id="zoter-zone-de-services-title">Zone de service</strong>
          </p>
          <p>Outaouais, Ottawa, Gatineau</p>
        </div>
        <div id="footer-heure-ouverture" class="flexRow">
          <p>
            <strong>Heures d’ouverture</strong>
          </p>
          <p>
            Lundi – Jeudi: 08:00 – 17:30<br></br>Vendredi: 08:00 – 12:00
          </p>
        </div>
      </div>

      <div id="footer-button" class="flexRow">
        <a
          id="facebook-anchor"
          href="https://www.facebook.com/equinoxejmp"
          class="social-media-button"
        >
          <i class="fa fa-facebook" aria-hidden="true"></i>
        </a>
        <a href="mailto:info@equinoxejmp.com" id="email-anchor">
          <i class="fa fa-envelope" aria-hidden="true"></i>
        </a>
      </div>
    </div>
  );
}
