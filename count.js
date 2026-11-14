const btn = document.querySelector("#startButton");
const countDown = document.querySelector("#countdown");

btn.addEventListener("click", () => {
  const interval = setInterval(() => {
    countDown.textContent -= 1;
    if (Number(countDown.textContent) <= 0) {
      clearInterval(interval);
      countDown.textContent = "Time's up!";
    }
  }, 1000);
});
