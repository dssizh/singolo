let links = document.querySelectorAll(".header_link")
links.forEach(link => {
    link.addEventListener("click", () => {
        event.preventDefault();
        const b = link.getAttribute('href')
        document.querySelector('' + b).scrollIntoView({
            behavior: "smooth",
            block: "start"
        })
    })

})

document.querySelectorAll(".button").forEach(button => {
    button.addEventListener('click', () => {

    })
})

let items = document.querySelectorAll('.item')
let currentItem = 0;
let isEnabled = true;

function previousItem(n) {
    hideItem('to-right')
    changeCurrentItem(n-1);
    showItem('from-left')
}

function nextItem(n) {
    hideItem('to-left')
    changeCurrentItem(n+1);
    showItem('from-right')
}

function hideItem(direction) {
    isEnabled = false;
    items[currentItem].classList.add(direction)
    items[currentItem].addEventListener('animationend', function() {
        this.classList.remove('active', direction)
    })
}

function showItem(direction) {
    items[currentItem].classList.add('next', direction)
    items[currentItem].addEventListener('animationend', function() {
        this.classList.remove('next', direction)
        this.classList.add('active')
        isEnabled = true;
    })
}

function changeCurrentItem(n) {
    currentItem = (n + items.length) % items.length;
}

document.querySelector('.left_button').addEventListener('click', function() {
    if (isEnabled) {
        previousItem(currentItem)
    }
})

document.querySelector('.right_button').addEventListener('click', function() {
    if (isEnabled) {
        nextItem(currentItem)
    }
})

function setBlack(source) {
    let name = source.target.offsetParent.getAttribute('black_screen_name')
    console.log(name);
    let blackScreen = document.querySelector(name)
    if (blackScreen.classList.contains('none_black')) {
        blackScreen.classList.remove('none_black')
    } else {
        blackScreen.classList.add('none_black')
    }
}

let slider_images = document.querySelectorAll('.slider_image');
slider_images.forEach(element => {
    element.addEventListener('click', setBlack)
});

function removeBlack(source){
    console.log(source);
    source.target.classList.add('none_black')
}

document.querySelectorAll('.black_screen').forEach(function(element){
    element.addEventListener('click', removeBlack)
    }
)