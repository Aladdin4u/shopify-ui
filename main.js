const HIDDEN_CLASS = "hide"
const CHECKBOX_DONE = "checkbox-done"
function onToggle(id) {
  const dropdown = document.querySelector(`#bg-${id}`);
  const show = document.querySelectorAll(`#onShow-${id}`);
  for (let i = 0; i < 5; i++) {
    if (i != id) {
      const dropall = document.querySelector(`#bg-${i}`);
      const onShow = document.querySelectorAll(`#onShow-${i}`);
      onShow.forEach((element) => {
        dropall.classList.remove("bg-light-gray");
        element.style.display = "none";
      });
    }
  }
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

function onDowndown(id, buttonId) {
  const dropdown = document.querySelector(`#${id}`);
  closeOtherDropdowns(buttonId);
  dropdown.classList.toggle(HIDDEN_CLASS);
}

function closeOtherDropdowns(excludeButtonId) {
  var dropdowns = document.querySelectorAll('.dropdown-content');
  dropdowns.forEach(function (dropdown) {
    var buttonId = dropdown.getAttribute('aria-labelledby');
    if (excludeButtonId !== buttonId) {
      dropdown.classList.add('hide');
    }
  });
}

const value = document.querySelector("#value");
const input = document.querySelector("#slide");
value.textContent = input.value;
let count = parseInt(input.value)

function handleMarkDoneOrNotDone(id) {
  const checkboxBtn = document.getElementById(`checkbox-btn-${id}`);
  const notCompletedIcon = document.getElementById(`not-completed-icon-${id}`);
  const completedIcon = document.getElementById(`completed-icon-${id}`);
  const loadingIcon = document.getElementById(`loading-icon-${id}`);
  const checkboxStatus = document.getElementById(`status-${id}`);
  
    const checked = checkboxBtn.classList.contains(CHECKBOX_DONE);
    if (checked) {
      handleMarkAsNotDone();
    } else {
      handleMarkAsDone();
    }

  function handleMarkAsDone() {
    notCompletedIcon.classList.add(HIDDEN_CLASS);
    loadingIcon.classList.remove(HIDDEN_CLASS);
    checkboxStatus.ariaLabel = "Loading. Please wait...";
    setTimeout(() => {
      loadingIcon.classList.add(HIDDEN_CLASS);
      completedIcon.classList.remove(HIDDEN_CLASS);
      checkboxBtn.classList.add(CHECKBOX_DONE);
      checkboxBtn.ariaLabel = checkboxBtn.ariaLabel.replace(
        "as done",
        "as not done"
      );
      checkboxStatus.ariaLabel = "Successfully marked as done.";
      count ++
      if(count >= 5) {
        input.setAttribute("value", 5);
        value.textContent = 5;
      } else {
        input.setAttribute("value", count);
        value.textContent = count;
      }
    }, 3000);
  }

  function handleMarkAsNotDone() {
    completedIcon.classList.add(HIDDEN_CLASS);
    loadingIcon.classList.remove(HIDDEN_CLASS);
    checkboxStatus.ariaLabel = "Loading. Please wait...";
    setTimeout(() => {
      loadingIcon.classList.add(HIDDEN_CLASS);
      notCompletedIcon.classList.remove(HIDDEN_CLASS);
      checkboxBtn.classList.remove(CHECKBOX_DONE);
      checkboxBtn.ariaLabel = checkboxBtn.ariaLabel.replace(
        "as not done",
        "as done"
      );
      checkboxStatus.ariaLabel = "Successfully marked as not done.";
      count --;
      console.log(count);
      if(count <= 0) {
        input.setAttribute("value", 0);
        value.textContent = 0;
      } else {
        input.setAttribute("value", count);
        value.textContent = input.value;
      }
    }, 3000);
  }
}
