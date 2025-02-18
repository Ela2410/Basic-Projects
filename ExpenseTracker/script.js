// DOM Elements
const expenseForm = document.getElementById('expenseForm');
const descriptionInput = document.getElementById('description');
const amountInput = document.getElementById('amount');
const categoryInput = document.getElementById('category');
const expenseList = document.getElementById('expenseList');
const totalAmountElement = document.getElementById('totalAmount');

let expenses = [];
let totalAmount = 0;

// Load expenses from localStorage
if (localStorage.getItem('expenses')) {
  expenses = JSON.parse(localStorage.getItem('expenses'));
  updateUI();
}

// Add Expense
expenseForm.addEventListener('submit', function (e) {
  e.preventDefault();

  const description = descriptionInput.value.trim();
  const amount = parseFloat(amountInput.value);
  const category = categoryInput.value;

  if (description && !isNaN(amount) && category) {
    const expense = {
      id: new Date().getTime(),
      description,
      amount,
      category,
    };

    expenses.push(expense);
    updateUI();
    saveToLocalStorage();
    expenseForm.reset();
  } else {
    alert('Please fill out all fields correctly.');
  }
});

// Delete Expense
expenseList.addEventListener('click', function (e) {
  if (e.target.tagName === 'BUTTON') {
    const expenseId = parseInt(e.target.parentElement.dataset.id);
    expenses = expenses.filter(expense => expense.id !== expenseId);
    updateUI();
    saveToLocalStorage();
  }
});

// Update UI
function updateUI() {
  expenseList.innerHTML = '';
  totalAmount = 0;

  expenses.forEach(expense => {
    const li = document.createElement('li');
    li.dataset.id = expense.id;
    li.innerHTML = `
      <span>${expense.description} - $${expense.amount} (${expense.category})</span>
      <button>Delete</button>
    `;
    expenseList.appendChild(li);
    totalAmount += expense.amount;
  });

  totalAmountElement.textContent = `$${totalAmount.toFixed(2)}`;
}

// Save to LocalStorage
function saveToLocalStorage() {
  localStorage.setItem('expenses', JSON.stringify(expenses));
}