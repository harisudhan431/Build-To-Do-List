function addtask(){
    var task =document.getElementById("task").value;
    if(task){
        var newtask =document.getElementById("newtask");
        var work =document.createElement('li');
        var data=document.createElement('input');
        data.type="text";
        data.placeholder=task;
        // work.appendChild(document.createTextNode(task));
        var delbtn= document.createElement('button');
        delbtn.textContent="DELETE";
        delbtn.addEventListener("click",function(){
            newtask.removeChild(work);
        });
        work.appendChild(data);
         work.appendChild(delbtn);
         newtask.appendChild(work);
         document.getElementById("newtask").value="";
    }
}


