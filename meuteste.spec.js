const chai = require('chai');
const expect = chai.expect;
const  Verificaemail  = require("../alfa")
//const insereCadastro = require('../cadastro').insereCadastro;

discribe ('Teste',function(){
 
    it('O usuario deve utilizar um email valido contendo um correio eletronico valido', () =>{      
    
        expect(Verificaemail('play8@gmail.com')).to.equal(true)  
    });

     
    

});