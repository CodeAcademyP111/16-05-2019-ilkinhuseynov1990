var myli = document.querySelectorAll("ul.item li");

var london = document.querySelector("ul.item li.london");
var tab = document.querySelectorAll(".tabcontent");

var paris = document.querySelector("ul.item li.paris");

var tokio = document.querySelector("ul.item li.tokio");


london.addEventListener("click", function () {

    london.classList.toggle("active");
    tokio.classList.remove("active");
    paris.classList.remove("active");
    tab[0].style.display = "block";
    tab[1].style.display = "none";
    tab[2].style.display = "none";


});

paris.addEventListener("click", function () {

    paris.classList.toggle("active");
    london.classList.remove("active");
    tokio.classList.remove("active");
    tab[0].style.display = "none";
    tab[1].style.display = "block";
    tab[2].style.display = "none";



});



tokio.addEventListener("click", function () {

    tokio.classList.toggle("active");
    paris.classList.remove("active");
    london.classList.remove("active");
    tab[0].style.display = "none";
    tab[1].style.display = "none";
    tab[2].style.display = "block";

});


//dovrde yanlis bir nece varianta yazib yoxlamisam netice elde ede bilmedim yeniden baxiram siz de baxin zehmet olmasa men neyi sehv edirem ;

// for (var index = 0; index < myli.length; index++) {

//     myli[index].addEventListener("click", function () {

//         london.classList.toggle("active");
//         tokio.classList.remove("active");
//         paris.classList.remove("active");
//         tab[index].style.display = "block";
//         tab[index].style.display = "none";
//         tab[index].style.display = "none";


//     })

//     myli[index].addEventListener("click", function () {

//         myli[index].classList.toggle("active");
//         myli[index].classList.remove("active");
//         tab[index].style.display = "none";
//         tab[index].style.display = "block";



//     })



//     myli[index].addEventListener("click", function () {

//         myli[index].classList.toggle("active");
//         myli[index].classList.remove("active");
//         tab[index].style.display = "none";
//         tab[index].style.display = "block";

//     })


// }
