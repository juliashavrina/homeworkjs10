// 1. Ко всем элементам, имеющим класс "dropdown-item"
// добавить еще один класс
//     "super-dropdown", необходимо использовать методы forEach и querySelectorAll и
// свойство classList у элементов.
// const dropdownEl = document.querySelectorAll('.dropdown-item');
// console.log(dropdownEl);
// dropdownEl.forEach(element => {
//     element.classList.add('super-dropdown')
// });
// 2. У элемента с классом btn необходимо убрать класс "btn-secondary", если он
// присутствует у этого элемента, либо добавить, если такого класса у элемента
// не было.
// const btnEl = document.querySelector('.btn');
// btnEl.classList.toggle('btn-secondary');
// 3. Необходимо удалить класс "dropdown-menu"
// у элемента, у которого
// присутствует класс "menu".
// const dropmenuEl = document.querySelector('.menu');
// dropmenuEl.classList.remove('dropdown-menu');
// 4. Используя метод insertAdjacentHTML добавьте после div 'a с классом"dropdown"
// следующую разметку: < a href = "#" > link < /a>
// const dropdownEl = document.querySelector('.dropdown');
// dropdownEl.nextElementSibling.insertAdjacentHTML('afterBegin', '<a href="#">link</a>');
// 5. У элемента с id "dropdownMenuButton"
// замените id на "superDropdown".
// const menudropEl = document.querySelector('#dropdownMenuButton');
// menudropEl.id = 'superDropdown';
// 6. Добавьте атрибут data-dd со значением 3 элементу у которого существует
//     атрибут "aria-labelledby" равный "dropdownMenuButton" используя dataset.
// const atribuetEL = document.querySelector('[aria-labelledby="dropdownMenuButton"');
// const dataEl = atribuetEL.setAttribute('data-dd', '3')
// 7. Удалите атрибут type у элемента с классом "dropdown-toggle".
// const newEL = document.querySelector('.dropdown-toggle');
// newEL.removeAttribute('type')