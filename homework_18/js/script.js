'use strict'
// Є текстове поле на сторінці. При фокусі на цьому полі збоку з'являється <div> з інформацією. При зникненні фокуса - так само пропадає
const hw_18_input = document.createElement('input');
const hw_18_container = document.querySelector('.container');
const hw_18_hidenDiv = document.createElement('div');
hw_18_hidenDiv.style.visibility = 'hidden';
hw_18_hidenDiv.style.display = 'inline-block';
hw_18_hidenDiv.style.marginLeft = '30px';
hw_18_hidenDiv.textContent = "Some div that showed when input is on focus";
hw_18_input.setAttribute('type', 'text');
hw_18_container.appendChild(hw_18_input);
hw_18_container.appendChild(hw_18_hidenDiv);
hw_18_input.addEventListener('focus', () => {
    hw_18_hidenDiv.style.visibility = "visible";
    hw_18_input.style.border = "2px solid green";
})
hw_18_input.addEventListener('blur', () => {
    hw_18_hidenDiv.style.visibility = "hidden";
   
})
// На сторінці є дві кнопки. При натисканні на першу кнопку просимо користувача ввести в prompt посилання, при натисканні на другу - переадресовується на інший сайт (за раніше введеним посиланням). Реалізувати перевірку на http/https. Якщо протокол не вказано - додаємо
const hw18_t2_container = document.createElement('div');
const hw18_t2_firstButton = document.createElement('button');
const hw18_t2_secondButton = document.createElement('button');
let url;
hw18_t2_container.appendChild(hw18_t2_firstButton);
hw18_t2_container.appendChild(hw18_t2_secondButton);
hw18_t2_container.style.paddingTop = "2em"
hw_18_container.appendChild(hw18_t2_container);

hw18_t2_firstButton.textContent = 'SET URL';
hw18_t2_firstButton.dataset['identifire'] = 'firstButton';
hw18_t2_secondButton.textContent = "VISIT URL";
hw18_t2_secondButton.dataset['identifire'] = 'secondButton';
hw18_t2_container.addEventListener('click', (event) => {
    const identifire = event.target.dataset.identifire; 
    identifire == 'firstButton' ? url = getUrl() : goToUrl(url);
})

function getUrl(){
    return prompt('Enter your url, please');
}
function goToUrl(url){
    if(!url){
        alert ('At first, enter your URL please');
        return;
    }
    url.trim();
    if(url.substring(0, 4) != 'http'){
        url = 'http://' + url;
    }
    document.location.assign(url);
}
// Вивести таблицю 10 × 10, заповнену числами від 1 до 100 (таблиця створюється динамічно)

// У папці images є зображення 1.jpg, 2.jpg, 3.jpg, 4.jpg, 5.jpg, 6.jpg, 7.jpg, 8.jpg, 9.jpg. Вивести зображення з цієї папки отримане випадковим чином (Math.random)