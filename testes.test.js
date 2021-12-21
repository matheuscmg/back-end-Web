const  Verificaemail  = require("./alfa")

describe('Teste de back end', () =>{

it('O usuario deve utilizar um email valido contendo um correio eletronico valido', () =>{
    const emails = 'play8@gmail.com'

    expect(alfa.Verificaemail(emails)).toEqual(1)

    })
    
})







































