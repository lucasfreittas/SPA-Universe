
const links = {
    "/index.html": "/home.html",
    "/home": "/home.html",
    "/universe": "/universe.html",
    "/explorer": "/explorer.html",
    "/idex": "/home.html"
}

window.getLink = () => {
    event.preventDefault()

    window.history.pushState({}, "", event.target.href)
    
    changeLink()
}

window.changeLink = () => {
    const { pathname } = window.location
    const routes = links[pathname]
    

    
    fetch(routes)
    .then(page => page.text())
    .then(html => {
        document.querySelector('#app').innerHTML = html
    })

    console.log(routes)
  
}

window.home = () => {
    window.history.pushState({}, "", links["/home.html"])
    changeLink()
    
}

window.universe = () => {

    window.history.pushState({}, "", links["/universe.html"])
    changeLink()
    
}

window.home()








