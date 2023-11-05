
let product=[
    {
        name:'Tommy Gold Hoop Earrings',
        tag:'tommy-earring',
        price:29.00,
        inCart:0

    },
    {
        name:'Pearl hoop earrings',
        tag:'pearl-earring',
        price:29.00,
        inCart:0

    },
    {
        name:'Selena hoop earrings',
        tag:'selena-earring',
        price:29.00,
        inCart:0


    },  {
        name:'Malibu necklace',
        tag:'malibu-necklace',
        price:79.00,
        inCart:0

    },  {
        name:'love necklace',
        tag:'love-necklace',
        price:39.00,
        inCart:0

    },  {
        name:'mika necklace',
        tag:'mika-necklace',
        price:39.00,
        inCart:0

    },







]



$( document ).ready(function() {

    let carts = document.querySelectorAll('.add-to-cart');
    console.log( "ready!" );



    for (let i = 0; i < carts.length; i++) {
        carts[i].addEventListener('click', () => {
            cartNumbers(product[i]);
            totalCost(product[i]);

        });
    }

    function onLoadCartNumbers() {
        let productNumbers = localStorage.getItem('cartNumbers');
        console.log( productNumbers );
        if (productNumbers) {
            document.querySelector('add-to-cart').textContent = productNumbers;
        }
    }

    function cartNumbers(product, action) {
        let productNumbers = localStorage.getItem('cartNumbers');
        productNumbers = parseInt(productNumbers);

        let cartItems = localStorage.getItem('productsInCart');
        cartItems = JSON.parse(cartItems);

        if (action) {
            localStorage.setItem("cartNumbers", productNumbers - 1);
            document.querySelector('.add-to-cart').textContent = productNumbers - 1;
            console.log("action running");
        } else if (productNumbers) {
            localStorage.setItem("cartNumbers", productNumbers + 1);
            document.querySelector('.add-to-cart').textContent = productNumbers + 1;
        } else {
            localStorage.setItem("cartNumbers", 1);
            document.querySelector('.add-to-cart').textContent = 1;
        }
        setItems(product);
    }
    let cartItems = localStorage.getItem('productsInCart');
    function setItems(product) {
        // let productNumbers = localStorage.getItem('cartNumbers');
        // productNumbers = parseInt(productNumbers);

        cartItems = JSON.parse(cartItems);

        if (cartItems != null) {
            let currentProduct = product.tag;

            if (cartItems[currentProduct] == undefined) {
                cartItems = {
                    ...cartItems,
                    [currentProduct]: product
                }
            }
            cartItems[currentProduct].inCart += 1;

        } else {
            product.inCart = 1;
            cartItems = {
                [product.tag]: product
            };
        }

        localStorage.setItem('productsInCart', JSON.stringify(cartItems));
    }
    function show() {
        /*
        if(localStorage.getItem('productsInCart')) { //add to the productInCart
            document.getElementById("theProduct").innerHTML = "";
            Object.values(localStorage.getItem('productsInCart')).map(item => {
                document.getElementById("theProduct").innerHTML =
                    'name:' + item.tag +
                    'price:' + item.price +
                    'in cart:' + item.inCart;
            })
        }*/




    }

    function totalCost(product, action) {
        let cart = localStorage.getItem("totalCost");

        if (action) {
            cart = parseInt(cart);

            localStorage.setItem("totalCost", cart - product.price);
        } else if (cart != null) {

            cart = parseInt(cart);
            localStorage.setItem("totalCost", cart + product.price);

        } else {
            localStorage.setItem("totalCost", product.price);
        }
    }
    let to_form=localStorage.getItem('productsInCart');
    function escapeHtml(unsafe) {
        return unsafe
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#039;");
    }
    $("#form").submit( function(eventObj) {
        $(this).append('<input type="hidden" name="storage_product" value="'+escapeHtml(to_form)+'" />');
    });


});

function showPrice() {
    //showPrice();
    //totalPrice=parseInt(totalPrice);

    //return totalPrice;
    //document.getElementById("demo").innerHTML =totalPrice;


}

function  showTheCart() {
    $(document).ready(function(){

        // $('.toast').onmouseover('show');

        $('.toast').toast('show');
        let totalPrice=localStorage.getItem('totalCost');
        console.log(typeof (localStorage.getItem('totalCost')));
        if(totalPrice==undefined){
            totalPrice=0;
        }
        totalPrice=parseInt(totalPrice);

        console.log("the total price is:" ,totalPrice);
        document.getElementById("priceCart").innerHTML =totalPrice+'$';

        let cartItem=localStorage.getItem('productInCart');
        console.log("the type is",typeof localStorage.getItem('productInCart'));
        cartItem=JSON.parse(cartItem);


        console.log(document.getElementById("theProduct").childNodes.length);
        console.log( Object.values(cartItem).length);



        /*
        if(cartItem) { //add to the productInCart
            document.getElementById("theProduct").innerHTML = "";
            Object.values(cartItem).map(item => {
                    document.getElementById("theProduct").innerHTML =
                        'name:' + item.tag +
                        'price:' + item.price +
                        'in cart:' + item.inCart;
                }


            );
        }
        */


        if(document.getElementById("theProduct").childNodes.length <= Object.values(cartItem).length) {
            AddCart(cartItem);
        }



        //let productToBuy=localStorage.getItem('productInCart');
        //console.log(productToBuy)
        //let productToBuy=JSON.parse(localStorage.getItem('productInCart'));
        //document.getElementById("theProduct").innerHTML =productToBuy.price+productToBuy.tag+productToBuy.inCart;
    });
}

function AddCart(cartItem) {

    let size = Object.values(cartItem).length;


    for(let x = 0; x < size; x++){
        let arr = document.createElement("div");
        let y = document.createElement("br");
        console.log(Object.values(cartItem)[x]);
        arr.innerHTML = Object.values(cartItem)[x].name +" price: " + Object.values(cartItem)[x].price + " incart: " + Object.values(cartItem)[x].inCart;
        document.getElementById("theProduct").appendChild(arr);
        document.getElementById("theProduct").appendChild(y);
    }

}




/******************************/







//2 TABLE****************************/
var css = 'table tr:hover{ background-color: pink }';
var style = document.createElement('style');

if (style.styleSheet) {
    style.styleSheet.cssText = css;
} else {
    style.appendChild(document.createTextNode(css));
}

document.getElementsByTagName('head')[0].appendChild(style); //first row
/******************************/












/*/3 ALERT
var count =1;
document.body.onmouseleave=exit();

function exit() {
    if(count==1){
        window.alert("goodbye:)");
        count ++;


    }

}
*/
/*3
$(document).ready(function () {
    if(sessionStorage.getItem('#myModal')!=='true'){
        $('#myModal').modal('show');
        sessionStorage.setItem('#myModal','true')
    }

})



*/


/*********************************/