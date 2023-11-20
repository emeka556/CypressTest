

class Admin{

    admin(){
        cy.get(':nth-child(1) > .oxd-main-menu-item').click()

            }
searchAdmin(){
    cy.get(':nth-child(2) > .oxd-input').type("Paul Collings")
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text--after > .oxd-icon').click()


}


}

export default Admin;