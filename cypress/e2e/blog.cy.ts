describe("Blog Index & Post", () => {
  it("loads blog index and opens a post", () => {
    cy.visit("/blog")
    cy.get("article").its("length").should("be.gte", 1)
    cy.get("article a").first().click()
    cy.url().should("match", /\/blog\/.+/)
  })
})
