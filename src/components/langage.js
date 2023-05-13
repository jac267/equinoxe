current_L = localStorage.getItem("language");
if (current_L == null) {
  current_L = navigator.language || navigator.userLanguage;
  localStorage.setItem("language", current_L);
}

if (current_L == "fr-FR" || current_L == "fr" || current_L.includes("fr")) {
  language = "Fr";
}
if (current_L == "en-EN" || current_L == "en" || current_L.includes("en")) {
  language = "En";
}

var data = _data[language];

function changeLanguage() {
  current_L = localStorage.getItem("language");

  if (current_L == "en-EN" || current_L == "en" || current_L.includes("en")) {
    localStorage.setItem("language", "fr-FR");
  }
  if (current_L == "fr-FR" || current_L == "fr" || current_L.includes("fr")) {
    localStorage.setItem("language", "en-EN");
  }
  window.location.reload();
}

function loadText(items) {
  let output = [];
  let index = 0;
  for (item in items) {
    output.push(items[index]);
    if (index + 1 != items.length) {
      output.push(React.createElement("br", null));
    }
    index += 1;
  }

  return output;
}
