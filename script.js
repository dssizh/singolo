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
        console.log('animation end')
        this.classList.remove('active', direction)
    })
}

function showItem(direction) {
    console.log('show item')
    items[currentItem].classList.add('next', direction)
    console.log('show item2')
    console.log(items[currentItem])
    // isEnabled = true;
    items[currentItem].addEventListener('animationend', function() {
        console.log('show item3')
        this.classList.remove('next', direction)
        this.classList.add('active')
        isEnabled = true;
    })
}

function changeCurrentItem(n) {
    // items[currentItem].classList.remove('active')
    currentItem = (n + items.length) % items.length;
    console.log(currentItem)
    // items[currentItem].classList.add('active');

    // let slider = document.querySelector('.slider');
    // if (slider.classList.contains('slider_new_background')) {
    //     slider.classList.remove('slider_new_background')
    // } else {
    //     slider.classList.add('slider_new_background')
    // }

    // let buttons = document.querySelectorAll('.button');
    // buttons.forEach((button)=> {
    //     if (button.classList.contains('button_new_background')) {
    //         button.style.setProperty('background-color', "#f06c64");
    //         button.classList.remove('button_new_background')
    //     } else {
    //         button.classList.add('button_new_background')
    //         button.style.setProperty('background-color', "#648BF0");
    //     }
    // })
}

document.querySelector('.left_button').addEventListener('click', function() {
    if (isEnabled) {
        previousItem(currentItem)
    }
    // changeCurrentItem(currentItem-1);
})

document.querySelector('.right_button').addEventListener('click', function() {
    if (isEnabled) {
        nextItem(currentItem)
    }
    // changeCurrentItem(currentItem+1)
})