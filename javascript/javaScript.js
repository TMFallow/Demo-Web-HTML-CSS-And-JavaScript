let index = 1;
showSlides(index);

function plusSlides(n)
{
    showSlides(index += n);
}

function currentSlide(n) {
    showSlides(index = n);
  }

function showSlides(n){
    let i;
    let slides = document.getElementsByClassName("slides");
    let dot = document.getElementsByClassName("demo");
    let id = document.getElementById("caption");
 
    if(n > slides.length)
    {
        index = 1;
    }

    if(n < 1)
    {   
        index = slides.length;
    }

    for(i = 0; i < slides.length; i++)
    {
        slides[i].style.display = "none";
    }

    for(i = 0; i < dot.length; i++)
    {
        dot[i].className = dot[i].className.replace(" active", "");
    }
    slides[index-1].style.display = "block";
    dot[index-1].className += " active";
    id.innerHTML= dot[index-1].alt;
}

reveal();

function reveal(){
    var reveals = document.querySelectorAll(".reveal");
    for(var i=0; i <reveals.length; i++)
    {
        var windowHeight = window.innerHeight; //Khoang Cach Do Cao De Xuat Hien 
        var elementTop = reveals[i].getBoundingClientRect().top; //Khoang Cach Tu Dau Trang
        var elementVisible = 150;
        if(elementTop < windowHeight - elementVisible){
        reveals[i].classList.add("active");
        }
        else{
            reveals[i].classList.remove("active");
        }
    }
}

window.addEventListener("scroll", reveal);
