import { When, Then} from "@badeball/cypress-cucumber-preprocessor";
import ExpensePage_PO from "../page_objects/expensePage_PO";

const expense = new ExpensePage_PO();

When('the user clicks submit an expense link', () => {
    expense.clickExpenseLink();
})
Then('the expense page should be displayed', () => {
    expense.assertExpensePage();
})