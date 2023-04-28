
// document.getElementById("click").onclick = function(){
//     var username =  document.getElementById("username").value;
//     var ajax = new XMLHttpRequest

//     ajax.open("GET","https://api.github.com/users/"+username)
//     ajax.send()
//     ajax.onreadystatechange = function(){
//         if(ajax.readyState == 4){
    
//            var jsobject =  JSON.parse(ajax.response)
//             console.log(jsobject.avatar_url)
//             document.getElementById("res").src = jsobject.avatar_url 
//         }
//     }
    
    
    



// }

// $.ajax({
//     "method":"GET",
//     "url":"https://jsonplaceholder.typicode.com/users",
//     "success":function(r){
//         console.log(r)
//     }
// })




var ajax  = new XMLHttpRequest
ajax.open("GET","https://jsonplaceholder.typicode.com/users")
ajax.send()

ajax.onreadystatechange = function(){
    if(ajax.readyState == 4){
        var ob = JSON.parse(ajax.response)
        
       for(var i=0;i<ob.length;i++){
        console.log(ob[i].name , ob[i].company.name)
       }
    }
}