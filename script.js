let inputField = document.getElementById("inputField");
let tasks = document.getElementById("tasks");
//console.log(tasks);

const addTask = () => {

    let task = inputField.value.trim();
    const li = document.createElement("li");
    li.innerHTML = `
<label>
        <input type="checkbox">
        <span>${task}</span>
    </label>
    <span class="editBtn"><i class="fa-solid fa-pen-to-square"></i></span>
    <span class="deletBtn"><i class="fa-solid fa-trash"></i></span>
</li>
`
    tasks.appendChild(li);
    inputField.value = "";
    //console.log(li);
    const checkbox = li.querySelector("input");
    let span1 = li.querySelector("span");
    const editBtn = li.querySelector(".editBtn");
    const deleteBtn = li.querySelector(".deletBtn");

    //console.log(deletBtn);
    checkbox.addEventListener("click", () => {
        span1.classList.toggle("checked");
        console.log(span1.classList);
        counter();
    });

    editBtn.addEventListener("click", function () {
        console.log("hello");

        const taskupdate = prompt("editer tache:", span1.textContent);
        if (taskupdate !== null) {
            span1.textContent = taskupdate;
            checkbox.checked = false;
            span1.classList.remove("checked");
        }
        counter();
    });

    deleteBtn.addEventListener("click", function () {
        if (confirm("Êtes-vous sûr de vouloir tout effacer?")) {
            li.remove();
        }
    });


    // Exemple de taskUpdate : toggle terminé ou non
    // if (e.target.type === "checkbox") {
    //     updateCounters(); // ou taskUpdate(e.target) si tu l'as
    // }
}


const deletall = document.getElementById("clear-all");
deletall.addEventListener("click", function () {
    if (confirm("Voulez vous tout effacer?")) {
        tasks.innerHTML = "";
        Counter();
    }
})

    

const Counter = () => {
    let completedTasks = document.querySelectorAll(".checked").length;
    let compteur = document.getElementById("CompletedCounter");
    compteur.innerText = completedTasks;
    const taches = document.querySelectorAll("li>label>span:not(.checked)").length;
    document.querySelector("#pendingCounter").textContent = taches;

    
}

Counter();

