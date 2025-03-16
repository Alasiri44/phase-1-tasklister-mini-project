document.addEventListener("DOMContentLoaded", () => {
  // your code here
 document.querySelector('#create-task-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Creating the task
    const task = document.getElementById('new-task-description').value;

    //creating the paragraph
    const li = document.createElement("li");
    li.style.position = 'relative';
    const p = document.createElement('p');
    p.innerHTML = `${task} `;
   
    p.style.marginBottom = '0px';
    li.appendChild(p);
  
    // Adds the button for deleting
    const button = document.createElement('button');
    button.innerHTML = 'X';  
    button.style.margin = '2px';  
    li.appendChild(button);

    // Creating button for editing
    const button1 = document.createElement('button');
    button1.innerHTML = 'Edit';
    button1.id = 'edit-button';
    button1.style.position = 'absolute';
    button1.style.bottom = '2px';
    button1.style.right = '0px';
    li.appendChild(button1);

    // Appending the button and paragraph to the body
    const ul = document.getElementById('tasks');
    ul.append(li);

    // Allows for deleting the task
    button.addEventListener('click', function(e) {
      e.target.parentNode.remove();  
  });

  // Making the paragraph editable  

  button1.addEventListener('click', function(e) {
    console.log("I have been clicked");
     const input = document.createElement('input');
     const originalText = p.innerHTML;
     
     input.type = 'text';
     input.value = p.innerHTML;

      // replace p with input
     p.replaceWith(input);
     input.focus();

      // saves input value back to paragraph upon clicking enter or outside
     

     input.addEventListener('keypress', function(e){
      if(e.key === 'Enter'){
        if (input.value.trim() === "") {
          p.innerHTML = originalText; 
      } else {
          p.innerHTML = input.value;
      }
         input.replaceWith(p);
       }
      });

      
    });

  });

  
});

console.log('How do you live?');