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
const repositories = document.querySelector(".div-cards")

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

        project.innerHTML = `
              <div class="card-prject-header">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-folder"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
                <p><a href="${item.html_url}" target="_blank">${item.name}</a></p>
              </div>
              <div class="card-prject-description">
                <p>
                  ${item.description}
                </p>
              </div>
              <div class="card-prject-stats">
                <div class="card-prject-sub-stats">
                  <div style="display: flex; gap: 1rem">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-star"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                    <p>${item.stargazers_count}</p>
                  </div>
                  <div class="card-prject-sub-stats">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-git-branch"><line x1="6" y1="3" x2="6" y2="15"></line><circle cx="18" cy="6" r="3"></circle><circle cx="6" cy="18" r="3"></circle><path d="M18 9a9 9 0 0 1-9 9"></path></svg>
                    
                    <p>${item.default_branch}</p>
                  </div>
                </div>
                <div class="card-prject-sub-stats">
                  <p>${item.language}</p>
                  
                </div>
              </div>`

        repositories.appendChild(project)
      })
    }
  )
}
getApiGitHub()
