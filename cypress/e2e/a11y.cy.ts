describe("Full‑page accessibility", () => {
  const pages = ["/", "/about", "/projects", "/blog", "/guestbook"]

  beforeEach(() => {
    cy.injectAxe()
  })

  pages.forEach((path) => {
    it(`no WCAG violations on ${path}`, () => {
      cy.visit(path)
      cy.checkA11y(undefined, {
        runOnly: ["wcag2a", "wcag2aa"],
      })
    })
  })
})
