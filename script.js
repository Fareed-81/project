// header start 
const menu=document.querySelector('#menu-btn');
const navbar=document.querySelector('.navbar');

menu.onclick = () => {
  menu.classList.toggle('fa-times');
  navbar.classList.toggle('active');

}

window.onscroll = () => {
 
  if(window.scrollY > 0){
    document.querySelector('.header').classList.add('active');
  }else{
    document.querySelector('.header').classList.remove('active');
  }
  menu.classList.remove('fa-times');
  navbar.classList.remove('active');
}
window.onload = () =>{
 
  if(window.scrollY > 0){
    document.querySelector('.header').classList.add('active');
  }else{
    document.querySelector('.header').classList.remove('active');
  }
  
}

// header end

// swiper section start 
var swiper = new Swiper (".vehicals-slider", {
  slidesPerView: 1,
  spaceBetween: 20,
  loop:true,
  grabCursor:true,
  centeredSlides:true,
  autoplay: {
  delay: 9500,
  disableOnInteraction: false,
  },
  pagination: {
  el: ".swiper-pagination",
  clickable: true,
  },
  breakpoints: {
  0: {
  slidesPerView: 1,
  },
  768: {
      slidesPerView: 2,
  },
  991: {
      slidesPerView: 3,
  },
},
});




var swiper = new Swiper (".featured-slider", {
  slidesPerView: 1,
  spaceBetween: 20,
  loop:true,
  grabCursor:true,
  centeredSlides:true,
  autoplay: {
      delay: 4000,
      disableOnInteraction: false,
      },

  breakpoints: {
  0: {
  slidesPerView: 1,
  },
  768: {
      slidesPerView: 2,
  },
  991: {
      slidesPerView: 3,
  },
},
});

var swiper = new Swiper (".reviews-slider", {
  slidesPerView: 1,
  spaceBetween: 20,
  loop:true,
  grabCursor:true,
  centeredSlides:true,
  autoplay: {
      delay: 4000,
      disableOnInteraction: false,
      },
      pagination:{
        el : ".swiper-pagination",
        clickable:true
      },

  breakpoints: {
  0: {
  slidesPerView: 1,
  },
  768: {
      slidesPerView: 2,
  },
  991: {
      slidesPerView: 3,
  },
},
});

// faqs section start 

const faqhead =document.querySelectorAll(".container .faq-header");

faqhead.forEach((header,i) => {
  header.addEventListener("click", ( ) =>{
   header.nextElementSibling.classList.toggle("active");
   
   const open =header.querySelector(".open");
   const close =header.querySelector(".close");
   if(header.nextElementSibling.classList.contains("active")){
    open.classList.remove("active");
    close.classList.add("active");
   }else{
    open.classList.add("active");
    close.classList.remove("active");
   }



  });


});

// faqs section end 



   
   
   
   
  //  function changeBg(){
  //   var navbar =document.getElementById('navbar');
  //   var scrollValue = window.scrollY;
  //   if(scrollValue < 600 ){
  //      navbar.classList.remove('bgcolor')
  //  }else{
  //      navbar.classList.add('bgcolor')
  //  }
  //   // console.log(scrollValue)
  // }

  // window.addEventListener('scroll',changeBg);



//   search bar start..

$(document).ready(function() {
    $('#search-button').click(function() {
      var searchQuery = $('#search-input').val();
      alert('Search query: ' + searchQuery);
      console.log('hi...')
    });
  });

//   search bar end...




// contactUs  section start...

document.querySelector('#contact-form').onclick =() =>{
  document.querySelector('.contact').classList.toggle('active');
}
document.querySelector('#close-contact-form').onclick =() =>{
  document.querySelector('.contact').classList.remove('active');
}





// function validForm(){
//   // alert('ok')

//   var Name = document.custom_form.Name;
//   const phone = document.custom_form.phone;
//   const email = document.custom_form.email;
//   const message = document.custom_form.message;

//   if(Name.value ==""){
//     Name.nextElementSibling.style.display = "block";
//     Name.style.border_bottom = "1px solid red";
//     return false
//   }else{
//     Name.nextElementSibling.style.display = "none";
//     Name.style.border_bottom = "1px solid transparent";
//   }

// }
//  var sendbtn = document.getElementById('send');
//  sendbtn.addEventListener('click',function(e){
//        e.preventDefault()
//        console.log(('hi'));
//  var Name = document.getElementById('name').value;
//  var Phone = document.getElementById('phone').value;
//  var Email  = document.getElementById('email').value;
//  var Message = document.getElementById('message').value;
//  var body = 'name:' + Name + '<br/> email:' + Email + '<br/> phone:'
//   + Phone + '<br/> message:' + Message ;


//  Email.send({
//   SecureToken : " 696c8d8f-472b-4d4f-a4e1-3b93c57bf8f4 ",
//   To : 'zebakhtiyar786@gmail.com',
//   From : "zebakhtiyar789@gmail.com",
//   Subject : "Contact Message",
//   Body : body

// }).then(
// message => alert(message)
// );

//  })


// contactUs  section end...


// C110D69204A7E7E9FED654ADAD3784B42A41
