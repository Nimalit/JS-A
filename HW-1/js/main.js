const products = [
    { id: 1, title: 'Notebook', price: 2000, img: 'img/Notebook.png' },
    { id: 2, title: 'Mouse', price: 20, img: 'img/mouse.png' },
    { id: 3, title: 'Keyboard', price: 200, img: 'img/keyboard.png' },
    { id: 4, title: 'Gamepad', price: 50, img: 'img/gamepad.png' },
];
//Функция для формирования верстки каждого товара
//Добавить в выводе изображение
const renderProduct = (item) => {
    return `<div class="product-item">
                <img class=icon src='${item.img}'>
                <h3 class=textName>${item.title}</h3>
                <p class=textCena>Цена: ${item.price}рублей</p>
                <button class="buy-btn">Купить</button>
            </div>`
};
const renderPage = list => {
    const productsList = list.map(item => renderProduct(item));
    console.log(productsList);
    // Причина в том что при выводе получается строка, в которой отображается
    // все знаки препинания, убрать можно через join
    document.querySelector('.products').innerHTML = productsList.join('');
};

renderPage(products);