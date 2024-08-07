console.clear();

document.addEventListener("DOMContentLoaded", () => {
  const button = document.getElementById("button") as HTMLButtonElement;
  const select = document.getElementById("farbeAuswahlen") as HTMLSelectElement;

  button.addEventListener("click", (event: MouseEvent) => {
    event.preventDefault();
    const selectedIndex = select.selectedIndex;
    if (selectedIndex !== -1) {
      select.options[selectedIndex].remove();
    }
  });
});
