function renderInput(list, el) {
    counter = 0;
    while (counter < list.length) {
        
        el.insertAdjacentHTML('beforeend',
        `
        <div class="form_group">
            <img class="mr-3" width="50" src="./assets/img/${list[counter][0] + '.svg'}">
            <label class="mr-3" for="${list[counter][0]}">${list[counter][0]}</label>
            <input class="checkbox_red mr-3" type="checkbox" name="${list[counter][0]}" id="${list[counter][0]}" data-price="${list[counter][1]}">
            <span class="text-danger pr-3">add</span>
        </div>
        `
        )
        counter++
    }
}

var ingredients = [
    ['cheese', '1'],
    ['feggs', '3'],
    ['mustard', '0.5'],
    ['tomato', '2'],
    ['lettuce', '1'],
    ['ketchup', '0.5']
]
var ingElement = document.querySelector('.ingredients');
renderInput(ingredients, ingElement);

document.querySelector('button').addEventListener('click', function(){
    //prezzo panino
    var burgerPrice = 10;
    console.log(burgerPrice);
    //Incremento panino quando un ingrediente vene selezionato
    var checks = document.querySelectorAll("input[type='checkbox']");

    var sumIngredients = null;
    for(var i = 0; i < checks.length; i++) {
        var element = checks[i];
        if(element.checked) {
            sumIngredients += Number(element.getAttribute('data-price'))
        }
    }
    console.log(sumIngredients);

    //sconto
    var coupons = [
        ['AAAA1111', 2],
        ['BBBB2222', 3],
        ['CCCC3333', 2]
    ];
    
    var discount;
    for(var i = 0; i < coupons.length; i++) {
        var couponElement = coupons[i];

        if(couponElement.includes('AAAA1111')) {
            discount = couponElement[1];
        } else if (couponElement.includes('BBBB2222')) {
            discount = couponElement[1];
        } else if (couponElement.includes('CCCC3333')) {
            discount = couponElement[1];
        }
    }
    console.log(discount);
    //prezzo totale 
    var totalPrice = burgerPrice + sumIngredients + discount;

    document.getElementById("burger_price").innerHTML = "$ " + totalPrice;
});
