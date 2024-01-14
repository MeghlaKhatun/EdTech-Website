// header section

const menuBar = document.querySelector('.fa-bars');
const menu = document.querySelector('.menu');
menuBar.addEventListener('click', ()=>{
	menu.classList.toggle("active")
})

// banner section
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
	dots:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})
		




