
let input = document.querySelector('#input');
let list = document.querySelector('#list');
function addTask(){
    if(input.value=== ''){
    
    }
    else{
       let li=  document.createElement("li")
       li.innerHTML = input.value;
       list.appendChild(li);
       let span = document.createElement("span")
       span.innerHTML = "✖";
       li.appendChild(span);
       input.value = '';
       saveData();
    }
}
    list.addEventListener("click", function(e){
        if(e.target.tagName==="LI"){
            e.target.classList.toggle("checked");
            saveData();
        }
        else if( e.target.tagName==="SPAN"){
            e.target.parentElement.remove();
            saveData();
        }

       
    },false)
    function saveData(){
        localStorage.setItem("data", list.innerHTML);
    }
    function showTask(){
        list.innerHTML = localStorage.getItem("data")
    }
     input.value = '';

showTask();
