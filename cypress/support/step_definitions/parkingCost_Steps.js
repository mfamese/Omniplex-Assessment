const { Given, When, Then, Before } = require("@badeball/cypress-cucumber-preprocessor");
import EstimatedParkingCost_PO from "../page_objects/parkingCost_PO";

const parkingCost = new EstimatedParkingCost_PO();

Given('a user visits the parking cost calculator url', () => {
    parkingCost.visitParkingCostCalculatorPage();
})
When('selects a parking lot as {string}', (parkingOption) => {
    parkingCost.selectParkingLot(parkingOption);
})
When('enters the entry date as {string}', (entryDate) => {
    parkingCost.enterEntryDate(entryDate);
})
When('entry time as {string}', (entryTime) => {
    parkingCost.enterEntryTime(entryTime);
});
When('enters the leaving date as {string}', (leavingDate) => {
    parkingCost.enterLeavingDate(leavingDate);
});
When('leaving time as {string}', (leavingTime) => {
    parkingCost.enterLeavingTime(leavingTime);
});
When('the user clicks the calculator button', () => {
    parkingCost.clickCalculateButton();
});
Then('the estimated total parking cost should be displyed as {string}', (expectedPackingCost) =>{
    parkingCost.verifyTotalCost(expectedPackingCost);
})