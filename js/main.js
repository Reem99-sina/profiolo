let navList = document.querySelector(".alex-nav-ul");
let hiddenIcon = document.querySelector(".div-parent");
hiddenIcon.addEventListener("click", function () {
    if (navList.dataset.display == "none") {
        navList.classList.add("style-small")
        $(".style-small").slideDown(500);
        navList.dataset.display = "block"
    } else {
        navList.classList.remove("style-small")
        $(".style-small").slideUp(500);
        navList.dataset.display = "none"
    }
})


var typed = new Typed('.hidden-appear', {
    strings: ['designer.', 'designer.', 'developer'],
    typeSpeed: 100,
    loop: true

});
// init Isotope
var dataSelect = $(".filter-button-group button");
$(dataSelect).click(function () {
    var dataButton = $(this).attr("data-filter");
    var buttonImg = $(".portifolo-img").className();
})

// var $grid = $('.grid').isotope({
//     // options
// });
// filter items on button click
$('.filter-button-group').on('click', 'button', function () {
    var filterValue = $(this).attr('data-filter');
    $grid.isotope({ filter: filterValue });
});
let rang = document.querySelector(".rang");
let elementCount = [...document.querySelectorAll(".team span")];

let started = false;
window.onscroll = function () {
    if (window.scrollY >= rang.offsetTop) {
        if (!started) {
            countNumber()
        }
        started = true;
    }
}

function countNumber() {
    elementCount.forEach(element => {
        let result = element.dataset.count;
        let count = setInterval(() => {
            if (element.textContent === result) {
                clearInterval(count)
            } else {
                element.textContent++;
            }
        }, 1000 / result)
    });
}
$(document).ready(function () {
    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 10,

        items: 1
    })
});
// with jQuery
var $grid = $('.grid').isotope({
    itemSelector: '.element-item',
    layoutMode: 'fitRows'
});
// filter functions
var filterFns = {
    // show if number is greater than 50
    numberGreaterThan50: function () {
        var number = $(this).find('.number').text();
        return parseInt(number, 10) > 50;
    },
    // show if name ends with -ium
    ium: function () {
        var name = $(this).find('.name').text();
        return name.match(/ium$/);
    }
};
// bind filter button click
$('.filters-button-group').on('click', 'button', function () {
    var filterValue = $(this).attr('data-filter');
    $('.filters-button-group').find('.special').removeClass('special');
    $(this).addClass('special');
    // use filterFn if matches value
    filterValue = filterFns[filterValue] || filterValue;
    $grid.isotope({ filter: filterValue });
});
// change is-checked class on buttons
$('.button-group').each(function (i, buttonGroup) {
    var $buttonGroup = $(buttonGroup);
    $buttonGroup.on('click', 'button', function () {
        $buttonGroup.find('.is-checked').removeClass('is-checked');
        $(this).addClass('is-checked');
    });
});
window.addEventListener("scroll", function () {
    if (this.window.scrollY < $(this.window).height() && this.window.scrollY >= $("#home").height()) {
        $(".alex-nav").css("position", "fixed")
        $(".alex-nav").css("background-color", "black")
    } else {
        $(".alex-nav").css("position", "sticky")
        $(".alex-nav").css("background-color", "transparent")
    }

})