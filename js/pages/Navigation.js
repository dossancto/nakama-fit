window.addEventListener("hashchange", goToUrlPage)
window.addEventListener("popstate", goToUrlPage);

function goToUrlPage() {
  const hash = location.hash
  const pageName = hash.replace("#", "", 1)

  if (!getPage(pageName)) return

  getLinkToPage(pageName)

  switchPage(pageName)
}

function getRedirectPage(link) {
  return link.attributes.getNamedItem("topage").textContent;
}

function configHref(link) {
  const topage = getRedirectPage(link)

  const a = document.createAttribute("href");
  a.textContent = "#" + topage
  link.attributes.setNamedItem(a)

}

function configRedirectToPageLinks(links) {
  links.forEach(link => {
    configHref(link);
    link.addEventListener('click', handleLinkClick)
  });
}

function selectNavItem(element) {
  element.classList.add("nav-selected")
}

function clearSelectecItens() {
  const oldSelected = document.querySelectorAll(".nav-selected");

  oldSelected.forEach(el => {
    el.classList.remove("nav-selected");
  })
}

function handleLinkClick(e) {
  const link = e.target;

  const page = getRedirectPage(link)

  getLinkToPage(page)
  clearSelectecItens()

  switchPage(page)
}
