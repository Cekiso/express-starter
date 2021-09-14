module.exports = function PizzaApp() {

    let smallTotal = 0;
    let mediumTotal = 0;
    let largeTotal = 0;
    let grandTotal = 0;

    var smallcounter = 0;
    var mediumcounter = 0;
    var largecounter = 0;


    function smallPizza(size) {
        if (size === "small") {
            smallTotal += 35
            grandTotal += 35
            smallcounter++
        }
    }

    function mediumPizza(size) {
        if (size === "medium") {
            mediumTotal += 65
            grandTotal += 65
            mediumcounter++
        }
    }


    function largePizza(size) {
        if (size === "large") {
            largeTotal += 120
            grandTotal += 120
            largecounter++
        }
    }

    function Total() {
        return grandTotal;
    }


    function largerTotal() {
        return largeTotal
    }


    function mediumsTotal() {
        return mediumTotal
    }

    function smallsTotal() {
        return smallTotal
    }



    return {
        smallPizza,
        mediumPizza,
        largerTotal,
        largeTotal,
        mediumsTotal,
        smallsTotal,
        Total,
        largePizza,
    }

}