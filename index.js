const viewMoreButton = document.querySelector('.view-more')
const arrayofBlogs = document.querySelectorAll(".blogs")
const humburgerMenu = document.querySelector(".hamburger-menu-btn")
const navigationMenu = document.querySelector(".navigation-header")
const hamburger =document.querySelector(".hamburger");
const navmenu= document.querySelector(".nav-menu")
const mainContainer = document.querySelector(".main-container")
const imageHomecontainer = document.querySelector(".main-img")

viewMoreButton.addEventListener('click', function(){
      
    for (let i = 0; i < arrayofBlogs.length; i++) {
        arrayofBlogs[i].classList.toggle('show-blocks')
        
        
    }
    console.log(arrayofBlogs)
})

hamburger.addEventListener("click",function(){
    hamburger.classList.toggle("active");
    navmenu.classList.toggle("active");

    let currentMarginTop = parseInt(mainContainer.style.marginTop);
      if (currentMarginTop === 130) {
    mainContainer.style.marginTop = '0px';
        } else {
    mainContainer.style.marginTop = '130px';
        }
   })
document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click",() => {
     hamburger.classList.remove("active");
     navmenu.classList.remove("active");
    }))

    document.querySelector(".main-img").addEventListener("click",() => {
          
          window.location.href = 'detail.html';
    })