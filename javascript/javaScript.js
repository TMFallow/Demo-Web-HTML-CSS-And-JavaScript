let index = 1;
showSlides(index);

function plusSlides(n)
{
    showSlides(index += n);
}

function currentSlide(n) {
    index = n
    showSlides(index);
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