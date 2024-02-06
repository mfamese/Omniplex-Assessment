import { When, Then} from "@badeball/cypress-cucumber-preprocessor";
import TrainingPage_PO from "../page_objects/training_PO";

const training = new TrainingPage_PO()

When('the user clicks the training link', () => {
    training.clickTrainingLink();
})
Then('the complete user training should be displayed', () => {
    training.assertTrainingPage();
})