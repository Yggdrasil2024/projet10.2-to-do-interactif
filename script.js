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
 tasks.unshift(newTask);
 //alert(`${newTask.id} ${newTask.label} ${newTask.isCompleted}`);
//alert(JSON.stringify(tasks));


  //on ajout à l'ui des taches
  addToTasksUI(newTask);

  //saveTasks(tasks);
});


/**
 * fonction pour enregistrer les taches dans localStorage
 * 
 * @param {Array} array - les taches à enregistrer
 * @returns 
 */
const saveTasks = (array) => {
  if (array.length !== 0) {
    localStorage.setItem("saved_tasks") = JSON.stringify(tasks);
    return true;
  }
  return false;
}

/**
 * fonction qui va renvoyer le html d'une tache
 * @param {object} task - la tache dont on batis l'html
 */
const buildHtmlFor = (task) => {
  return `<p>${task.label}</p>
            <div class="btn__area">
              <button onclick="markAsCompleted('${task.id}')" class="btn" type="button">${task.isCompleted ? 'unmark': 'mark as completed'}</button>
              <button onclick="deleteTask('${task.id}')" class="btn btn_rm" type="button">delete</button>
            </div>`;
}

const addToTasksUI = (task) => {
  const taskItem = document.createElement("li");
  taskItem.classList.add("appear");
  taskItem.setAttribute('id', task.id);
  taskItem.innerHTML = buildHtmlFor(task);
  return onGoingTasks.appendChild(taskItem);
}

/**
 * fonction qui va generer un id aleatoire
 *
 * @returns {string} - id aleatoire
 */
const idGenerator = () => {
  const id = [];
  const char = "1234567890abcdefghijklmnopqrstuvxyz";

  //generation de l'id
  for (let index = 0; index < 6; index++) {
    id[index] = char[Math.floor(Math.random() * char.length)];
  }
  //on genere un autre id si celui là existe deja
  if (tasks) {
    const tasksIds = tasks.map((item) => {
      return item.id;
    });

    if (tasksIds.includes(id.join(""))) {
      return idGenerator();
    }
  }
  return id.join("");
};

