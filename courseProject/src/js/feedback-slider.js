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


index = 0

left.addEventListener('click', function() {
    if (index < 4) {
        var currect = img[index]
        var newImg = document.createElement('img')
        img[index].style.transform = 'translateX(-290px)'  
        img[index].remove()
        currect.style.transform = 'translateX(0)'
        imgContainer.insertAdjacentElement('beforeend', newImg)
        index++
        newImg.src = 'img/letter' + index + '.png'
    }
})

right.addEventListener('click', function() {
    if (index == 0) {
        index = 4 
    }
    if (index > 0) {
        index--
        var currect = img[index]
        var newImg = document.createElement('img')
        img[index].style.transform = 'translateX(290px)'  
        img[index].remove()
        currect.style.transform = 'translateX(0)'
        imgContainer.insertAdjacentElement('afterbegin', newImg)
        newImg.src = 'img/letter' + (index + 1) + '.png'
    }
})












console.log(imgContainer)

function newFunction() {
    imgContainer.appendChild(addNewImg);
}
