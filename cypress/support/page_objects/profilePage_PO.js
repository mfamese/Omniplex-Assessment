class ProfilePage_PO {
  constructor() {
  this.profilePage = "[class='mt-5 flex justify-center sm\\:mt-0'] [href]"
  }
  visitExamplePage() {
    cy.visit(Cypress.env("example_Page_url"), {timeout: 60000});
  }
  assertProfilePage() {
    cy.get(this.profilePage).should("contain.text", "View profile")
  }

}
export default ProfilePage_PO;
