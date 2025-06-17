let inputField = document.getElementById("inputField");
let tasks = document.getElementById("tasks");
//console.log(tasks);

const addTask = () => {
    let task = inputField.value.trim();
    const li = document.createElement("li");
li.innerHTML = `
<label>
        <input type="checkbox">
        <span>Terminer mon travail<</span>
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
//console.log(checkbox);
checkbox.addEventListener("Click",() => {
    span1.classList.toggle("checked");
    console.log(span1.classList);
});

editBtn.addEventListener("click",function(){;
   const taskupdate = prompt("editer tache:",span1.textContent);
   if (taskupddate !== null){
  span1.textcontent = taskupdate;
  checkbox.checked = false;
  span1.classList.remove("checked");
}
})
};