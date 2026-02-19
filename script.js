// ========== КРИТИЧЕСКИ ПЛОХОЙ JS ==========
// Здесь полно ошибок, но сайт "вроде работает"

let cart = [];
let cartVisible = false;

// Функция добавления в корзину
function addToCart(name, price) {
    // Проблема 3: Добавляется всегда один и тот же товар с багом
    let item = {
        name: name,
        price: price,
        quantity: 1
    };
    
    // ОШИБКА: Не проверяем, есть ли уже такой товар в корзине
    cart.push(item);
    
    // Проблема 4: Счетчик обновляется, но показывает общее количество позиций, а не сумму quantity
    document.getElementById('cart-count').textContent = cart.length;
    
    // Проблема 5: Попытка показать корзину, но она скрыта из-за условия
    if (!cartVisible) {
        document.getElementById('cartDetails').style.display = 'block';
        cartVisible = true;
    }
    
    // ОШИБКА: Не обновляем список товаров в корзине сразу
    // alert("Товар добавлен!"); // Даже этого нет
    
    // Пытаемся обновить отображение (но функция с ошибкой)
    updateCartDisplay();
}

function updateCartDisplay() {
    let cartList = document.getElementById('cartItems');
    let totalSpan = document.getElementById('cartTotal');
    
    if (!cartList || !totalSpan) return;
    
    cartList.innerHTML = ''; // Очищаем
    
    // Проблема 6: Если корзина пуста, но блок виден
    if (cart.length === 0) {
        cartList.innerHTML = '<li>Корзина пуста</li>';
        totalSpan.textContent = '0';
        return;
    }
    
    let total = 0;
    for (let i = 0; i <= cart.length; i++) { // ОШИБКА: Индекс выходит за границы (i <= length)
        let item = cart[i];
        // Здесь будет ошибка, когда i станет равно cart.length (undefined)
        let li = document.createElement('li');
        li.textContent = `${item.name} - ${item.price} руб. x ${item.quantity}`;
        cartList.appendChild(li);
        total += item.price * item.quantity;
    }
    
    totalSpan.textContent = total;
}

// Калькулятор скидки
function calculateDiscount() {
    let input = document.getElementById('orderAmount');
    let resultP = document.getElementById('discountResult');
    
    // Проблема 7: Поле ввода текстовое, а не число
    let amount = input.value;
    
    // Проблема 8: Сравниваем строку с числом и используем неправильную логику
    if (amount > 5000) { // Строка '10000' > 5000? В JS да, но это неявное приведение
        resultP.textContent = 'Скидка: 15%';
    } else if (amount = 2000) { // ОШИБКА: Присваивание вместо сравнения!
        resultP.textContent = 'Скидка: 10%';
    } else if (amount > 1000) {
        resultP.textContent = 'Скидка: 5%';
    } else {
        resultP.textContent = 'Скидка: 0%';
    }
    
    // Проблема 9: Не учитываем, что пользователь может ввести "две тысячи"
}

// Подписка на новости
function subscribe() {
    let emailInput = document.getElementById('emailInput');
    let messageP = document.getElementById('subscribeMessage');
    let email = emailInput.value;
    
    // Проблема 10: Очень слабая валидация
    if (email.length > 0) {
        // Проверка на "@" вообще никакая
        messageP.textContent = 'Спасибо за подписку!';
        messageP.style.color = 'green';
        
        // Проблема 11: Инпут не очищается, можно натыкать миллион подписок
        // emailInput.value = ''; // Забыли очистить
        
        // Проблема 12: Нет проверки на дубликаты (но это уже сложнее)
    } else {
        messageP.textContent = 'Ошибка в email';
        messageP.style.color = 'red';
    }
}

// Проблема 13: Uncaught TypeError при попытке добавить товар, 
// когда корзина пуста (из-за цикла в updateCartDisplay)

// Проблема 14: Кнопка "Рассчитать скидку" ломается при вводе букв
// Потому что amount > 5000 сработает для букв? Нет, буквы вернут NaN
