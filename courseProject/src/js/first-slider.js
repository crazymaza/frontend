$(function() {
    var img1 = $('#img1')
    var img2 = $('#img2')
    var img3 = $('#img3')
    var li = document.getElementsByClassName('first-block__pic')
    var liArr = (li.length)

    var changeOpacity = function() {
        for (let index = 0; index < li.length; index++) {
            var img = li[index].children[0]
            // img.css('opacity', 0)
            // console.log(li[index].children[0])
        }
    
        // img1.css('opacity', 0)
        // img2.css('opacity', 1)
        // img3.css('opacity', 0)
    }

    setInterval(changeOpacity , 1000)
})