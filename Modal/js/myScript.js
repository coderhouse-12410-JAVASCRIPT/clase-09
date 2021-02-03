// Aquie pondremos nuestro codigo
var myInput = document.getElementById('input1');

myInput.onkeypress = capturarEnter;

function capturarEnter( elEvento) {
    console.log(elEvento.keyCode);
    if ( elEvento.code == "Enter"){
        checkout();
    }
}


function checkout(){
    console.log("Hice checkout");
}