function openNav() {
    document.getElementById("myNav").style.width = "100%";
  }
  
  function closeNav() {
    document.getElementById("myNav").style.width = "0%";
  }



let cartCount = 1;

let list = document.querySelectorAll('.list .card');
list.forEach(card => {
    card.addEventListener('click', function(event){
        if(event.target.classList.contains('add')){
            var itemNew = card.cloneNode(true);
            let checkIsset  = false;

            let listCart = document.querySelectorAll('.cart .card');
            listCart.forEach(cart =>{
                if(cart.getAttribute('data-key') == itemNew.getAttribute('data-key')){
                    checkIsset = true;
                    cart.classList.add('danger');
                    setTimeout(function(){
                        cart.classList.remove('danger');
                    },1000)
                }
            })
            if(checkIsset == false){
                document.querySelector('.overlay-content').appendChild(itemNew);
                const cartCountElement = document.getElementById('cart-count');
                cartCountElement.innerText = cartCount;
                cartCount++;
            }

        }
    })
})
function Remove($key){
    
    let listCart = document.querySelectorAll('.cart .card');
    listCart.forEach(card => {
        if(card.getAttribute('data-key') == $key){
            const cartCountElement = document.getElementById('cart-count');
            const itemCount = parseInt(cartCountElement.innerText);
            cartCountElement.innerText = itemCount - 1;
            card.remove();
            return;
        }
    })
}


