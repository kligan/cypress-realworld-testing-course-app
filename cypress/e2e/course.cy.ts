describe("test courses", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000")
  })

  context("Hero Section", () => {
    it("the h1 contains the correct text", () => {
      cy.getByData("course-title")
        .should("exist")
        .contains("Testing Your First Next.js Application")

      cy.getByData("course-description")
        .should("exist")
        .contains("How to test a Next.js e-commerce app with Cypress")
    })

    it("the features on the homepage are correct", () => {
      cy.get("dt").eq(0).contains("4 Courses")
      cy.get("dt").eq(1).contains("25+ Lessons")
      cy.get("dt").eq(2).contains("Free and Open Source")
    })
  })
})
