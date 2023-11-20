//import {data} from "cypress"
import Login_PO from "../support/Pages/Login"

describe('Login Feature', () =>{
  const login_PO = new Login_PO
  beforeEach(function(){ 
cy.fixture('credentials').then((data)=>{
  globalThis.data = data

})

  })

  it('successful login', () =>{
    expect(data.login.validdataset).to.exist
      login_PO.Login(data.login.validdataset.username, data.login.validdataset.password)
      login_PO.validAssertion()
      

    }) 
    it('unsuccessful login', () =>{
      expect(data.login.invaliddataset).to.exist
       login_PO.Login(data.login.invaliddataset.username, data.login.invaliddataset.password)
       login_PO.invalidAssertion()
       

    })

})