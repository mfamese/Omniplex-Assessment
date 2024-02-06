class BenefitsPage_PO {
    constructor() {
        this.benefitsLink = "[aria-labelledby] div:nth-child(3) [class='mt-8'] [aria-hidden]"
        this.benefitsPage = "[aria-labelledby] div:nth-child(3) [class='mt-8'] [aria-hidden]"
    }

    clickBenefitLink() {
        cy.get(this.benefitsLink).click();
    }
    assertBenefitPage() {
        cy.get(this.benefitsPage).should("contain.text", "benefits")
    }

}
export default BenefitsPage_PO;
