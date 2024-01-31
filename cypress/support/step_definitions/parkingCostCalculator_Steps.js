const { Given, When, Then, Before } = require("@badeball/cypress-cucumber-preprocessor");
import ParkingCostCalculator_PO from "../page_objects/parkingCostCalculator_PO";


const parkingCost = new ParkingCostCalculator_PO();

When('fills all required informations for 4hrs parking', () => {
    parkingCost.selectParkingLot();
    parkingCost.enterEntryDate();
    parkingCost.enterEntryTime();
    parkingCost.enterLeavingDate();
    parkingCost.enterLeavingTime();
})
When('the user clicks the calculate buton', () => {
    parkingCost.clickCalculateButton();
})
Then('the estimated cost for 4hrs economy lot parking should be dispalyed', () => {
    parkingCost.verifyEconomyTotalCost();
})
When('fills all required informations for 8hrs parking', () => {
    parkingCost.selectValetLot();
    parkingCost.enterValetEntryDate();
    parkingCost.enterValetEntryTime();
    parkingCost.enterValetLeavingDate();
    parkingCost.enterValetLeavingTime();
})
Then('the estimated cost for 12hrs valet parking should be dispalyed', () => {
    parkingCost.verifyValetTotalCost();
})
When('fills all required informations for a day parking', () => {
    parkingCost.selectShortTermLot();
    parkingCost.enterShortTermEntryDate();
    parkingCost.enterShortTermEntryTime();
    parkingCost.enterShortTermLeavingDate();
    parkingCost.enterShortTermLeavingTime();
})
Then('the estimated cost for 1day short-term parking should be dispalyed', () => {
    parkingCost.verifyShortTermTotalCost();
})
