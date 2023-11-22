import Login_PO from "../support/Pages/Login"
import Admin from "../support/Pages/Admin"

describe('The Admin', () =>{
    const login_PO = new Login_PO
    const admin = new Admin

    before(function(){ 
  cy.fixture('credentials').then((data)=>{
    globalThis.data = data
  
  })
  
    })

    it.only('successful login', () =>{
          login_PO.Login(data.login.validdataset.username, data.login.validdataset.password)
          admin.admin()
          admin.searchAdmin()
          admin.AdminAssertion()
          
    
        }) 
       
    
    })