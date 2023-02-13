function changeDirectionMenu() {
  const divVertical = document.querySelector('div.btn-group-vertical');
  divVertical.className = 'btn-group-horizontal';
}

function modifyHeader() {
  const header = document.querySelector('div.jumbotron');
  header.classList.add('text-white', 'bg-secondary', 'text-right');
  
  const button = header.querySelector('a.btn-primary');
  button.classList.remove('btn-primary');
  button.classList.add('btn-success');
}

function orderCards() {
  const cards = document.querySelectorAll('.col-lg-3');
  cards[3].classList.add('order-1');
  cards[0].classList.add('order-2');
  cards[2].classList.add('order-3');
  cards[1].classList.add('order-4');
  
  const button = cards[0].querySelector('div.card-body > a.btn-primary')
  button.classList.remove('btn-primary');
  button.classList.add('btn-success');
}

function addItemList() {
  const ul = document.querySelector('ul.list-group');
  const li3 = document.createElement('li');
  const li4 = document.createElement('li');
  ul.appendChild(li3).classList.add('list-group-item');
  ul.appendChild(li4).classList.add('list-group-item');
  
  const  uls = ul.querySelectorAll('li.list-group-item');
  uls[0].classList.remove('active');
  uls[3].innerHTML = 'Quarto item';
  uls[3].classList.add('active');
  uls[4].innerHTML = 'Quinto item';
}

changeDirectionMenu();
modifyHeader();
orderCards()
addItemList()