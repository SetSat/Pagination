const paginationContainer = document.createElement('div');
paginationContainer.classList.add('pagination-container');

const paginationList = document.createElement('ul');
paginationList.classList.add('pagination-list');

for (let i = 1; i <= 10; i++) {
  const listItem = document.createElement('li');
  listItem.classList.add('pagination-item');
  listItem.textContent = i;
  paginationList.appendChild(listItem);
}

paginationContainer.appendChild(paginationList);

document.body.appendChild(paginationContainer);
