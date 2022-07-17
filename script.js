const hamburgerbutton = document.querySelector
(".nav-toggler")
const navigation = document.querySelector
("nav")

hamburgerbutton.addEventListener("click",togglenav)

function togglenav(){
    hamburgerbutton.classList.toggle("active")
navigation.classList.toggle("active")
}