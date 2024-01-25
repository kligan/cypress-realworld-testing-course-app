describe("Subscribe", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000")
  })

  it("allows users to subscribe to the email list", () => {
    cy.getByData("email-input").type("kliganbraganza@gmail.com")
    cy.getByData("submit-button").click()
    cy.getByData("success-message")
      .should("exist")
      .contains(
        "Success: kliganbraganza@gmail.com has been successfully subscribed"
      )
  })

  it("should not show success message when the email is incorrect", () => {
    cy.getByData("email-input").type("kligan")
    cy.getByData("submit-button").click()
    cy.getByData("success-message").should("not.exist")
  })

  it("same user should not able to subscribe again", () => {
    cy.getByData("email-input").type("john@example.com")
    cy.getByData("submit-button").click()
    cy.getByData("success-message").should("not.exist")
    cy.getByData("server-error-message")
      .should("exist")
      .contains("already exists. Please use a different email address")
  })
})
