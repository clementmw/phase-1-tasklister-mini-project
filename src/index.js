document.addEventListener("DOMContentLoaded", () => {


  const priorityDropdown = document.getElementById('priority');
  const tasksList = document.getElementById('tasks');
  const userInput  = document.querySelector("#new-task-description")

  priorityDropdown.addEventListener('change', (e) => {
    const selectedPriority = e.target.value;
    let textColor;

    switch (selectedPriority) {
      case 'high':
        textColor = 'red';
        break;
      case 'medium':
        textColor = 'blue';
        break;
      case 'low':
        textColor = 'green';
        break;
      default:
        textColor = 'black'; // Default color if no priority is selected
    }

    tasksList.style.color = textColor;
  });

  //to add tasks
document.querySelector("#create-task-form").addEventListener('submit', (e) => {
  e.preventDefault();

    const input = userInput.value;
    const task = document.querySelector("#tasks");

    if (!input) {
      alert ( 'Please input task');
      return;
    }

    else {
    const addtasks = document.createElement("li");
    addtasks.textContent = input.toLowerCase();
    task.appendChild(addtasks);
    

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', (e) => {
      e.preventDefault();
      tasksList.removeChild(addtasks);
    });

    addtasks.appendChild(deleteButton);
    tasksList.appendChild(addtasks);

   //to clear the input value 
   userInput.value = ""
  }

});


  
});




