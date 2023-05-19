// cdn 
// $('#res')
// console.log(document.getElementById("res"))


// console.log()
// document.getElementById("res").innerText = "hi mohamed"
// $('#res').text("hi mohamed")



// let input  = document.getElementById("name")
// let btn = document.getElementById("send")
// let res = document.getElementById("res")
// btn.onclick = function(){
//     res.innerText = "hi "+input.value
// }

// $("#send").click(function(){
//     $("#res").text("hi "+$("#name").val())
// })





// $("#show").click(function(){
//     if($("#password").attr("type") == "password"){
//         $("#password").attr("type","text")
//     }else{
//         $("#password").attr("type","password")
//     }
// })




// $("#text").keyup(function(){
//     if($("#text").val().length >=20){
//         $("#text").css("outline","1px solid red")
//     }else{
//         $("#text").css("outline","1px solid black")
//     }
//     $("#res").text("count is :"+$("#text").val().length)
// })



// $("#click").click(function(){
//     $(".box").hide(function(){
//         $(".box2").slideDown(function(){
//             $(".box3").slideUp()
//         })
//     })
// })
// $("#click").click(function(){
//     $(".box").hide().slideDown().slideUp()
// })


// $("#stop").click(function(){
//     $(".box").stop()
// })


// $.ajax({
//     url:"https://jsonplaceholder.typicode.com/users",
//     method:"GET",
//     success:function(res){
//         console.log(res)
//     }
// })



// var x = new XMLHttpRequest
// x.open("GET","https://jsonplaceholder.typicode.com/users")
// x.send()
// x.onreadystatechange = function(){
//     if(x.readyState == 4){
//         var data = JSON.parse(x.response)
//         console.log(data)
//     }
// }   


// $("#click").click(function(){
//     $(".box").animate({'width':'100%'},2000)
// })


// fetch("https://jsonplaceholder.typicode.com/users").then(function(res){
//     console.log(res.json())
// })




// setTimeout(function(){
    // $(document).ready(function(){
    //     $("#sp").fadeOut()
    // })
// },2000)