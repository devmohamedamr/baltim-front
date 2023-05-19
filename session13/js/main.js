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




$("#text").keyup(function(){
    if($("#text").val().length >=20){
        $("#text").css("outline","1px solid red")
    }else{
        $("#text").css("outline","1px solid black")
    }
    $("#res").text("count is :"+$("#text").val().length)
})

