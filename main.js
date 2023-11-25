function onToggle(id) {
  const dropdown = document.querySelector(`#bg-${id}`);
  const show = document.querySelectorAll(`#onShow-${id}`);
  for (let i = 0; i < 5; i++) {
    if(i != id) {
      const dropall = document.querySelector(`#bg-${i}`);
      const onShow = document.querySelectorAll(`#onShow-${i}`)
      onShow.forEach(element => {
        dropall.classList.remove("bg-light-gray");
        element.style.display = "none";
      })
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

function onDowndown(id) {
  const dropdown = document.querySelector(`#${id}`);
  if (dropdown.style.display === "none") {
    dropdown.style.display = "block";
  } else {
    dropdown.style.display = "none";
  }
}
const menubtn1 = document.getElementById('menubtn1');
const menubtn2 = document.getElementById('menubtn2');
const dc = document.getElementById('dc');
const notify = document.getElementById('notification');
window.addEventListener('click', (event) => {
  if (!dc.contains(event.target) && !menubtn2.contains(event.target)) {
    dc.style.display = "none";
  }
  if (!notify.contains(event.target) && !menubtn1.contains(event.target)) {
    notify.style.display = "none";
  }
});

const value = document.querySelector("#value");
const input = document.querySelector("#slide");
value.textContent = input.value;
input.addEventListener("input", (event) => {
  console.log(event);
  value.textContent = event.target.value;
});

const check = document.querySelectorAll('.show-svg input');
check.forEach(element => {
  element.addEventListener('click', (e)=> {
    const checked = e.target;
    const parentElement = checked.parentNode;
    const childElement = parentElement.childNodes[1]
    const svgElement = parentElement.childNodes[5].childNodes[1]
    if(e.target.checked === true) {
      childElement.classList.remove('sr-only')
      svgElement.classList.add('hidden')
      input.setAttribute('value', parseInt(input.value) + 1)
      value.textContent = input.value;
    } else {
      childElement.classList.add('sr-only')
      svgElement.classList.remove('hidden')
      input.setAttribute('value', input.value - 1)
      value.textContent = input.value;
    }
  })
})

