

class PIM{

    clickPIM(){
       
        cy.get(':nth-child(2) > .oxd-main-menu-item > .oxd-text').click()
        cy.url().should("eq", "https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewEmployeeList")
        

            }
        
    addNewEmployee(){
       
        cy.get('.orangehrm-header-container > .oxd-button').click()
        cy.url().should("eq", "https://opensource-demo.orangehrmlive.com/web/index.php/pim/addEmployee")

                    }
                
        uploadImg(){
            cy.get('.oxd-file-div > .oxd-icon-button > .oxd-icon').click()
            cy.wait(1000)
            const filepath = 'picture.jpeg' 
            cy.get("input[type='file']").attachFile(filepath,{subjectType: 'input'})
            
            

        }


}

export default PIM;