

/*=============== CHANGE BACKGROUND HEADER ===============*/
const scrollHeader = () =>{
    const header = document.getElementById('header')
    // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
    this.scrollY >= 50 ? header.classList.add('scroll-header') 
                       : header.classList.remove('scroll-header')
}       
window.addEventListener('scroll', scrollHeader)      ; 

                                   //   service_model
// const modelveiws = document.querySelectorAll('.services_model');
// modelbtns = document.querySelectorAll('.services_button'); 
// modelclose = document.querySelectorAll('.services_model-close');

// let model = function(modalclick){
//     modelveiws[modalclick].classList.add('active-model')
// }

// modelbtns.forEach((mb,i) => {
//     mb.addEventlistener('click', () =>{
//         model(i)
//     })
// })

// modelclose.forEach((mc) => {
//    mc.addEventlistener('click' , ()=>{
//     modelveiws.forEach((mc) =>{
//         mv.classList.remove('active-model')
//     })
//    }) 
// })
const modalViews = document.querySelectorAll('.services_model'),
      modalBtns = document.querySelectorAll('.services_button'),
      modalClose = document.querySelectorAll('.services_model-close')

let modal = function(modalClick){
  modalViews[modalClick].classList.add('active-modal')
}

modalBtns.forEach((mb, i) =>{
mb.addEventListener('click', () =>{
modal(i)
})
})

modalClose.forEach((mc) =>{
mc.addEventListener('click', () =>{
modalViews.forEach((mv) =>{
mv.classList.remove('active-modal')
})
})
})

                          // mixupti3 filter 

                          
let mixerportfolio = mixitup('.work_container', {
    selectors: {
        target: '.Work_card'
    },
    animation: {
        duration: 300
    }
});       
                //   link active work

const linkwork = document.querySelectorAll('.work_items')

function activeWork(){
    linkwork.forEach( l => l.classList.remove('active-work') )
    this.classList.add('active-work')
}

linkwork.forEach(l => l.addEventListener('click' ,activeWork))


 //  SWIPER TESTIMONAIL
 
let swipertestimonial = new Swiper(".testimonial_container ", {
    spaceBetween: 24,
    loop:true,
    grabCursor:true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
        576: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 48,
        },
    },
    
  });
        
/* scroll section active link */


  const sections = document.querySelectorAll('section[id]')
    
const scrollActive = () =>{
  	const scrollY = window.pageYOffset

	sections.forEach(current =>{
		const sectionHeight = current.offsetHeight,
			  sectionTop = current.offsetTop - 58,
			  sectionId = current.getAttribute('id'),
			  sectionsClass = document.querySelector('.nav_menu a[href*=' +
               sectionId + ']')

		if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
			sectionsClass.classList.add('active-link')
		}else{
			sectionsClass.classList.remove('active-link')
		}                                                    
	})
}
window.addEventListener('scroll', scrollActive)

// LIGHT DARK MODE 

// const themeButton = document.getElementById('theme-button')
// const lightTheme = 'light-theme'
// const iconTheme = 'bx-sun'

// // Previously selected topic (if user selected)
// const selectedTheme = localStorage.getItem('selected-theme')
// const selectedIcon = localStorage.getItem('selected-icon')

// // We obtain the current theme that the interface has by validating the dark-theme class
// const getCurrentTheme = () => document.body.classList.contains(lightTheme) ? 'dark' : 'light'
// const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'bx bx-moon' : 'bx bx-sun'

// // We validate if the user previously chose a topic
// if (selectedTheme) {
//   // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
//   document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](lightTheme)
//   themeButton.classList[selectedIcon === 'bx bx-moon' ? 'add' : 'remove'](iconTheme)
// }

// // Activate / deactivate the theme manually with the button
// themeButton.addEventListener('click', () => {
//     // Add or remove the light / icon theme
//     document.body.classList.toggle(lightTheme)
//     themeButton.classList.toggle(iconTheme)
//     // We save the theme and the current icon that the user chose
//     localStorage.setItem('selected-theme', getCurrentTheme())
//     localStorage.setItem('selected-icon', getCurrentIcon())
// })
               
                // scroll reveal animation

const sr = ScrollReveal({
  origin: 'top',
  distance: '60px',
  duration: 2500,
  delay:400,
  // reset:true
})                

sr.reveal(`.home_data`)
sr.reveal(`.home_handle` , {delay:700})
sr.reveal(`.home_social,.home_scroll`, {delay:900, origin:'bottom'})
sr.reveal(`.home_data`)