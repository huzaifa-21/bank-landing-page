let social = document.querySelectorAll(".social svg");
console.log(social)
social.forEach(link => {
  link.onmouseenter = () => {
    link.children[0].setAttribute("fill", "#31d35c")
  }
  link.onmouseleave = () => {
    link.children[0].setAttribute("fill","#fff")
  }
});
let links = document.querySelector(".links")
let burger = document.querySelector(".burger");

burger.onclick = () => {
  links.classList.toggle("overlay")
}