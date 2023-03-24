// window.onscroll = function(){
//     if(window.scrollY > 100) {
//         document.getElementById("click").classList.add("click")
//         document.getElementById("click").classList.remove("clickhide")

//     }else{
//         document.getElementById("click").classList.add("clickhide")
//         document.getElementById("click").classList.remove("click")

//     }
// }


// window.onscroll = function(){
//     if(window.scrollY>50){
//         document.getElementsByClassName("nav")[0].classList.add("navexpand");
//     }else{
//         document.getElementsByClassName("nav")[0].classList.remove("navexpand");
//     }
// }





var i = 0
// console.log(++i)
// setInterval(function(){
//     console.log(++i)
// },1000)


// console.log("test")
// console.log(11)

// var imgs = [
//    "img/xgallery4.png.pagespeed.ic.eeH-radW60.webp" ,
//     "img/xgallery3.png.pagespeed.ic.38W7JPYvku.webp",
//     "img/xgallery2.png.pagespeed.ic.R67GzIjQgh.webp",
//     "img/xgallery1.png.pagespeed.ic.RiMoEHAQJU.webp"
// ]

// var i = 0

// setInterval(function(){
//     document.getElementById("img").src = imgs[i%imgs.length]
//     i++
// },1000)


// function box(e){
//     console.log(e)
// }


document.getElementById("box").onclick = function(e){
    console.log(e.target)
}