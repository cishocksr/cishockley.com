describe("Projects Page", () => {
  it("displays featured projects", () => {
    cy.visit("/projects")
    cy.get("h1").should("contain", "Projects")
    cy.get(".card").its("length").should("be.gte", 1)
  })
})
