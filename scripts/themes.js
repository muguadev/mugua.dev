function hasLight() {
  return document.body.classList.contains("light");
}

function hasDyslexic() {
  return document.body.classList.contains("dyslexic");
}

function toggleLight(mode) {
  const button = document.querySelector(".switch");
  if (mode === "on") {
    button.setAttribute("title", "Cambiar a tema oscuro")
    document.body.classList.add("light");
  } else {
    button.setAttribute("title", "Cambiar a tema claro");
    document.body.classList.remove("light");
  }
  setCookie("light", mode);
}

function themeSwitch(target) {
  toggleLight(hasLight() ? "off" : "on");
}

function toggleDyslexic(mode) {
  const button = document.querySelector(".font")
  if (mode === "on") {
    document.body.classList.add("dyslexic");
    button.setAttribute("title", "Usar fuente por defecto");
  } else {
    document.body.classList.remove("dyslexic");
    button.setAttribute("title", "Usar fuente para disléxicos");
  }
  setCookie("dyslexic", mode);
}

function dyslexicSwitch() {
  toggleDyslexic(hasDyslexic() ? "off" : "on");
}

function applyTheme() {
  console.log("Initializing web site theme");
  toggleDyslexic(getCookie("dyslexic") || "off");
  toggleLight(getCookie("light") || "off");
}