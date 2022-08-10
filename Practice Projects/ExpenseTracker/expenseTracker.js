function saveToLocalStorage(event){
  event.preventDefault();
  const expenseAmount = event.target.amount.value;
  const expenseDescription = event.target.amountDescription.value;
  const expenseCategory = event.target.amountCategory.value;
  const myobj = {
    expenseAmount,
    expenseDescription,
    expenseCategory
  };
  console.log(myobj);
  localStorage.setItem(myobj.expenseDescription,JSON.stringify(myobj));
  showExpensesOnScreen(myobj);
}
window.addEventListener("DOMContentLoaded", () => {
  const localStorageObj = localStorage;
  const localStorageKeys = Object.keys(localStorageObj);
  for(let i = 0; i < localStorageKeys.length; i++){
    const key = localStorageKeys[i];
    const expenseDetailsString = localStorageObj[key];
    const expenseDetailsObj = JSON.parse(expenseDetailsString);
    showExpensesOnScreen(expenseDetailsObj);
  }
}); 
function showExpensesOnScreen(myobj){
  if(localStorage.getItem(myobj.expenseDescription)){
    deleteExpenseFromScreen(myobj.expenseDescription);
  }
  const parentNode = document.getElementById("expenseList");
  const childNode = `<li id=${myobj.expenseDescription}>${myobj.expenseAmount}-${myobj.expenseDescription}-${myobj.expenseCategory}
                        <button onclick=deleteExpense('${myobj.expenseDescription}')>Delete Expense</button>
                        <button onclick=editExpense('${myobj.expenseAmount}','${myobj.expenseDescription}','${myobj.expenseCategory}')>Edit Expense</button>
                      </li>`;
  parentNode.innerHTML = parentNode.innerHTML + childNode;
}
function deleteExpense(expenseDescription){
  localStorage.removeItem(expenseDescription);
  deleteExpenseFromScreen(expenseDescription);
}
function deleteExpenseFromScreen(expenseDescription){
  const parentNode = document.getElementById("expenseList");
  const childNodeToBeRemoved = document.getElementById(expenseDescription);
  if(childNodeToBeRemoved){
    parentNode.removeChild(childNodeToBeRemoved);
  }
}
function editExpense(expenseAmount, expenseDescription, expenseCategory){
  document.getElementById("amount").value = expenseAmount;
  document.getElementById("amountDescription").value = expenseDescription;
  document.getElementById("category").value = expenseCategory;
  deleteExpense(expenseDescription);
}