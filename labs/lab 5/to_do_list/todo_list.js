		var taskList = [];
		var $ = function (id) { return document.getElementById(id); }
		
        
        
        
        var addTaskClicker = function (){
            var userString = ($("new_task").value);
            if(userString == ""){
                alert("Please enter a non-empty task.");
            }
            else{
                taskList[taskList.length]=userString;
                printToTaskList();
                $("new_task").value="";
                $("new_task").focus();
                
            }
            
            
        }
        
        var showTaskClicker = function (){
            $("next_task").innerHTML="";
            var outPutString = taskList[0];
            taskList.shift();
            if(outPutString==undefined){
                $("next_task").value="";
                alert("The task list is empty.\nPlease enter a new task.");                
            }
            else{
                //alert(outPutString);
                printToTaskList();
                $("next_task").value=outPutString;
                
            }
            
            
        }
        
        var printToTaskList = function(){
            var taskString = "";
            for(var i=0;i<taskList.length;i++){
                taskString = taskString + taskList[i] + "\n";
                console.log(taskList[i]);
            }
            //console.log(taskString+"TASK STRING");
            $("task_list").innerHTML=taskString;
            
        }
        
        
        
		window.onload = function () {
            $("add_task").onclick = addTaskClicker;
            $("show_next_task").onclick = showTaskClicker;
		
		}