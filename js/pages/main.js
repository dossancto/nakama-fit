function replaceTemplate(value, template) {
  const body = document.body;
  const t = body.innerHTML;

  const replaced = t.replaceAll(`{{${template}}}`, value)

  body.innerHTML = replaced;

  return replaced;
}

// replaceTemplate("template String", "salve")

const links = document.querySelectorAll("a[topage]");

const pages = getAllPages()

configRedirectToPageLinks(links)

preparePages(pages)

validAllRoutes(pages)

goToUrlPage()
