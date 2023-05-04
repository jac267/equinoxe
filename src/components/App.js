//Le fichier app.js contiendra la logique principale de votre application React, y compris la définition de vos composants,
//la gestion des états, la récupération de données à partir d'une API, etc.
//Vous pouvez également y définir des routes pour votre application en utilisant une bibliothèque de routage telle que React Router.
function LinkedText(props) {
  return (
    <div class="linked-texte">
      <p>
        {props.text1}
        <a href={props.href}>{props.texta}</a>
        {props.text2}
      </p>
    </div>
  );
}
