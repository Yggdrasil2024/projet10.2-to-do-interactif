/* --- declaration des variables et constantes --- */
let tasks = JSON.parse(localStorage.getItem("saved_tasks")) || []; //
const formular = document.getElementById("formular");
const onGoingTasks = document.getElementById("ongoing__list");
const completedTasks = document.getElementById("completed__list");
const taskToSave = document.getElementById("task_title");

//ajout d'un tache depuis formulaire
formular.addEventListener("submit", (event) => {
  //on bannis les comportement par default
  event.preventDefault();

  const taskTitle = taskToSave.value;
  //objet taches
  const newTask = {
    id: idGenerator(),
    label: taskTitle,
    isCompleted: false,
  };

  //on ajoute le tous dans les taches
  tasks.unshift(newTask);
  //alert(`${newTask.id} ${newTask.label} ${newTask.isCompleted}`);
  //alert(JSON.stringify(tasks));

  //on ajout à l'ui des taches
  addToTasksUI(newTask, false);

  saveTasks(tasks);

  formular.reset();
});

//fonction pour effacer une tache
const deleteTask = (id_item) => {
  //on supprime la tache de l'interface
  const item = document.getElementById(id_item);
  item.remove();

  //on suprime la tache du local storage
  tasks = tasks.filter((item) => item.id !== id_item);
  saveTasks(tasks);

  //on initialise l'ui si le tableau redevient vide
  if (tasks.length === 0) {
    initUI();
  }
};

//permert de marker une taches comme completée
const markAsCompleted = (item_id) => {
  tasks = tasks.map((task) => {
    if (task.id === item_id) {
      return { ...task, isCompleted: !task.isCompleted };
    }
    return task;
  });

  saveTasks(tasks);
  initUI();
};

/**
 * fonction pour enregistrer les taches dans localStorage
 *
 * @param {Array} array - les taches à enregistrer
 * @returns
 */
const saveTasks = (array) => {
  localStorage.setItem("saved_tasks", JSON.stringify(tasks));
  return true;
};

/**
 * fonction qui va renvoyer le html d'une tache
 * @param {object} task - la tache dont on batis l'html
 */
const buildHtmlFor = (task) => {
  return `<p>${task.label}</p>
            <div class="btn__area">
              <button onclick="markAsCompleted('${task.id}')" class="btn" type="button">${task.isCompleted ? "unmark" : "mark as completed"}</button>
              <button onclick="deleteTask('${task.id}')" class="btn btn_rm" type="button">delete</button>
            </div>`;
};

//fonction qui ajoute une tache dans l'ui
const addToTasksUI = (task, isCompleted = false) => {
  let ParentElement = isCompleted ? completedTasks : onGoingTasks;

  //suppression du place holder
  const placeholder = document.getElementById("unwanted") || "";
  if (placeholder) {
    placeholder.remove();
  }

  const taskItem = document.createElement("li");
  taskItem.classList.add("card");
  taskItem.classList.add("list__item");
  taskItem.classList.add("appear");
  taskItem.setAttribute("id", task.id);
  taskItem.innerHTML = buildHtmlFor(task);

  return ParentElement.appendChild(taskItem);
};

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

const initUI = () => {
  onGoingTasks.innerHTML = "";
  completedTasks.innerHTML = "";

  if (tasks.length > 0) {
    completedTasks.classList.remove("hidden");

    tasks.forEach((element) => {
      addToTasksUI(element, element.isCompleted);
    });

    //message pour l'absence de taches en cours
    if (onGoingTasks.children.length === 0) {
      onGoingTasks.innerHTML = `<p id="unwanted">Aucune tâche en cours</p>`;
    }
  } else {
    onGoingTasks.innerHTML = `<p id="unwanted">Aucune tache pour le moment</p>`;
    completedTasks.classList.add("hidden");
  }
};

initUI();
