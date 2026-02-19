document.addEventListener('DOMContentLoaded', function() {
    // Массив данных для блоков
    const blocksData = [
        { id: 1, category: 'red', number: 1 },
        { id: 2, category: 'blue', number: 2 },
        { id: 3, category: 'green', number: 3 },
        { id: 4, category: 'yellow', number: 4 },
        { id: 5, category: 'purple', number: 5 },
        { id: 6, category: 'red', number: 6 },
        { id: 7, category: 'blue', number: 7 },
        { id: 8, category: 'green', number: 8 },
        { id: 9, category: 'yellow', number: 9 },
        { id: 10, category: 'purple', number: 10 },
        { id: 11, category: 'red', number: 11 },
        { id: 12, category: 'blue', number: 12 }
    ];

    // Контейнер для блоков
    const blocksContainer = document.querySelector('.blocks-container');
    
    // Кнопки фильтров
    const filterButtons = document.querySelectorAll('.filter-btn');
    
    // Функция для отображения всех блоков
    function displayBlocks(blocks) {
        blocksContainer.innerHTML = '';
        
        blocks.forEach(block => {
            const blockElement = document.createElement('div');
            blockElement.className = `block ${block.category}`;
            blockElement.dataset.category = block.category;
            
            // Русские названия для категорий
            const categoryNames = {
                red: 'Красный',
                blue: 'Синий',
                green: 'Зеленый',
                yellow: 'Желтый',
                purple: 'Фиолетовый'
            };
            
            blockElement.innerHTML = `
                <div class="block-number">${block.number}</div>
                <div class="block-category">${categoryNames[block.category]}</div>
            `;
            
            blocksContainer.appendChild(blockElement);
        });
    }
    
    // Инициализация - отображение всех блоков
    displayBlocks(blocksData);
    // Обработчики событий для кнопок фильтрации
    filterButtons.forEach(button => {
        
        button.addEventListener('click', function() {
            // Удаляем активный класс со всех кнопок
            filterButtons.forEach(btn => btn.className = 'filter-btn');

         if (this.getAttribute('data-filter') == 'red'){
                this.classList.add('activer');
            } 

            if (this.getAttribute('data-filter') == 'blue'){
                this.classList.add('activeb');
            } 

            if (this.getAttribute('data-filter') == 'green'){
                this.classList.add('activeg');
            } 

            if (this.getAttribute('data-filter') == 'yellow'){
                this.classList.add('activey');
            } 

             if (this.getAttribute('data-filter') == 'purple'){
                this.classList.add('activep');
            } 

            if (this.getAttribute('data-filter') == 'all'){
                this.classList.add('active');
            }

            
            // Получаем фильтр из data-атрибута
            const filter = this.dataset.filter;
            
            // Фильтруем блоки
            let filteredBlocks;
            if (filter === 'all') {
                filteredBlocks = blocksData;
            } else {
                filteredBlocks = blocksData.filter(block => block.category === filter);
            }
            
            // Отображаем отфильтрованные блоки
            displayBlocks(filteredBlocks);
        });
    });
    
   // Добавляем небольшую анимацию при загрузке страницы
    setTimeout(() => {
        document.querySelectorAll('.block').forEach((block, index) => {
            setTimeout(() => {
                block.style.opacity = '0';
                block.style.transform = 'translateY(20px)';
                
                setTimeout(() => {
                    block.style.transition = 'opacity 1s ease, transform 1s ease';
                    block.style.opacity = '1';
                    block.style.transform = 'translateY(0)';
                }, 100);
            }, index * 50);
        });
    }, 300);
});





 



