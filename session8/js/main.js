// window.onscroll = function(){
//     if(window.scrollY > 100) {
//         document.getElementById("click").classList.add("click")
//         document.getElementById("click").classList.remove("clickhide")

//     }else{
//         document.getElementById("click").classList.add("clickhide")
//         document.getElementById("click").classList.remove("click")

//     }
// }


window.onscroll = function(){
    if(window.scrollY>50){
        document.getElementsByClassName("nav")[0].classList.add("navexpand");
    }else{
        document.getElementsByClassName("nav")[0].classList.remove("navexpand");
    }
}