const btn = document.getElementsByClassName("add-to-cart");
const container = document.getElementById('notification-div');
const open = document.getElementById('main-cart-button');
const close = document.getElementById('close');
const cartContainer = document.getElementById('cart-container');

for(const button of btn)
  button.addEventListener('click', () => {
    createNotification()
  })

function createNotification(){
  const notif = document.createElement('div')
  notif.classList.add('toast')
  notif.innerText = 'Your Product has been added to the cart';
  // document.body.appendChild(notif);
  container.appendChild(notif)

  setTimeout(() => {
    notif.remove()
  }, 3000)
}
open.addEventListener('click', () =>{
  cartContainer.classList.add('active')
  
})
close.addEventListener('click', () =>{
  cartContainer.classList.remove('active')
  
})



