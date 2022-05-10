const { assert } = require("chai")
const validarEmail = require("../index")

describe('Testando formatação de email' , function() {
    describe('1 Teste: email formatado', function() {
        it("Recebendo um email bem formatado", function (){
            const retornaEmailValidado = validarEmail('texto@texto.com')
            assert.equal(retornaEmailValidado, true)
        })

        it("Recebendo um email sem a terminação esperada", function (){
            const retornaEmailValidado = validarEmail('texto@texto')
            assert.equal(retornaEmailValidado, false)
        })

        it("Recebendo um email sem o @", function (){
            const retornaEmailValidado = validarEmail('texto.com')
            assert.equal(retornaEmailValidado, false)
        })

        it("Recebendo apenas uma string qualquer", function (){
            const retornaEmailValidado = validarEmail('texto')
            assert.equal(retornaEmailValidado, false)
        })
    })
});