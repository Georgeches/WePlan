window.addEventListener("scroll", (event) => {
    var reveals = document.querySelectorAll('.reveal')

    for (var i=0; i < reveals.length; i++){
        var windowHeight = window.innerHeight;
        var revealTop = reveals[i].getBoundingClientRect().top;
        var revealpoint = 150;

        if(revealTop < windowHeight - revealpoint){
            reveals[i].classList.add('active');
        }
        else{
            reveals[i].classList.remove('active');
        }
    }
}
)

function showContent1() {
    var div = document.getElementById("events1")
    var div2 = document.getElementById("events2")
    var div3 = document.getElementById("events3")
    var div4 = document.getElementById("events4")
    var div5 = document.getElementById("events5")
    div.style.display = "block"
    div2.style.display = "none"
    div3.style.display = "none"
    div4.style.display = "none"
    div5.style.display = "none"
}

function showContent2() {
    var div = document.getElementById("events2")
    var div2 = document.getElementById("events1")
    var div3 = document.getElementById("events3")
    var div4 = document.getElementById("events4")
    var div5 = document.getElementById("events5")
    div.style.display = "block"
    div2.style.display = "none"
    div3.style.display = "none"
    div4.style.display = "none"
    div5.style.display = "none"
}

function showContent3() {
    var div = document.getElementById("events3")
    var div2 = document.getElementById("events2")
    var div3 = document.getElementById("events1")
    var div4 = document.getElementById("events4")
    var div5 = document.getElementById("events5")
    div.style.display = "block"
    div2.style.display = "none"
    div3.style.display = "none"
    div4.style.display = "none"
    div5.style.display = "none"
}

function showContent4() {
    var div = document.getElementById("events4")
    var div2 = document.getElementById("events1")
    var div3 = document.getElementById("events3")
    var div4 = document.getElementById("events2")
    var div5 = document.getElementById("events5")
    div.style.display = "block"
    div2.style.display = "none"
    div3.style.display = "none"
    div4.style.display = "none"
    div5.style.display = "none"
}

function showContent5() {
    var div = document.getElementById("events5")
    var div2 = document.getElementById("events1")
    var div3 = document.getElementById("events3")
    var div4 = document.getElementById("events2")
    var div5 = document.getElementById("events5")
    div.style.display = "block"
    div2.style.display = "none"
    div3.style.display = "none"
    div4.style.display = "none"
    div5.style.display = "none"
}