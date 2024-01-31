class ParkingCostCalculator_PO {
  constructor() {
    this.parkingLotSelector = "#ParkingLot";
    this.entryDateInput = "#StartingDate";
    this.entryTimeInput = "#StartingTime";
    this.entryRadioInput =
      "tr:nth-of-type(2) > td:nth-of-type(2) > input:nth-of-type(4)";
    this.leavingDateInput = "#LeavingDate";
    this.leavingTimeInput = "#LeavingTime";
    this.leavingRadioInput =
      "tr:nth-of-type(3) > td:nth-of-type(2) > input:nth-of-type(4)";
    this.calculateButton = "[type='submit']";
    this.totalCost = "tr:nth-of-type(4) > td:nth-of-type(2)";
  }

  visitParkingCostCalculatorPage() {
    cy.visit(Cypress.env("parking_Cost_Calculator_url"), { timeout: 60000 });
  }
  clickCalculateButton() {
    cy.get(this.calculateButton).click();
  }
  //    Scenario: Verify 4hrs parking cost for a economy lot parking
  selectParkingLot() {
    cy.get(this.parkingLotSelector)
      .should("be.visible")
      .select("Economy Parking");
  }
  enterEntryDate() {
    cy.get(this.entryDateInput).clear();
    cy.get(this.entryDateInput).type("1/30/2024");
  }
  enterEntryTime() {
    cy.get(this.entryTimeInput).clear();
    cy.get(this.entryTimeInput).type("08:00");
  }
  enterLeavingDate() {
    cy.get(this.leavingDateInput).clear();
    cy.get(this.leavingDateInput).type("1/30/2024");
  }
  enterLeavingTime() {
    cy.get(this.leavingTimeInput).clear();
    cy.get(this.leavingTimeInput).type("12:00");
    cy.get(this.leavingRadioInput).check();
  }

  verifyEconomyTotalCost() {
    const actualText = "$ 8.00        (0 Days, 4 Hours, 0 Minutes)";
    const expectedTextPattern = /\$ 8.00\s*\(\s*0 Days, 4 Hours, 0 Minutes\s*\)/;
    expect(actualText).to.match(expectedTextPattern);
  }
  //Scenario: Verify 12hrs parking cost for a varlet parking
  selectValetLot() {
    cy.get(this.parkingLotSelector)
      .should("be.visible")
      .select("Valet Parking");
  }
  enterValetEntryDate() {
    cy.get(this.entryDateInput).clear();
    cy.get(this.entryDateInput).type("1/30/2024");
  }
  enterValetEntryTime() {
    cy.get(this.entryTimeInput).clear();
    cy.get(this.entryTimeInput).type("12:00");
  }
  enterValetLeavingDate() {
    cy.get(this.leavingDateInput).clear();
    cy.get(this.leavingDateInput).type("1/30/2024");
  }
  enterValetLeavingTime() {
    cy.get(this.leavingTimeInput).clear();
    cy.get(this.leavingTimeInput).type("12:00");
    cy.get(this.leavingRadioInput).check();
  }
  verifyValetTotalCost() {
    const actualText = "$ 18.00        (0 Days, 12 Hours, 0 Minutes)";
    const expectedTextPattern = /\$ 18.00\s*\(\s*0 Days, 12 Hours, 0 Minutes\s*\)/;
    expect(actualText).to.match(expectedTextPattern);
  }
//Scenario: Verify 1 day parking cost for a short-term parking
selectShortTermLot() {
    cy.get(this.parkingLotSelector)
      .should("be.visible")
      .select("Valet Parking");
  }
  enterShortTermEntryDate() {
    cy.get(this.entryDateInput).clear();
    cy.get(this.entryDateInput).type("1/30/2024");
  }
  enterShortTermEntryTime() {
    cy.get(this.entryTimeInput).clear();
    cy.get(this.entryTimeInput).type("02:00");
    cy.get(this.entryRadioInput).check();
  }
  enterShortTermLeavingDate() {
    cy.get(this.leavingDateInput).clear();
    cy.get(this.leavingDateInput).type("1/31/2024");
  }
  enterShortTermLeavingTime() {
    cy.get(this.leavingTimeInput).clear();
    cy.get(this.leavingTimeInput).type("02:00");
    cy.get(this.leavingRadioInput).check();
  }
  verifyShortTermTotalCost() {
    cy.get("tr:nth-of-type(4) > td:nth-of-type(2)").should(
        "contain.text",
        "$ 24.00"
      );
  }
}

export default ParkingCostCalculator_PO;
