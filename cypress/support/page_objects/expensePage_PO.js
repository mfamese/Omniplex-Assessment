class ExpensePage_PO {
    constructor() {
        this.expenseLink = "[aria-labelledby] div:nth-child(6) [class='mt-8'] [aria-hidden]"
        this.expensePage = "[aria-labelledby] div:nth-child(6) [class='mt-8'] [aria-hidden]"
    }

    clickExpenseLink() {
        cy.get(this.expenseLink).click();
    }
    assertExpensePage() {
        cy.get(this.expensePage).should("contain.text", "Submit an expense")
    }

}
export default ExpensePage_PO;
