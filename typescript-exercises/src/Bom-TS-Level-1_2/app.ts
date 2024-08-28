document.addEventListener("DOMContentLoaded", () => {
  const button = document.querySelector<HTMLButtonElement>("#btn");
  const progressText = document.querySelector<HTMLDivElement>(".zeit");

  let intervalId: number | undefined;
  let progress = 100;

  // Function to start the countdown
  const startCountdown = () => {
    if (intervalId) {
      clearInterval(intervalId); // If an interval is already running, clear it
    }

    progress = 100; // Reset progress to 100%
    progressText!.textContent = `${progress}%`; // Update progress text

    intervalId = window.setInterval(() => {
      if (progress > 0) {
        progress -= 1; // Decrease progress by 1%
        progressText!.textContent = `${progress}%`; // Update progress text
      } else {
        clearInterval(intervalId); // Stop the interval when progress reaches 0
      }
    }, 100); // Update every 100 milliseconds (0.1 second)
  };

  // Attach event listener to the button
  button?.addEventListener("click", startCountdown);
});
