describe("Theme Toggle", () => {
  it("toggles light/dark mode", () => {
    cy.visit("/")
    cy.get("[aria-label='Toggle light/dark theme']").click()
    cy.get("html").should("have.class", "dark")
    cy.get("[aria-label='Toggle light/dark theme']").click()
    cy.get("html").should("not.have.class", "dark")
  })
})
