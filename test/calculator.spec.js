global.window = global;
global.assert = require('assert');
require('../src/calculator');

//hacer calculadora que sume, reste, multiplique y divida :D
describe('suma', () => { //forma más común de llamar a una función (con los paréntesis)
    it('Debería ser una función', () => { //En str le dices lo que debería de pasar
        assert.equal(typeof calculator.suma, 'function') //aserciones. equal es otro método. Primero decimos lo que va a ejecutar y luego lo que debería de ser para ejecutarse (ejm una función)
    }) //it es la palabra que se usa para hacer un test. Ees un método (función) que pide un str y una función
    it('Debería devolver 4, si se pasan los argumentos 2, 2', () => {
        assert.equal(calculator.suma(2,2), 4);
    }) 
    it('Debería devolver 7, si se pasan los argumentos 3, 4', () => {
        assert.equal(calculator.suma(4,3), 7);
    }) 
    it('Debería devolver 8, si se pasan los argumentos "6", 2', () => {
        assert.equal(calculator.suma("6", 2), 8);
        assert.equal(calculator.suma(6, "2"), 8);
    }) 
}) 

//tests de resta
describe('resta', () => { //forma más común de llamar a una función (con los paréntesis)
    it('Debería ser una función', () => { //En str le dices lo que debería de pasar
        assert.equal(typeof calculator.resta, 'function')
    })
    it('Debería devolver 7, si se pasan los argumentos 10, 3', () => {
        assert.equal(calculator.resta(10,3), 7);
    }) 
    it('Debería devolvert 15, si se pasan los argumentos "20", 5', () => {
        assert.equal(calculator.resta("20",5), 15);
        assert.equal(calculator.resta(20,"5"), 15);
    })
})

//tests de la multiplicación
describe('multiplicacion', () => {
    it('Debería ser una función', () => {
        assert.equal(typeof calculator.multiplicacion, 'function')
    })
    it('Debería retornar 81, para los argumentos 9, 9', () => {
        assert.equal(calculator.multiplicacion(9,9), 81);
    })
    it('Debería retornar 45 para los argumentos "9", 5', () => {
        assert.equal(calculator.multiplicacion("9",5), 45);
    })
})

//tests de la división
describe('division', () => {
    it('Debería ser una función', () => {
        assert.equal(typeof calculator.division, 'function')
    })
    it('Debería retornar 5 para los argumentos 35, 7', () => {
        assert.equal(calculator.division(35,7), 5);
    })
})
