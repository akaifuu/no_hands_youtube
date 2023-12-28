// Function to create and inject the box
function injectBox() {
    const box = document.createElement('div');
    box.setAttribute('style', 'position: fixed; bottom: 10px; right: 10px; z-index: 1000; background-color: white; padding: 5px; border: 1px solid black;');
    box.innerHTML = '<input type="text" id="timeInput" style="width: 50px;">';
    document.body.appendChild(box);
  
    const input = document.getElementById('timeInput');
    input.addEventListener('keypress', (event) => {
      if (event.key === 'Enter') {
        seekVideo(input.value);
        input.value = ''; // Clear the input box
        refocusOnPlayer(); // Refocus on the video player
      }
    });
  }
  
  // Function to handle keyboard input
  document.addEventListener('keydown', (event) => {
    if (event.ctrlKey && event.key === 'b') { // Change 'b' to your preferred key
      const input = document.getElementById('timeInput');
      if (input) {
        input.focus();
      }
    }
  });
  
  // Function to handle time input and seek the video
  function seekVideo(timeInput) {
    const video = document.querySelector('video');
    if (!video) return;
  
    const time = parseTimeInput(timeInput);
    video.currentTime = time;
  }
  
  function parseTimeInput(input) {
    const parts = input.split(':');
    const minutes = parseInt(parts[0], 10);
    const seconds = parts.length > 1 ? parseInt(parts[1], 10) : 0;
    return (minutes * 60) + seconds;
  }
  
  // Function to refocus on the video player
  function refocusOnPlayer() {
    const video = document.querySelector('video');
    if (video) {
      video.focus();
    }
  }
  
  // Main execution
  injectBox();
  