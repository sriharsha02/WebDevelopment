const btn = document.getElementsByClassName("add-to-cart")
const container = document.getElementById('notification-div')

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



// function addToCart(event){
//   const buttonID =  event.target.id;
//   console.log(buttonID)
// }

