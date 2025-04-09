
////event of after the DOM is loaded
document.addEventListener('DOMContentLoaded',()=>{

    let task_input = document.querySelector('#in');
    let add_button = document.querySelector("#add");
    

    ///get back the data from the LocalStrg and save it in array 
    let task_arr = JSON.parse(localStorage.getItem("task")) || [];

    ///to display each of the task in array
    task_arr.forEach((task) => render(task));

        //functionality to get the input store it in array after clicking the ADD button
        add_button.addEventListener('click',()=>{
            
            let task = task_input.value.trim();

            if(task === "") {alert("Enter valid task") 
                return};

            console.log(task);

            let task_id = Date.now();

            let task_obj = {'id': task_id , "task": task , completed :false}

            console.log(task_obj);

            task_arr.push(task_obj);

            console.log(task_arr);

            saveINLocalStrg();
            render(task_obj);


            //empty the input after adding task
            task_input.value = "";
        



        });

//to display = render
    function render(task){
        //create a element li and del button

        let task_list = document.querySelector("#list")

        let li = document.createElement("li");


         li.textContent = task.task;

         task_list.appendChild(li);

         li.id = task.id

         

         console.log(li.id)

         li.className = "px-2 mt-2 flex font-bold justify-between border-2 border-black rounded-xl gap-2"

        document.querySelector("li");
        let del_btn = document.createElement("button");
         li.appendChild(del_btn);

         del_btn.id = task.id +"_btn"
         console.log(del_btn.id)
         del_btn.textContent = "Delete";
         del_btn.className = " px-2 mr-2 border-2 bg-2 bg-red-500 border-black rounded-xl"

         del_btn.addEventListener("click",function(){

            li.remove();

            task_arr = task_arr.filter((t)=> t.id !== task.id)
            saveINLocalStrg();
         })


        
    }

////save in Local storage 
    function saveINLocalStrg(){

        localStorage.setItem("task", JSON.stringify(task_arr))
    }





});