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
	
//frequently asked questions section

const items = document.querySelectorAll(".accordion-btn")
items.forEach(item => item.addEventListener("click", function(){
    const itemToggle = this.getAttribute('aria-expanded');
    for(i=0; i<items.length; i++){
        items[i].setAttribute('aria-expanded','false')
        if(itemToggle=='false'){
            this.setAttribute('aria-expanded', 'true')
        }
    }
}))



