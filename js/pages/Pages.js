function getPage(pageName) {
  const pageNameTrated = pageName.toLowerCase()
  const page = document.querySelector(`Page[route='${pageNameTrated}']`)
  return page
}

function getCurrentPage() {
  return document.querySelector(`Page.visibile-page`)
}

function switchPage(pageName) {
  hidepage(getCurrentPage())
  showpage(getPage(pageName))
}

/**
  * Hide all pages and show only the index
  * @param parges - Result of `getAllPages()`
 */ 
function preparePages(pages) {
  const indexPage = getStartupPage(pages)

  pages.forEach(page => {
    hidepage(page)
  })

  showpage(indexPage)
}

function hidepage(page) {
  if (!page) return

  page.classList.add("hidden-page")
  page.classList.remove("visibile-page")

}

function showpage(page) {
  page.classList.add("visibile-page")
  page.classList.remove("hidden-page")
}

function getLinkToPage(pageName) {
  const links = document.querySelectorAll(`a[topage=${pageName}]`)

  clearSelectecItens()

  links.forEach(link => {
    selectNavItem(link)
  })

}
