
// We declare the function with the exact name "fromEuroToDollar"
const fromEuroToDollar = function(valueInEuro) {
    // Convert the given valueInEuro to dollars
    let valueInDollar = valueInEuro * 1.07;
    // return the dollar value
    return valueInDollar;
}

function sum(num1, num2){

    return num1 + num2
}




let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}


const fromDollarToYen=(dolares)=>{

    let euro = oneEuroIs.USD;

    let resultadoDollarEuro = dolares / euro;

    console.log('Dolar a euro ' + resultadoDollarEuro);

    console.log('Resultado de: '+ resultadoDollarEuro * oneEuroIs.JPY)
    

    return resultadoDollarEuro * oneEuroIs.JPY;


}



const fromYenToPound =(yens)=>{

    return yens * oneEuroIs.GBP;


}

console.log(fromEuroToDollar(10));

console.log(fromDollarToYen(10));

console.log(fromYenToPound(10));


module.exports = {sum, fromEuroToDollar, fromDollarToYen, fromYenToPound};

