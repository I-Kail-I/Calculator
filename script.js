document.addEventListener('DOMContentLoaded', function() {
    const output = document.getElementById('output');
    const buttons = document.querySelectorAll('.buttonContainer button');
  
    buttons.forEach(button => {
      button.addEventListener('click', function() {
        const value = this.textContent;
  
        if (value === '=') {
          try {
            output.value = eval(output.value);
          } catch (e) {
            output.value = 'Error';
          }
        } else if (value === 'C') {
          output.value = '';
        } else {
          output.value += value;
        }
      });
    });
  });