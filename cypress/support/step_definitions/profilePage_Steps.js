const {Given, When, Then} = require("@badeball/cypress-cucumber-preprocessor");
import ProfilePage_PO from "../page_objects/profilePage_PO";


const profile = new ProfilePage_PO();

Given('a user visits the example url', () => {
    profile.visitExamplePage();
})
When('the user clicks the profile link', () => {
})

Then('the user profile should be displayed', () => {
    profile.assertProfilePage()
})