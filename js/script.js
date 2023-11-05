window.onload = function () {
  const counterElements = document.querySelectorAll(".counter span");
  counterElements.forEach((counterElement) => {
    const from = parseInt(counterElement.getAttribute("data-from"));
    const to = parseInt(counterElement.getAttribute("data-to"));
    const speed = parseInt(counterElement.getAttribute("data-speed"));
    const refreshInterval = parseInt(
      counterElement.getAttribute("data-refresh-interval")
    );

    let currentCount = from;
    const step = (to - from) / (speed / refreshInterval || 1);

    const counterInterval = setInterval(() => {
      currentCount += step;
      if (currentCount >= to) {
        currentCount = to;
        clearInterval(counterInterval);
      }
      counterElement.textContent = Math.floor(currentCount);
    }, refreshInterval);
  });

  const progressBar = document.querySelectorAll(".progress-bar");
  progressBar.forEach((progressBar) => {
    const percent = parseInt(progressBar.getAttribute("data-percent"));
    const delay = parseInt(progressBar.getAttribute("data-delay"));

    setTimeout(function () {
      progressBar.style.width = percent + "%";
    }, delay);
  });
};
