class Login_PO {
    Login(username, password) {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type(username)
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type(password)
        cy.get('.oxd-button').click();

    
    }

    validAssertion() {
        cy.url().should("eq", "https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index")
        cy.contains("Dashboard").should("be.visible")
        cy.contains("My Info").should("be.visible")
        //cy.waitUntil(() => cy.title().should('include', 'dashboard'))

    }

    invalidAssertion() {
        cy.get('.oxd-alert-content').should("be.visible")
        cy.contains("Invalid credentials").should("be.visible")
    }

    waitAfterAssertion() {
        cy.wait(5000) // wait 5 seconds until the next block of code
    }

    
}

export default Login_PO;
