var items = document.getElementById("items");
var form = document.getElementById("addform");
var search = document.getElementById("filter");
search.addEventListener("keyup",searchtext);
form.addEventListener('submit',additem);
function additem(e){
    e.preventDefault();
    var li = document.createElement("li");
    li.className = 'list-group-item';
    items.appendChild(li);
    var ele1 = document.getElementById("inputtext");
    var ele2 = document.getElementById("inputtext2");
    var text1 = document.createTextNode(ele1.value);
    var text2 = document.createTextNode(ele2.value);
    li.appendChild(text1);
    li.appendChild(text2);
    var deletebtn = document.createElement("button");
    deletebtn.className = 'btn btn-danger btn-sm float-right delete';
    var text3 = document.createTextNode("X");
    li.appendChild(deletebtn);
    deletebtn.appendChild(text3);
    
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
function searchtext(e){
    var text = e.target.value.toLowerCase();
    var itemslist = items.getElementsByTagName('li');
    Array.from(itemslist).forEach((item)=>{
         var textval = item.firstChild.textContent;
         var textval2 = item.childNodes[1].textContent;
         if(textval.toLowerCase().indexOf(text) != -1 || textval2.toLowerCase().indexOf(text) != -1){
              item.style.display = 'block'
         }
         else{
            item.style.display = 'none';
         }
    })
}