

class PIM{

    clickPIM(){
       
        cy.get(':nth-child(2) > .oxd-main-menu-item > .oxd-text').click()

            }
        
    addNewEmployee(){
       
        cy.get('.orangehrm-header-container > .oxd-button').click()
            }


}

export default PIM;