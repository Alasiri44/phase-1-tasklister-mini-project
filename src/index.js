document.addEventListener("DOMContentLoaded", () => {
  // your code here
 document.querySelector('#create-task-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const task = document.getElementById('new-task-description').value;

    const li = document.createElement("li");
    li.innerHTML = `${task} `;

    const button = document.createElement('button');
    button.innerHTML = 'X';
    li.appendChild(button);

    const ul = document.getElementById('tasks');
    ul.append(li);

    button.addEventListener('click', function(e) {
      e.target.parentNode.remove();
  });

  });

  
});

console.log('How do you live?');