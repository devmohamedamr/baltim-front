



var posts = [
    {name:"title 1",content:"asdsadsad"},
    {name:"title 2",content:"asdsadsad"},
    {name:"title 3",content:"asdsadsad"}
] 

function getPosts(){
    setTimeout(function(){
        var text = ""
        for(var i =0;i<posts.length;i++){
            text += `<li> ${posts[i].name}</li>`
        }
        document.getElementById("res").innerHTML = text
    },1000)
}

function savePost(data){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            posts.push(data)
            if(true){
                resolve()
            }else{
                reject("fatal erorr")
            }
        },2000)
    })
}
// savePost({name:"test api",content:"awdawdaw"},getPosts) //2s
// getPosts()//1


// savePost({name:"test api",content:"awdawd"})
// .then(getPosts).catch(function(res){
//     console.log(res)
// })


import Home from './Home.js'
import About from './About.js'
import Contact from './Contact.js'

let route = document.querySelector("BrowserRoute")
document.getElementById("routers").onclick = function(e){
    if(e.target.getAttribute("path") == "home"){
        route.innerHTML = "<home-component></home-component>"
    }else if (e.target.getAttribute("path") == "about"){
        route.innerHTML = "<about-component></about-component>"

    }else if (e.target.getAttribute("path") == "contact"){
        route.innerHTML = "<contact-component></contact-component>"

    }
    
}