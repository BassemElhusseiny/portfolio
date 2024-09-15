const navbar=document.querySelector("header .hed-nav");
const navbarOff=navbar.offsetTop;
window.onscroll=()=>{

     if (window.pageYOffset >navbarOff) {
      navbar.classList.add("navbarFixed")
    } else {
      navbar.classList.remove("navbarFixed");
    }


}




window.onscroll = function() {
  var scrollButton = document.getElementById("scrollButton");
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
      scrollButton.classList.add("show");
      scrollButton.classList.remove("hide");
  } else {
      scrollButton.classList.add("hide");
      scrollButton.classList.remove("show");
  }
};


function scrollToTop() {
  window.scrollTo({top: 0, behavior: 'smooth'});
}
