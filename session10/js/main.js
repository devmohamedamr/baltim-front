var links = document.querySelectorAll(".box a")
var box = document.querySelectorAll(".box img")

for(var i=0;i<links.length;i++){
    links[i].addEventListener('click',function(){
        
        for(var y=0;y<box.length;y++){
            box[y].style.display = "none"
        }
        var ele = document.querySelectorAll("."+this.getAttribute("data-target"))
       for(var e=0;e<ele.length;e++){
        ele[e].style.display = "block";
       }
       // this.getAttribute("data-target")
    })
}