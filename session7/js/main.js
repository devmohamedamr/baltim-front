// for ()
// {}

// var i = 1;
// while(10>=i){
//     console.log(i)
//     i++;
// }



// for(var i = 1 ; 10>i ; i++)
// {
//     console.log(i)
// }




// var colors  = [ "red" , "green" , "blue" ]
// colors.pop()
// console.log(colors)
// while(x = colors.pop())
// {
//     console.log(x)
// }



// console.log(colors)

// var i = 0;
// do {
//     i++;
//     console.log(i)
// }while(10<i)



// var user = [ "mohmaed" , "baltim" , 20 ]



// var user  = { name:"mohamed" , age:20 , city:"baltim" }
// var user = {
//     name:"ahmed",
//     age:20
// }
// console.log(user)



// function hi (){
//     console.log("hi ya mohamed")
// }

// hi()

// hi()





// function add (x,y)
// {
//     console.log(x+y)
// }

// add(1,4)






// function hi (name)
// {
//     console.log("hi ya "+name)
// }

// hi("said")

// hi("ahmed")



// function salary (x){
//    return x
// }


// console.log(  salary(1000) + 10  )


// function salary (sal)
// {
//     return sal - ( sal* 0.10 )
// }

// console.log(salary(1000) + 2000)






// function number (x){
//     return x
// }


// console.log(number(10) + 20)

// console.log()






// function  loop (array) { 
//     console.log(array)
//  }


//  loop(colors)
//  loop(users)





// function loop (x){
//     var i = 0;
//     while(i<x.length){
//         console.log(x[i])
//         i++;
//     }
// }


// var colors = ["red","Green"]
// var users = ["ahmed","mohamed"]
// var numbers = [2,123,324,12]

// loop(colors)
// loop(users)
// loop(numbers)




// function hi ()
// {
//     alert("hi")
// }



// function ChangeText ()
// {
//     document.getElementById("text").innerText = "by"
// }


// function show()
// {
//     var btn = document.getElementById("btn")
//     var passinput = document.getElementById("password");
//     if(passinput.type == "password"){
//         passinput.type = "text" 
//         btn.innerText = "hide"
//     }else{
//         passinput.type = "password" 
//         btn.innerText = "show"
//     }

    
// }



// function count()
// {
//     var res = document.getElementById("res")
//     var words =  document.getElementById("text").value
//     res.innerText = "count is : "+words.length
// }


// function clk () {
//     document.getElementById("text").style.border = "1px solid red"
// }



// function count () { 
//     var textvalue = document.getElementById("text").value
//     document.getElementById("res").innerText = "count is :"+textvalue.length
//     if(textvalue.length >= 20){
//         document.getElementById("text").classList.add("border-red")
//     }else{
//         document.getElementById("text").classList.remove("border-red")
//     }
// }



// document.getElementById("text").onkeyup = function() {

// }

// document.getElementById("red").onclick = function(){
//     document.body.style.background  = "red"
// }

// document.getElementById("green").onclick = function(){
//     document.body.style.background  = "green"
// }

// document.getElementById("blue").onclick = function(){
//     document.body.style.background  = "blue"
// }


var imgs = [
    "img/xgallery2.png.pagespeed.ic.R67GzIjQgh.webp",
    "img/xgallery3.png.pagespeed.ic.38W7JPYvku.webp",
    "img/xgallery4.png.pagespeed.ic.eeH-radW60.webp"
]
var i = 0;
document.getElementById("next").onclick = function(){
    document.getElementById("img").src = imgs[i]
    if(i<2){
        i++
    }else{
        i = 0
    }
}