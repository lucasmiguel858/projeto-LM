function toggleMode() {
  console.log("toggleMode disparou")
  const html = document.documentElement
  html.classList.toggle("light")

  const img = document.querySelector("#profile img")

  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/assets/avatarlucas.png")
  } else {
    img.setAttribute("src", "./assets/assets/lucas.png")
  }
}
