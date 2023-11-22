function onToggle(id) {
  const dropdown = document.querySelector(`#bg-${id}`);
  const show = document.querySelectorAll(`#onShow-${id}`);
  show.forEach((element) => {
    if (element.style.display === "none") {
      dropdown.classList.add("bg-light-gray");
      element.style.display = "block";
    } else {
      dropdown.classList.remove("bg-light-gray");
      element.style.display = "none";
    }
  });
}

function onDowndown(id) {
  const dropdown = document.querySelector(`#${id}`);
  if (dropdown.style.display === "none") {
    dropdown.style.display = "block";
  } else {
    dropdown.style.display = "none";
  }
}
