var textinput = document.getElementById("task");
var btn = document.getElementById("save");
var btnupdate = document.getElementById("update");

var tasks = [];  
btn.onclick = function(){
    tasks.push(textinput.value);
    textinput.value = "";
    show()
}

function show(){
    var text = ""
    for(var i=0;i<tasks.length;i++){
        text += `<li>${tasks[i]}  <button onclick='destroy(${i})'>delete</button>  <button onclick='update(${i})'>update</button>  </li>`
    }
    document.getElementById("list").innerHTML = text
}

function destroy(index){
    tasks.splice(index,1)
    show()
}

var indexupdate;
function update(index){
    indexupdate = index
    btn.style.display = "none"
    btnupdate.style.display = "block"
    textinput.value = tasks[index]
}


btnupdate.onclick = function(){
    tasks[indexupdate] = textinput.value
    show()
}


