const listContainer = document.getElementById("list-container");
const inputBox = document.getElementById("input-box");

function addTask() {
    if (inputBox.value === '') {
        alert("Add Any Task...");
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        li.title = "Double-click to edit";  // Tooltip on hover

        listContainer.appendChild(li);

        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = '';
    saveTask();
}

// Click to check/remove
listContainer.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveTask();
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveTask();
    }
});

// Double-click to edit
listContainer.addEventListener("dblclick", function (e) {
    if (e.target.tagName === "LI") {
        const li = e.target;
        const currentText = li.firstChild.textContent.trim(); // get task text

        const input = document.createElement("input");
        input.type = "text";
        input.value = currentText;
        input.style.width = "99%";

    // Replace text with input field
        li.innerHTML = '';
        li.appendChild(input);
        input.focus();

        // When editing is done
        input.addEventListener("keypress", function (event) {
            if (event.key === "Enter") {
                if (input.value.trim() !== '') {
                    li.innerHTML = input.value;
                    li.title = "Double-click to edit";

                    let span = document.createElement("span");
                    span.innerHTML = "\u00d7";
                    li.appendChild(span);
                    saveTask();
                }
            }
        });

    //Save the New Task Text on Blur (Click Outside)
        input.addEventListener("blur", function () {
            if (input.value.trim() !== '') {
                li.innerHTML = input.value;
                li.title = "Double-click to edit";

                let span = document.createElement("span");
                span.innerHTML = "\u00d7";
                li.appendChild(span);
                saveTask();
            }
        });
    }
});

// Enter key adds task
inputBox.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        addTask();
    }
});

const clearAllBtn = document.getElementById("clear-all");

clearAllBtn.addEventListener("click", function () {
    if (confirm("Are you sure you want to clear all tasks?")) {
        listContainer.innerHTML = "";
        localStorage.removeItem("data");
    }
});



function saveTask() {
    localStorage.setItem("data", listContainer.innerHTML);
}

function showTask() {
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();
