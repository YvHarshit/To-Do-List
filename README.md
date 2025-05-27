# TaskNova – Advanced To-Do Web Application

📌 Features.
✅ Add new tasks.
✏ Edit tasks by double-clicking on them.
☑ Mark tasks as completed.
❌ Delete individual tasks.
🗑 Clear all tasks at once.
💾 Data persistence using Local Storage.
⌨ Keyboard support (Press Enter to add task),
🌈 Responsive and user-friendly UI.
🖼 Custom icons for checked/unchecked tasks.

🧠 How It Works
-> HTML (index.html)
Creates the structure of the to-do app including input field, add button, and task list.
Displays the header, input area, task list, and a "Clear All" button.

-> CSS (style.css)
Provides a responsive, clean, and modern design.
Adds hover effects, custom scrollbar behavior, and icon visuals.
Implements UI elements such as rounded buttons, gradients, and shadows.

-> JavaScript (script.js)
Handles all dynamic functionality including:
Adding Tasks:
Input text is turned into a list item.
An "×" icon is added to remove the task

Task Completion:
Clicking on a task toggles the "checked" state.
Checked tasks have a strikethrough and an icon change.

Deleting Tasks:
Clicking the "×" removes the task from the DOM and local storage.

Editing Tasks:
Double-clicking on a task turns it into an input field.
Pressing Enter or clicking away saves the updated task.

Persistence with Local Storage:
Tasks are saved in localStorage to retain them on page reload.

Clear All:
Deletes all tasks from the DOM and clears storage with confirmation.
