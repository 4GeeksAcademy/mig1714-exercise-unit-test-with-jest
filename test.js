// Importar la función sum del archivo app.js
const { sum } = require('./app.js');




// Comienza tu primera prueba
test('adds 14 + 9 to equal 23', () => {
    // Dentro de la prueba llamamos a nuestra función sum con 2 números
    let total = sum(14, 9);

    // Esperamos que la suma de esos 2 números sea 23
    expect(total).toBe(23);
});



test("One euro should be 1.07 dollars", function() {
    // Import the function from app.js
    const { fromEuroToDollar } = require('./app.js');

    // Use the function like its supposed to be used
    const dollars = fromEuroToDollar(3.5);

    // If 1 euro is 1.07 dollars, then 3.5 euros should be (3.5 * 1.07)
    const expected = 3.5 * 1.07; 
    
    // This is the comparison for the unit test
     expect(fromEuroToDollar(3.5)).toBe(3.745); // 1 euro is 1.07 dollars, then 3.5 euros should be = (3.5 * 1.07)
})


test("One euro should be 1.07 dollars", function() {
    // Import the function from app.js
    const { fromDollarToYen } = require('./app.js');

    // Use the function like its supposed to be used
    const dollars = fromDollarToYen(10);

    // If 1 YEN is 0.0062 dollars, then 10 YEN should be (10 * 0.0062)
    const expected = 10 * 9.345794392523365; 
    
    // This is the comparison for the unit test
     expect(fromDollarToYen(10)).toBe(1462.6168224299065); // 1 euro is 1.07 dollars, then 3.5 euros should be = (3.5 * 1.07)
})


test("One yen should be 156.5 yens", function() {
    // Import the function from app.js
    const { fromYenToPound } = require('./app.js');

    // Use the function like its supposed to be used
    const yens = fromYenToPound(10);

    // If 1 YEN is 0.0062 dollars, then 10 YEN should be (10 * 0.87)
    const expected = 10 * 0.87; 
    
    // This is the comparison for the unit test
     expect(fromYenToPound(10)).toBe(8.7); // 1 euro is 1.07 dollars, then 3.5 euros should be = (3.5 * 1.07)
})