$(document).ready(function(){
  $('.preloader').addClass('stop'); 
  
  new WOW().init();
  
  
  $("#Phone").mask("+7(999) 999-9999");
  
  $('form').submit(function(event){
    
    if ($("#Phone").val() == "" || $("#name").val() == "" || $("#selectID").val() == ""){
      event.preventDefault();
      alert("Пожалуйста, заполните все поля!")
    };
  });
  $('form').submit(function(event){
    event.preventDefault();
    
    $.ajax({
      type: "POST",
      url: "php/mail.php",
      data: $(this).serialize()
    }).done(function (){
      $(this).find("input").val("");
      alert("Успешно отправлено!");
      $("form").trigger("reset");
    });
    return false;
  });
 
 
  
});


document.addEventListener("DOMContentLoaded", function() {
  var lazyloadImages;    

  if ("IntersectionObserver" in window) {
    lazyloadImages = document.querySelectorAll(".lazy");
    var imageObserver = new IntersectionObserver(function(entries, observer) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          var image = entry.target;
          image.src = image.dataset.src;
          image.classList.remove("lazy");
          imageObserver.unobserve(image);
        }
      });
    });

    lazyloadImages.forEach(function(image) {
      imageObserver.observe(image);
    });
  } else {  
    var lazyloadThrottleTimeout;
    lazyloadImages = document.querySelectorAll(".lazy");
    
    function lazyload () {
      if(lazyloadThrottleTimeout) {
        clearTimeout(lazyloadThrottleTimeout);
      }    

      lazyloadThrottleTimeout = setTimeout(function() {
        var scrollTop = window.pageYOffset;
        lazyloadImages.forEach(function(img) {
            if(img.offsetTop < (window.innerHeight + scrollTop)) {
              img.src = img.dataset.src;
              img.classList.remove('lazy');
            }
        });
        if(lazyloadImages.length == 0) { 
          document.removeEventListener("scroll", lazyload);
          window.removeEventListener("resize", lazyload);
          window.removeEventListener("orientationChange", lazyload);
        }
      }, 20);
    }

    document.addEventListener("scroll", lazyload);
    window.addEventListener("resize", lazyload);
    window.addEventListener("orientationChange", lazyload);
  }
})


