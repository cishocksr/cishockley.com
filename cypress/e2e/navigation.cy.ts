describe("Site Navigation", () => {
  beforeEach(() => {
    cy.visit("/")
  })

  it("navigates to each page", () => {
    ;["About", "Projects", "Blog", "Guestbook"].forEach((linkText) => {
      cy.contains("nav a", linkText).click()
      cy.url().should("include", `/${linkText.toLowerCase()}`)
      cy.go("back")
    })
  })
})
