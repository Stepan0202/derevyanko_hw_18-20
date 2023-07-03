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
    identifire == 'firstButton' ? getUrl() : goToUrl(url);
});


function getUrl(){
     url = prompt('Enter your url, please');
    return goToUrl;
}
function goToUrl(){
    if(!url){
        alert ('At first, enter your URL please');
        return;
    }
    url.trim();
    if(url.substring(0, 4) != 'http'){
        url = 'http://' + url;
    }
    window.open(url, '_blank')// i cold use  document.location.assign(url). But it open url in the same tab. 
}


// Вивести таблицю 10 × 10, заповнену числами від 1 до 100 (таблиця створюється динамічно)
const hw18_t3_container = document.createElement('div');
const hw18_t3_table = document.createElement('table');
const hw18_t3_tr = document.createElement('tr');
const hw18_t3_th = document.createElement('th');

hw18_t3_container.style.paddingTop = "2em";
hw18_t3_container.appendChild(hw18_t3_table);
hw_18_container.appendChild(hw18_t3_container);
let th = document.createElement('th');
th.style.border = "1px solid black";
th.style.textAlign = "center";
th.style.width = '30px';

for (let i = 1; i <= 10; i++){
    let tr = document.createElement('tr');
    for (let j = 1; j <= 10; j++){
        let cell = th.cloneNode();
        cell.textContent = j+(i-1)*10;
        tr.appendChild(cell);
    }
    hw18_t3_table.appendChild(tr);
}
const hw18_t3_oddRows = hw18_t3_table.querySelectorAll('tr:nth-child(odd)');
hw18_t3_oddRows.forEach(row => {
    row.style.backgroundColor = "#999";
    row.style.color = "#fff";
});
const hw18_t3_evenRows = hw18_t3_table.querySelectorAll('tr:nth-child(even)');
hw18_t3_evenRows.forEach(row => {
    row.style.backgroundColor = "#1d3";
    row.style.color = "#eee";
});

// У папці images є зображення 1.jpg, 2.jpg, 3.jpg, 4.jpg, 5.jpg, 6.jpg, 7.jpg, 8.jpg, 9.jpg. Вивести зображення з цієї папки отримане випадковим чином (Math.random)
const hw18_t4_container = document.createElement('div');
const hw18_t4_image = document.createElement('img');
const hw18_t4_button = document.createElement('button');

hw_18_container.appendChild(hw18_t4_container);
hw18_t4_container.appendChild(hw18_t4_image);
hw18_t4_container.appendChild(hw18_t4_button);
let randomNum = Math.floor(Math.random()*9+1);
let imgSrc = `img/${randomNum}.jpg`
hw18_t4_image.setAttribute('src', imgSrc);
hw18_t4_button.textContent = "Get random image";
hw18_t4_button.addEventListener('click', () => {
    let randomNum = Math.floor(Math.random()*9+1);
    imgSrc = `img/${randomNum}.jpg`;
    console.log(randomNum);
    hw18_t4_image.setAttribute('src', imgSrc);
})