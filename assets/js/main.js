function renderInput(list, el) {
    counter = 0;
    while (counter < list.length) {
        
        el.insertAdjacentHTML('afterbegin',
        `
        <div class="form_group">
            <label for="${list[counter][0]}">${list[counter][0]}</label>
            <input type="checkbox" name="${list[counter][0]}" id="${list[counter][0]}" data-price="${list[counter][1]}">
        </div>
        `
        
        )
        counter++
    }
}

var ingredients = [
    ['schesse', '1'],
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
    var burgerPrice = 10.99;

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

    var totalPrice = burgerPrice + sumIngredients;
});
