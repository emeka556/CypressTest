

class Admin{

    admin(){
        cy.get(':nth-child(1) > .oxd-main-menu-item').click()

            }
searchAdmin(){
    cy.get(':nth-child(2) > .oxd-input').type("Paul Collings")


}


}

export default Admin;