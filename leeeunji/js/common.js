window.onscroll = function(){
    scrollFunction();
}

function scrollFunction() {
    const topBtn = document.querySelector("div.toTheTop");
    if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20){
        topBtn.style.display = "flex";
    } else {
        topBtn.style.display = "none";
    }
};

function topFunction() {
    document.body.scrollTop = 0; // for safari
    document.documentElement.scrollTop = 0; // for Chrome, Firefox, IE, Opera
};