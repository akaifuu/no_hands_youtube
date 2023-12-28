// Function to create and inject the box
function injectBox() {
  const box = document.createElement("div");
  box.setAttribute(
    "style",
    "position: fixed; bottom: 20px; right: 20px; z-index: 1000; background-color: #0F0F0F; padding: 10px; border-radius: 8px; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3); display: flex; align-items: center;"
  );

  const input = document.createElement("input");
  input.type = "text";
  input.id = "timeInput";
  input.style =
    "border: none; padding: 8px; width: 60px; margin-right: 10px; border-radius: 4px; background-color: #181818; color: #c0c0c0;";

  input.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
      seekVideo(input.value);
      input.value = ""; // Clear the input box
      refocusOnPlayer(); // Refocus on the video player
    }
  });

  // Apply focus styles
  input.addEventListener("focus", () => {
    input.style.outline = "2px solid white"; // Outline style for focused input
  });

  input.addEventListener("blur", () => {
    input.style.outline = "none"; // Remove outline when not focused
  });

  box.appendChild(input);
  document.body.appendChild(box);
}

// Function to handle keyboard input
document.addEventListener("keydown", (event) => {
  if (event.ctrlKey && event.key === "b") {
    // Change 'b' to your preferred key
    const input = document.getElementById("timeInput");
    if (input) {
      input.focus();
    }
  }
});

// Function to handle time input and seek the video
function seekVideo(timeInput) {
  const video = document.querySelector("video");
  if (!video) return;

  const time = parseTimeInput(timeInput);
  if (!isNaN(time) && isFinite(time)) {
    video.currentTime = time;
  }
}

function parseTimeInput(input) {
  const parts = input.split(":").map(Number);
  const minutes = parts[0] || 0;
  const seconds = parts[1] || 0;
  return minutes * 60 + seconds;
}

/*function seekVideo(timeInput) {
  const video = document.querySelector("video");
  if (!video) return;

  const time = parseTimeInput(timeInput);
  video.currentTime = time;
}

function parseTimeInput(input) {
  const parts = input.split(":");
  const minutes = parseInt(parts[0], 10);
  const seconds = parts.length > 1 ? parseInt(parts[1], 10) : 0;
  return minutes * 60 + seconds;
}
*/
// Function to refocus on the video player
function refocusOnPlayer() {
  const video = document.querySelector("video");
  if (video) {
    video.focus();
  }
}

// Listen for messages from the popup script
/*
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  const goButton = document.getElementById("goButton");
  if (goButton) {
    goButton.style.display = request.isGoButtonVisible
      ? "inline-block"
      : "none";
  }
});
*/

// Main execution
injectBox();
