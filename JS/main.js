
const links = {
    "/": "/home/home.html",
    "/home": "/home/home.html",
    "/universe": "/universe/universe.html",
    "/explorer": "/explorer/explorer.html",
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
    .then(page => page.body())
    .then(html => {
        document.querySelector('#app').innerHTML = html
    })


    console.log(routes)
    
  
}





