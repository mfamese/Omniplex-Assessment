import { When, Then} from "@badeball/cypress-cucumber-preprocessor";
import ResourcePage_PO from "../page_objects/resources_PO";

const resource = new ResourcePage_PO()

When('the user clicks the resources link', () => {
    resource.clickResourceLink();
})
Then('the resources page should be displayed', () => {
    resource.assertResourcePage();
})