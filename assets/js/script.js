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
const repositories = document.querySelector(".projects")

function getApiGitHub() {
  fetch("https://api.github.com/users/JulianoCesarM/repos").then(
    async (res) => {
      if (!res.ok) {
        throw new Error(res.status)
      }
      let data = await res.json()
      data.map((item) => {
        let project = document.createElement("div")
        project.setAttribute("class", "cards standard-card")

        project.innerHTML = `<div class="projects-card">
              <div class="card-prject-header">
                <p><ion-icon name="folder-outline"></ion-icon>
                <a href="${item.html_url}" target="_blank">${item.name}</a></p>
              </div>
              <div class="card-prject-description">
                <p>
                  ${item.description}
                </p>
              </div>
              <div class="card-prject-stats">
                  <div>
                    <ion-icon name="star-outline"></ion-icon>
                    <span>${item.stargazers_count}</span>
                  </div>
                  <div>
                    <ion-icon name="git-branch-outline"></ion-icon>
                    <span>${item.default_branch}</span>
                  </div>
                  <div>
                    <p>${item.language}</p>
                  </div>
              </div>
              </div>`

        repositories.appendChild(project)
      })
    }
  )
}
getApiGitHub()
