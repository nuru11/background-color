let parent = document.querySelector(".parent")
let color1 = document.querySelector(".color1")
let color2 = document.querySelector(".color2")


function current1() {
  parent.style.setProperty("--ccolor1", color1.value)
}

function current2() {
  parent.style.setProperty("--ccolor2", color2.value)
}

/////////

/*
btn.addEventListener("click", function() {
  /*  parent.style.backgroundImage = color1.value */
   /*  parent.style.setProperty("--ccolor1", color1.value);
     parent.style.setProperty("--ccolor2", color2.value)

}) */