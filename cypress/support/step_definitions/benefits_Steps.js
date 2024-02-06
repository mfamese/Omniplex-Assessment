import { When, Then} from "@badeball/cypress-cucumber-preprocessor";
import BenefitsPage_PO from "../page_objects/benefitsPage_PO";

const benefit = new BenefitsPage_PO();
When('the user clicks the benefits link', () => {
    benefit.clickBenefitLink();
})
Then('all users benefits should be displayed', () => {
    benefit.assertBenefitPage();
})

