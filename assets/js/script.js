function toggleMode() {
  console.log("Trocando o tema...")

  const html = document.documentElement
  html.classList.toggle("dark")

  const img = document.querySelector(".profile img")
  if (html.classList.contains("dark")) {
    return img.setAttribute("src", "./assets/img/avatar.png")
  } else {
    return img.setAttribute("src", "./assets/img/avatar-light.png")
  }
}
