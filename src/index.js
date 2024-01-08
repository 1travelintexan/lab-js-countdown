const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval
const toastElement = document.querySelector("#toast");
const toastMessage = document.querySelector("#toast-message");
const toastCloseBtn = document.querySelector("#close-toast");
// ITERATION 1: Add event listener to the start button

// Your code goes here ...
const startBtn = document.querySelector("#start-btn");
startBtn.addEventListener("click", () => {
  startCountdown();
});
let timeDom = document.querySelector("#time");
// ITERATION 2: Start Countdown
function startCountdown() {
  console.log("startCountdown called!");

  timer = setInterval(() => {
    remainingTime--;
    timeDom.innerText = remainingTime;
    if (remainingTime === 5) {
      showToast("⏰ Final countdown! ⏰");
    } else if (remainingTime === 3) {
      showToast("Start the engines! 💥");
    } else if (remainingTime === 0) {
      clearInterval(timer);
      showToast("Lift off! 🚀");
    }
  }, 1000);
}

// ITERATION 3: Show Toast
function showToast(message) {
  console.log("showToast called!");
  toastElement.classList.add("show");
  toastMessage.innerText = message;
  setTimeout(() => {
    toastElement.classList.remove("show");
  }, 3000);
  // Your code goes here ...

  // BONUS: ITERATION 4: TOAST CLOSE BUTTON

  // Your code goes here ...
  toastCloseBtn.addEventListener("click", () => {
    toastElement.classList.remove("show");
  });
}
