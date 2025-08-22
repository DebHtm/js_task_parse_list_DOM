'use strict';

const list = [...document.querySelectorAll('li')];
const listItems = document.querySelectorAll('li');
const listParent = listItems[0].parentElement;

function sorting(items) {
  return [...items].sort((a, b) => {
    const aSalary = Number(a.dataset.salary.replace(/[$,]/g, ''));
    const bSalary = Number(b.dataset.salary.replace(/[$,]/g, ''));

    return bSalary - aSalary;
  });
}

function sortName(parentEl, sortedItems) {
  parentEl.innerHTML = '';
  sortedItems.forEach((li) => parentEl.appendChild(li));
}

const sortedArr = sorting(list);

sortName(listParent, sortedArr);
