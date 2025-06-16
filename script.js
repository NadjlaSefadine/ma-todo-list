let inputField = document.getElementById("inputField");
let tasks = document.getElementById("tasks");
console.log(tasks);


const addTasks = () => {
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

const checkbox =li.querySelector("input");

//const.log(tasks);
checkbox.addEventListener("Click",() => {
    let span1 = li.querySelector("span")
    span1.classList.toggle("checked",checkbox.checked);
    console.log(span1.classlist);
});
}
