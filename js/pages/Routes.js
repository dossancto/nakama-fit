function getStartupPage(pages) {
  for (let i in pages) {
    const page = pages[i]

    const route = page.attributes.getNamedItem("route").textContent.toLowerCase();

    if (route == "index") return page;
  }
  return null
}

function getAllPages() {
  return document.querySelectorAll("Page");
}

function getAllRoutes(elements) {
  let routes = [];

  elements.forEach(e => {
    const route = e.attributes.getNamedItem("route").textContent;
    routes.push(route.toLowerCase())
  })

  return routes
}

function validAllRoutes(elements) {
  const routes = getAllRoutes(elements)

  if (hasDuplicates(routes)) {
    console.error("Nome de páginas se repetem\n", routes)
    return;
  }
}

function hasDuplicates(array) {
  return array.some(el => array.indexOf(el) !== array.lastIndexOf(el));
}

