// План работы:
// 1. Находим контейнер слайдера.
// 2. Находим кнопки правую и левую.
// 3. Находим массив картинок.
// 4. Через функцию по нажатию на кнопку меняем адрес 
//     первых трёх картинок.
var container = document.querySelector("#feedback-img-container")
var left = document.querySelector(".fa-angle-left")
var right = document.querySelector(".fa-angle-right")

var img = container.querySelectorAll("img")
var imgContainer = container.querySelector(".img-container")

var index = 0 //Индекс элемента в массиве
var value = 300 //Значение сдвига картинки.

//Действие пи нажатии левой стрелочки.
left.addEventListener('click', function() {
    index = img.length
    while (index > 0) {
        img[--index].style.transform = 'translateX(0)'
    }
    
})

//Действие при нажатии правой стрелочки.
right.addEventListener('click', function() {
    while (index < img.length) {
        img[index++].style.transform = 'translateX(-' + value + 'px)'
    }
    index = 0
    value += 300
    console.log(index)
})












console.log(imgContainer)

function newFunction() {
    imgContainer.appendChild(addNewImg);
}
