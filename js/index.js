let Video = document.getElementById("video");
let my_p = document.getElementById("my_p");
let btn = document.getElementById("btn");
console.log(btn);

btn.addEventListener("click" , function() {
    my_p.style.display = `block`
    Video.play()
    Video.style.display = `block`

})