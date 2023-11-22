import Login_PO from "../support/Pages/Login"
import PIM from "../support/Pages/PIM"

describe('PIM', () =>{
    const login_PO = new Login_PO
    const pIM = new PIM
    
    before(function(){ 
  cy.fixture('credentials').then((data)=>{
    globalThis.data = data
  
  })
  
    })


it('successful login', () =>{
    
    login_PO.Login(data.login.validdataset.username, data.login.validdataset.password)
    pIM.clickPIM()
    pIM.addNewEmployee()

    }) 
})