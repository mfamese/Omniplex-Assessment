class TrainingPage_PO {
    constructor() {
        this.trainingLink = "[aria-labelledby] div:nth-child(7) [class='mt-8'] [aria-hidden]"
        this.trainingPage = "[aria-labelledby] div:nth-child(7) [class='mt-8'] [aria-hidden]"
    }

    clickTrainingLink() {
        cy.get(this.trainingLink).click();
    }

    assertTrainingPage() {
        cy.get(this.trainingPage).should("contain.text", "Training")
    }

}

export default TrainingPage_PO;
