
var ajax = new XMLHttpRequest

ajax.open("GET","https://jsonplaceholder.typicode.com/users")

ajax.send()


ajax.onreadystatechange = function(){
    if(ajax.readyState == 4){
        // var res = ""
       var jsobject =  JSON.parse(ajax.response)
    //    for(var i =0;i<jsobject.length;i++){
    //         res += `<li>${jsobject[i].name}</li>`
    //    }
    //    document.getElementById("res").innerHTML = res
    }
}


