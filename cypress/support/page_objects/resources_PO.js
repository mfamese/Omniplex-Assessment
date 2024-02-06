class ResourcePage_PO {
    constructor() {
        this.resourceLink = ".flex.space-x-4 > a:nth-of-type(3)"
        this.resourcePage = ".flex.space-x-4 > a:nth-of-type(3)"
    }
    clickResourceLink() {
        cy.get(this.resourceLink).click();
    }
    assertResourcePage() {
        cy.get(this.resourcePage).should("contain.text", "Resources")
    }

}
export default ResourcePage_PO;
