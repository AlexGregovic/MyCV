window.addEventListener("scroll", function(){
    const header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
    });

    const projectModals = document.querySelectorAll(".project-modal");
    const learnmoreBtns = document.querySelectorAll(".learn-more-btn");
    const modalCloseBtns = document.querySelectorAll(".modal-close-btn");

    var modal = function(modalClick){
        projectModals[modalClick].classList.add("active");
    }

    learnmoreBtns.forEach((learnmoreBtn, i) => {
        learnmoreBtn.addEventListener("click", () => {
            modal(i);
        });
    });

    modalCloseBtns.forEach((modalCloseBtn) => {
        modalCloseBtn.addEventListener("click", () => {
            projectModals.forEach((modalView) => {
                modalView.classList.remove("active");
            });
        });
    });


    //scrool btn
 
    const scrollTopBtn = document.querySelector(".scrollToTop-btn");
    window.addEventListener("scroll", function(){
        scrollTopBtn.classList.toggle("active", window.scrollY > 500);
    });

    scrollTopBtn.addEventListener("click", () => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    });

    window.addEventListener("scroll", () => {
        const sections = document.querySelectorAll("section");
        const scrollY = window.pageYOffset;
      
        sections.forEach(current => {
          let sectionHeight = current.offsetHeight;
          let sectionTop = current.offsetTop - 50;
          let id = current.getAttribute("id");
      
          if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector(".nav-items a[href*='" + id +"']").classList.add("active");
          } else {
            document.querySelector(".nav-items a[href*='" + id +"']").classList.remove("active");
          }
        });
      
        // Toggle scroll-to-top button
        scrollTopBtn.classList.toggle("active", window.scrollY > 500);
      });
      

    //Light Dark theme

    let themeBtn;
  
  document.addEventListener("DOMContentLoaded", () => {
    themeBtn = document.querySelector(".theme-btn");
    themeBtn.addEventListener("click", () => {
      document.body.classList.toggle("dark-theme");
      themeBtn.classList.toggle("sun");
  
      localStorage.setItem("saved-theme", getCurrentTheme());
      localStorage.setItem("saved-icon", getCurrentIcon());
    
  });
  
 
  

  const getCurrentTheme = () => document.body.classList.contains("dark-theme") ? "dark" : "light";
  const getCurrentIcon = () => themeBtn.classList.contains("sun") ? "sun" : "moon";

  const savedTheme = localStorage.getItem("saved-theme");
  const savedIcon = localStorage.getItem("saved-icon");

  if(savedTheme){
    document.body.classList[savedTheme === "dark" ? "add" : "remove"]("dark-theme");
    themeBtn.classList[savedIcon === "sun" ? "add" : "remove"]("sun");
  }
});


//Animation Effect
ScrollReveal({
    reset: true,
    distance: "60px",
    duration: 2500,
    delay: 100
});

ScrollReveal().reveal(".home .info h2, .section-title-01, .section-title-02" , { delay: 500, origin: "left"});
ScrollReveal().reveal(".home .info h3 , .home .info p, .about-info .btn", { delay: 600, origin: "right"});
ScrollReveal().reveal(".home .info .btn" , { delay: 700, origin: "bottom"});
ScrollReveal().reveal(".media-icons .i, .contact-left li" , { delay: 500, origin: "left", interval:200});

//Mouse Effect
var body=document.body;

document.addEventListener("mousemove",(e)=>{
    var elem=document.createElement("div");
    elem.setAttribute("class","trail")
    elem.setAttribute("style", `left: ${e.clientX - 10}px; top: ${e.clientY - 10}px;`);


    elem.onanimationend=()=>{
        elem.remove();
    }

    body.insertAdjacentElement("beforeend",elem);
});





function showMessage() {
    alert("Thank you for your message");
  }