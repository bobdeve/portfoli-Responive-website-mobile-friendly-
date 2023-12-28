const viewMoreButton = document.querySelector('.view-more')
const arrayofBlogs = document.querySelectorAll(".blogs")
const humburgerMenu = document.querySelector(".hamburger-menu-btn")
const navigationMenu = document.querySelector(".navigation-header")
const hamburger =document.querySelector(".hamburger");
const navmenu= document.querySelector(".nav-menu")
const mainContainer = document.querySelector(".main-container")
const imageHomecontainer = document.querySelector(".main-img")
const blog1 = document.getElementById("blog-1")
let blogs = document.querySelectorAll(".blogs")

//  blog1.addEventListener("click", function(){
//     window.open("https://celadon-pithivier-139612.netlify.app/", '_blank');
//  })
blogs.forEach((div)=>{
    div.addEventListener("click", function(){
     let blogUrl =  (div.id === "blog-0") ? "https://bobdeve.github.io/Quizapp/": 
                   (div.id === "blog-1") ? "https://celadon-pithivier-139612.netlify.app/":
                   (div.id === "blog-2")? "https://fanciful-kheer-9622ad.netlify.app/":
                   (div.id === "blog-3")? "https://bobdeve.github.io/tenzies-app/":
                   (div.id === "blog-4") ? "https://merry-chaja-afde48.netlify.app/":
                   (div.id === "blog-5") ? "https://cerulean-donut-b47ac7.netlify.app/":
                   "https://serene-bubblegum-66c8e3.netlify.app/"

                   window.open(blogUrl, '_blank');
    })
})
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