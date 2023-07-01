var items = document.getElementById("items");
var form = document.getElementById("addform");
form.addEventListener('submit',additem);
function additem(e){
    e.preventDefault();
    var li = document.createElement("li");
    li.className = 'list-group-item';
    items.appendChild(li);
    var ele = document.getElementById("inputtext");
    var text = document.createTextNode(ele.value);
    li.appendChild(text);
    var deletebtn = document.createElement("button");
    deletebtn.className = 'btn btn-danger btn-sm float-right delete';
    var text2 = document.createTextNode("X");
    li.appendChild(deletebtn);
    deletebtn.appendChild(text2);
    
}
items.addEventListener('click',removele);
function removele(e){
    if(e.target.classList.contains("delete")){
        if(confirm("are you sure")){
            var li = e.target.parentElement;
            items.removeChild(li);
        }
    }
}