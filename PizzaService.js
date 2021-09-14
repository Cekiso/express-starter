module.exports = function PizzaApp() {

    let smallCost;
    let mediumTotal;
    let largeTotal;


    var smallTotalPrice = 0;
    var mediumTotalPrice = 0;
    var largeTotalPrice = 0;
    // const pizzas = pizzaList || [];
    var pizzas = {};
    var message = "";

    function listAll(size) {
        var sizes = pizzas;
        // console.log(sizes)
        setList(size)
        if (size == 'small' && price == 'number') {
            message = small;
        } else if (size == 'medium') {
            message = medium;
        } else if (size == 'large') {
            message = large;
        } else {
            message = '';
        }
        // var size = pizzas;
        // var count = size.rows;
        // for (var i = 0; i < count; i++) {
        //     console.log(size.rows[i]);
        //}


    }

    function setList(size) {
        smallCost += smallTotalPrice;

        if (pizzas[size] === undefined) {
            pizzas[size] = 1
        } else {
            pizzas[size]++
        }

    }

    function getLists() {
        return message
    }

    function count() {
        var pizzaList = Object.keys(pizzas);
        console.log(pizzaList)
        return pizzaList.length;
    }
    //create a function that returns all the name in the list 

    function sizeList() {
        return pizzas;

    }

    function addPizza(pizza) {

    }

    function deletePizza(pizzaId) {

    }

    function updatePizza(pizzaId) {

    }

    return {
        addPizza,
        deletePizza,
        updatePizza,
        listAll,
        setList,
        getLists,
        sizeList,
        count,
    }

}