class EstimatedParkingCost_PO {
  constructor() {
    this.parkingLotSelector = "#ParkingLot";
    this.entryDateInput = "#StartingDate";
    this.entryTimeInput = "#StartingTime";
    this.entryRadioInput = "tr:nth-of-type(2) > td:nth-of-type(2) > input:nth-of-type(4)"
    this.leavingDateInput = "#LeavingDate";
    this.leavingTimeInput = "#LeavingTime";
    this.leavingRadioInput = 'tr:nth-of-type(3) > td:nth-of-type(2) > input:nth-of-type(4)'
    this.calculateButton = "[type='submit']";
    this.totalCost = "tbody tr:nth-of-type(4) .SubHead:nth-of-type(2)";
  }

  visitParkingCostCalculatorPage() {
    cy.visit(Cypress.env("parking_Cost_Calculator_url"), { timeout: 60000 });
  }
  selectParkingLot(parkingOption) {
    cy.wait(2000)
    cy.get(this.parkingLotSelector).should('be.visible').select(parkingOption);
  }
  enterEntryDate(entryDate) {
    cy.get(this.entryDateInput).clear();
    cy.get(this.entryDateInput).type(entryDate);
  }
  enterEntryTime(entryTime) {
    cy.get(this.entryTimeInput).clear();
    cy.get(this.entryTimeInput).type(entryTime);
  }
  enterLeavingDate(leavingDate) {
    cy.get(this.leavingDateInput).clear();
    cy.get(this.leavingDateInput).type(leavingDate);
  }
  enterLeavingTime(leavingTime) {
    cy.get(this.leavingTimeInput).clear();
    cy.get(this.leavingTimeInput).type(leavingTime);
    cy.get(this.leavingRadioInput).check();
    
  }
  clickCalculateButton() {
    cy.get(this.calculateButton).click();
  }
  verifyTotalCost(expectedTotalCost) {
    cy.get(this.totalCost).should('contain.text', `$${expectedTotalCost}`);
  }

}

export default EstimatedParkingCost_PO;
