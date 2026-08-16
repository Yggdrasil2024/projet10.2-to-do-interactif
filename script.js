/* --- declaration des variables et constantes --- */
let tasks = JSON.parse(localStorage.getItem("saved_tasks")) || []; //
const formular = document.getElementById("formular");
const onGoingTasks = document.getElementById("ongoing__list");
const completedTasks = document.getElementById("completed__list");
const taskToSave = document.getElementById("task_title");
//objet taches
const newTask = {
  id: "",
  label: "",
  isCompleted: false,
};


//ajout d'un tache depuis formulaire
formular.addEventListener("submit", (event) => {
  //on bannis les comportement par default
  event.preventDefault();

  const taskTitle = taskToSave.value;
  newTask.id = idGenerator();
  newTask.label = taskTitle;
  newTask.isCompleted = false;
  //on ajoute le tous dans les taches
 // tasks.unshift(newTask);

  //on ajout à l'ui des taches
  //addToTasksUI(newTask);

  //saveTasks(tasks);
});
