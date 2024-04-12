const { it, expect} = require('./framework');
const saludar = require('./app');

console.log(saludar("Platzi"));

it("La función saluda", () => {
    expect(saludar("Platzi")).toBe("Hola Platzi");
});